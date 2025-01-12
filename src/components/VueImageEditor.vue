<template>
  <VueFinalModal
    v-model="isOpenLocal"
    classes="modal-container"
    content-class="modal-content"
    :esc-to-close="true"
    :click-to-close="false"
    :lock-scroll="true"
    :hide-overlay="false"
    overlay-transition="vfm-fade"
    transition="vfm-fade"
  >
    <div class="vue-image-editor">
      <div class="editor-container">
        <div class="toolbar">
          <button
            v-for="tool in tools"
            :key="tool.name"
            @click="selectTool(tool.name)"
            :class="{ active: currentTool === tool.name }"
          >
            {{ tool.label }}
          </button>
        </div>
        <div class="canvas-container" ref="canvasContainer">
          <canvas
            ref="canvas"
            @mousedown="startDrawing"
            @mousemove="draw"
            @mouseup="stopDrawing"
            @mouseleave="stopDrawing"
            @touchstart="startDrawing"
            @touchmove="draw"
            @touchend="stopDrawing"
          ></canvas>
          <div
            v-if="showBlurFrame"
            ref="blurFrame"
            class="blur-frame"
            :style="blurFrameStyle"
            @mousedown="startFrameDrag"
            @touchstart="startFrameDrag"
          >
            <div
              v-for="handle in resizeHandles"
              :key="handle.position"
              class="resize-handle"
              :style="handle.style"
              @mousedown.stop="startResize(handle.position)"
              @touchstart.stop="startResize(handle.position)"
            ></div>
          </div>
          <div
            v-for="(textItem, index) in textItems"
            :key="index"
            class="text-item"
            :style="getTextItemStyle(textItem)"
            @mousedown="startTextDrag(index, $event)"
            @touchstart="startTextDrag(index, $event)"
          >
            <div :style="{ color: textItem.color, fontSize: `${textItem.size}px` }">
              {{ textItem.text }}
            </div>
            <button @click="editText(index)" class="edit-button">Edit</button>
            <button @click="deleteText(index)" class="delete-button">Delete</button>
          </div>
          <div
            v-for="(emojiItem, index) in emojiItems"
            :key="index"
            class="emoji-item"
            :style="getEmojiItemStyle(emojiItem)"
            @mousedown="startEmojiDrag(index, $event)"
            @touchstart="startEmojiDrag(index, $event)"
          >
            {{ emojiItem.emoji }}
            <button @click="deleteEmoji(index)" class="delete-button">Delete</button>
          </div>
        </div>
        <div class="tool-options" v-if="showToolOptions">
          <div v-if="currentTool === 'text'">
            <input v-model="textInput" placeholder="Enter text" />
            <input v-model="textColor" type="color" />
            <input v-model="textSize" type="range" min="12" max="72" />
            <button @click="addText">Add Text</button>
          </div>
          <div v-if="currentTool === 'emoji'">
            <EmojiPicker @select="addEmoji" />
          </div>
          <div v-if="currentTool === 'blur' || currentTool === 'pixelate'">
            <input
              v-model="effectIntensity"
              type="range"
              :min="currentTool === 'pixelate' ? 1 : 1"
              :max="currentTool === 'pixelate' ? 20 : 20"
              @input="applyEffect"
            />
          </div>
        </div>
        <div class="actions">
          <button @click="handleClose">Cancel</button>
          <button @click="handleSave">Save</button>
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>

<script>
import { ref, computed, onMounted, watch, nextTick, onUnmounted } from 'vue'
import { VueFinalModal } from 'vue-final-modal'
import EmojiPicker from './EmojiPicker.vue'

export default {
  name: 'VueImageEditor',
  components: {
    VueFinalModal,
    EmojiPicker,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  emits: ['update:isOpen', 'save'],
  setup(props, { emit }) {
    const canvas = ref(null)
    const ctx = ref(null)
    const canvasContainer = ref(null)
    const originalImage = ref(null)
    const isDrawing = ref(false)
    const currentTool = ref('blur')
    const showToolOptions = ref(false)
    const textInput = ref('')
    const textColor = ref('#ffffff')
    const textSize = ref(24)
    const effectIntensity = ref(5)
    const showBlurFrame = ref(false)
    const isDragging = ref(false)
    const isResizing = ref(false)
    const currentResizeHandle = ref(null)
    const framePosition = ref({ x: 0, y: 0 })
    const frameSize = ref({ width: 100, height: 100 })
    const dragStart = ref({ x: 0, y: 0 })
    const textItems = ref([])
    const emojiItems = ref([])
    const isInitialized = ref(false)
    const isLoading = ref(false)

    const isOpenLocal = computed({
      get: () => props.isOpen,
      set: (value) => emit('update:isOpen', value)
    })

    const tools = [
      { name: 'blur', label: 'Blur' },
      { name: 'pixelate', label: 'Pixelate' },
      { name: 'text', label: 'Text' },
      { name: 'emoji', label: 'Emoji' },
    ]

    const resizeHandles = [
      { position: 'nw', style: { top: '-5px', left: '-5px', cursor: 'nwse-resize' } },
      { position: 'ne', style: { top: '-5px', right: '-5px', cursor: 'nesw-resize' } },
      { position: 'sw', style: { bottom: '-5px', left: '-5px', cursor: 'nesw-resize' } },
      { position: 'se', style: { bottom: '-5px', right: '-5px', cursor: 'nwse-resize' } },
    ]

    const blurFrameStyle = computed(() => ({
      left: `${framePosition.value.x}px`,
      top: `${framePosition.value.y}px`,
      width: `${frameSize.value.width}px`,
      height: `${frameSize.value.height}px`,
    }))

    const getTextItemStyle = (textItem) => ({
      left: `${textItem.x}px`,
      top: `${textItem.y}px`,
    })

    const getEmojiItemStyle = (emojiItem) => ({
      left: `${emojiItem.x}px`,
      top: `${emojiItem.y}px`,
      fontSize: `${emojiItem.size}px`,
    })

    const initCanvasAndImage = async () => {
      if (!canvas.value || !props.imageUrl || isLoading.value) return
      
      isLoading.value = true
      
      try {
        const img = new Image()
        
        await new Promise((resolve, reject) => {
          img.onload = () => {
            try {
              if (!canvas.value) return reject(new Error('Canvas not found'))
              
              canvas.value.width = img.width
              canvas.value.height = img.height
              ctx.value = canvas.value.getContext('2d')
              
              if (!ctx.value) return reject(new Error('Could not get canvas context'))
              
              ctx.value.drawImage(img, 0, 0, img.width, img.height)
              originalImage.value = img
              isInitialized.value = true
              resolve()
            } catch (err) {
              reject(err)
            }
          }
          
          img.onerror = () => reject(new Error('Failed to load image'))
          img.src = props.imageUrl
        })
      } catch (error) {
        console.error('Failed to initialize canvas:', error)
      } finally {
        isLoading.value = false
      }
    }

    const selectTool = (tool) => {
      currentTool.value = tool
      showToolOptions.value = true
      showBlurFrame.value = tool === 'blur' || tool === 'pixelate'
    }

    const startDrawing = (event) => {
      isDrawing.value = true
      draw(event)
    }

    const draw = (event) => {
      if (!isDrawing.value) return

      const rect = canvas.value.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      if (currentTool.value === 'blur' || currentTool.value === 'pixelate') {
        framePosition.value = { x, y }
        frameSize.value = { width: 100, height: 100 }
      }
    }

    const stopDrawing = () => {
      isDrawing.value = false
    }

    const startFrameDrag = (event) => {
      isDragging.value = true
      const rect = canvas.value.getBoundingClientRect()
      dragStart.value = {
        x: event.clientX - rect.left - framePosition.value.x,
        y: event.clientY - rect.top - framePosition.value.y,
      }
    }

    const dragFrame = (event) => {
      if (!isDragging.value) return

      const rect = canvas.value.getBoundingClientRect()
      framePosition.value = {
        x: event.clientX - rect.left - dragStart.value.x,
        y: event.clientY - rect.top - dragStart.value.y,
      }
    }

    const stopFrameDrag = () => {
      isDragging.value = false
    }

    const startResize = (handle) => {
      isResizing.value = true
      currentResizeHandle.value = handle
    }

    const resize = (event) => {
      if (!isResizing.value) return

      const rect = canvas.value.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      switch (currentResizeHandle.value) {
        case 'nw':
          frameSize.value.width += framePosition.value.x - mouseX
          frameSize.value.height += framePosition.value.y - mouseY
          framePosition.value.x = mouseX
          framePosition.value.y = mouseY
          break
        case 'ne':
          frameSize.value.width = mouseX - framePosition.value.x
          frameSize.value.height += framePosition.value.y - mouseY
          framePosition.value.y = mouseY
          break
        case 'sw':
          frameSize.value.width += framePosition.value.x - mouseX
          frameSize.value.height = mouseY - framePosition.value.y
          framePosition.value.x = mouseX
          break
        case 'se':
          frameSize.value.width = mouseX - framePosition.value.x
          frameSize.value.height = mouseY - framePosition.value.y
          break
      }
    }

    const stopResize = () => {
      isResizing.value = false
      currentResizeHandle.value = null
    }

    const applyEffect = () => {
      if (!ctx.value || !originalImage.value || !canvas.value) return

      ctx.value.drawImage(originalImage.value, 0, 0, canvas.value.width, canvas.value.height)

      if (currentTool.value === 'blur') {
        const intensity = effectIntensity.value || 5
        ctx.value.filter = `blur(${intensity}px)`
        ctx.value.drawImage(
          canvas.value,
          framePosition.value.x,
          framePosition.value.y,
          frameSize.value.width,
          frameSize.value.height,
          framePosition.value.x,
          framePosition.value.y,
          frameSize.value.width,
          frameSize.value.height
        )
        ctx.value.filter = 'none'
      } else if (currentTool.value === 'pixelate') {
        const pixelSize = effectIntensity.value || 5
        const imageData = ctx.value.getImageData(
          framePosition.value.x,
          framePosition.value.y,
          frameSize.value.width,
          frameSize.value.height
        )

        for (let y = 0; y < frameSize.value.height; y += pixelSize) {
          for (let x = 0; x < frameSize.value.width; x += pixelSize) {
            const i = (y * frameSize.value.width + x) * 4
            const r = imageData.data[i]
            const g = imageData.data[i + 1]
            const b = imageData.data[i + 2]

            for (let py = 0; py < pixelSize && y + py < frameSize.value.height; py++) {
              for (let px = 0; px < pixelSize && x + px < frameSize.value.width; px++) {
                const pixelIndex = ((y + py) * frameSize.value.width + (x + px)) * 4
                imageData.data[pixelIndex] = r
                imageData.data[pixelIndex + 1] = g
                imageData.data[pixelIndex + 2] = b
              }
            }
          }
        }

        ctx.value.putImageData(imageData, framePosition.value.x, framePosition.value.y)
      }

      drawTextItems()
      drawEmojiItems()
    }

    const addText = () => {
      if (textInput.value) {
        textItems.value.push({
          text: textInput.value,
          x: 50,
          y: 50,
          color: textColor.value,
          size: textSize.value,
        })
        textInput.value = ''
      }
    }

    const startTextDrag = (index, event) => {
      const item = textItems.value[index]
      item.isDragging = true
      item.dragStartX = event.clientX - item.x
      item.dragStartY = event.clientY - item.y
    }

    const dragText = (event) => {
      textItems.value.forEach((item) => {
        if (item.isDragging) {
          item.x = event.clientX - item.dragStartX
          item.y = event.clientY - item.dragStartY
        }
      })
    }

    const stopTextDrag = () => {
      textItems.value.forEach((item) => {
        item.isDragging = false
      })
    }

    const editText = (index) => {
      const item = textItems.value[index]
      textInput.value = item.text
      textColor.value = item.color
      textSize.value = item.size
      textItems.value.splice(index, 1)
    }

    const deleteText = (index) => {
      textItems.value.splice(index, 1)
    }

    const addEmoji = (emoji) => {
      emojiItems.value.push({
        emoji: emoji.i,
        x: 50,
        y: 50,
        size: 24,
      })
    }

    const startEmojiDrag = (index, event) => {
      const item = emojiItems.value[index]
      item.isDragging = true
      item.dragStartX = event.clientX - item.x
      item.dragStartY = event.clientY - item.y
    }

    const dragEmoji = (event) => {
      emojiItems.value.forEach((item) => {
        if (item.isDragging) {
          item.x = event.clientX - item.dragStartX
          item.y = event.clientY - item.dragStartY
        }
      })
    }

    const stopEmojiDrag = () => {
      emojiItems.value.forEach((item) => {
        item.isDragging = false
      })
    }

    const deleteEmoji = (index) => {
      emojiItems.value.splice(index, 1)
    }

    const drawTextItems = () => {
      if (!ctx.value) return
      textItems.value.forEach(item => {
        ctx.value.font = `${item.size}px sans-serif`
        ctx.value.fillStyle = item.color
        ctx.value.fillText(item.text, item.x, item.y)
      })
    }

    const drawEmojiItems = () => {
      if (!ctx.value) return
      emojiItems.value.forEach(item => {
        ctx.value.font = `${item.size}px sans-serif`
        ctx.value.textBaseline = 'middle'
        ctx.value.textAlign = 'center'
        ctx.value.fillText(item.emoji, item.x + item.size / 2, item.y + item.size / 2)
      })
    }

    const handleClose = () => {
      emit('update:isOpen', false)
    }

    const handleSave = () => {
      const editedImageData = canvas.value.toDataURL()
      emit('save', editedImageData)
      handleClose()
    }

    onMounted(async () => {
      if (props.isOpen) {
        await initCanvasAndImage()
      }
    })

    watch(() => props.isOpen, async (newVal) => {
      if (newVal && !isInitialized.value) {
        await nextTick()
        await initCanvasAndImage()
      } else if (!newVal) {
        isInitialized.value = false
      }
    })

    watch(() => props.imageUrl, async (newVal, oldVal) => {
      if (newVal !== oldVal && props.isOpen && !isLoading.value) {
        isInitialized.value = false
        await initCanvasAndImage()
      }
    })

    onUnmounted(() => {
      if (originalImage.value) {
        originalImage.value.src = ''
        originalImage.value = null
      }
      if (ctx.value) {
        ctx.value = null
      }
    })

    return {
      canvas,
      canvasContainer,
      currentTool,
      showToolOptions,
      showBlurFrame,
      textInput,
      textColor,
      textSize,
      effectIntensity,
      framePosition,
      frameSize,
      textItems,
      emojiItems,
      tools,
      resizeHandles,
      blurFrameStyle,
      getTextItemStyle,
      getEmojiItemStyle,
      isOpenLocal,
      selectTool,
      startDrawing,
      draw,
      stopDrawing,
      startFrameDrag,
      dragFrame,
      stopFrameDrag,
      startResize,
      resize,
      stopResize,
      applyEffect,
      addText,
      startTextDrag,
      dragText,
      stopTextDrag,
      editText,
      deleteText,
      addEmoji,
      startEmojiDrag,
      dragEmoji,
      stopEmojiDrag,
      deleteEmoji,
      handleClose,
      handleSave,
      isLoading,
      isInitialized,
    }
  },
}
</script>

<style scoped>
.vue-image-editor {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
}

.editor-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
}

.toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.toolbar button {
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toolbar button.active {
  background-color: #007bff;
  color: #fff;
}

.canvas-container {
  position: relative;
  flex-grow: 1;
  overflow: hidden;
}

canvas {
  max-width: 100%;
  max-height: 100%;
}

.blur-frame {
  position: absolute;
  border: 2px solid #fff;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
  cursor: move;
}

.resize-handle {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border: 1px solid #000;
}

.text-item, .emoji-item {
  position: absolute;
  cursor: move;
}

.tool-options {
  margin-top: 10px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
}

.actions button {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.actions button:first-child {
  background-color: #6c757d;
}

.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.modal-content {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #1a1a1a;
  color: white;
}
</style>

