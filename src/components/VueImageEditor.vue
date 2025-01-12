<template>
  <vue-final-modal
    :modelValue="isOpen"
    @update:modelValue="$emit('update:isOpen', $event)"
    classes="modal-container"
    content-class="modal-content"
  >
    <div class="vue-image-editor">
      <div class="editor-container">
        <div class="toolbar">
          <button
            v-for="tool in availableTools"
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
  </vue-final-modal>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { VueFinalModal } from 'vue-final-modal'
import EmojiPicker from './EmojiPicker.vue';
import { initCanvas, applyBlurEffect, applyPixelateEffect, getResizeHandles, handleResize } from '../utils/imageEditorUtils';

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
    tools: {
      type: Array,
      default: () => ['blur', 'pixelate', 'text', 'emoji'],
    },
  },
  emits: ['update:isOpen', 'save'],
  setup(props, { emit }) {
    const canvas = ref(null);
    const ctx = ref(null);
    const canvasContainer = ref(null);
    const blurFrame = ref(null);
    const originalImage = ref(null);

    const currentTool = ref('blur');
    const showToolOptions = ref(false);
    const showBlurFrame = ref(false);
    const isDrawing = ref(false);
    const isDragging = ref(false);
    const isResizing = ref(false);
    const currentResizeHandle = ref(null);

    const textInput = ref('');
    const textColor = ref('#ffffff');
    const textSize = ref(24);
    const effectIntensity = ref(5);

    const framePosition = ref({ x: 0, y: 0 });
    const frameSize = ref({ width: 100, height: 100 });
    const dragStart = ref({ x: 0, y: 0 });

    const textItems = ref([]);
    const emojiItems = ref([]);

    const availableTools = computed(() => {
      const allTools = [
        { name: 'blur', label: 'Blur' },
        { name: 'pixelate', label: 'Pixelate' },
        { name: 'text', label: 'Text' },
        { name: 'emoji', label: 'Emoji' },
      ];
      return allTools.filter(tool => props.tools.includes(tool.name));
    });

    const resizeHandles = getResizeHandles();

    const blurFrameStyle = computed(() => ({
      left: `${framePosition.value.x}px`,
      top: `${framePosition.value.y}px`,
      width: `${frameSize.value.width}px`,
      height: `${frameSize.value.height}px`,
    }));

    const getTextItemStyle = (textItem) => ({
      left: `${textItem.x}px`,
      top: `${textItem.y}px`,
    });

    const getEmojiItemStyle = (emojiItem) => ({
      left: `${emojiItem.x}px`,
      top: `${emojiItem.y}px`,
      fontSize: `${emojiItem.size}px`,
    });

    const initCanvas = async () => {
      ctx.value = await initCanvas(canvas.value, canvasContainer.value, props.imageUrl);
      originalImage.value = await new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = props.imageUrl;
      });
    };

    const selectTool = (tool) => {
      currentTool.value = tool;
      showToolOptions.value = true;
      if (tool === 'blur' || tool === 'pixelate') {
        showBlurFrame.value = true;
      } else {
        showBlurFrame.value = false;
      }
    };

    const startDrawing = (event) => {
      isDrawing.value = true;
      draw(event);
    };

    const draw = (event) => {
      if (!isDrawing.value) return;

      const rect = canvas.value.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (currentTool.value === 'blur' || currentTool.value === 'pixelate') {
        framePosition.value = { x, y };
        frameSize.value = { width: 100, height: 100 };
      }
    };

    const stopDrawing = () => {
      isDrawing.value = false;
      if (currentTool.value === 'blur' || currentTool.value === 'pixelate') {
        applyEffect();
      }
    };

    const startFrameDrag = (event) => {
      isDragging.value = true;
      const rect = canvas.value.getBoundingClientRect();
      dragStart.value = {
        x: event.clientX - rect.left - framePosition.value.x,
        y: event.clientY - rect.top - framePosition.value.y,
      };
    };

    const dragFrame = (event) => {
      if (!isDragging.value) return;

      const rect = canvas.value.getBoundingClientRect();
      framePosition.value = {
        x: event.clientX - rect.left - dragStart.value.x,
        y: event.clientY - rect.top - dragStart.value.y,
      };
    };

    const stopFrameDrag = () => {
      isDragging.value = false;
      applyEffect();
    };

    const startResize = (handle) => {
      isResizing.value = true;
      currentResizeHandle.value = handle;
    };

    const resize = (event) => {
      if (!isResizing.value) return;

      const rect = canvas.value.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const result = handleResize(currentResizeHandle.value, framePosition.value, frameSize.value, mouseX, mouseY);
      framePosition.value = result.framePosition;
      frameSize.value = result.frameSize;
    };

    const stopResize = () => {
      isResizing.value = false;
      currentResizeHandle.value = null;
      applyEffect();
    };

    const applyEffect = () => {
      ctx.value.drawImage(originalImage.value, 0, 0, canvas.value.width, canvas.value.height);

      if (currentTool.value === 'blur') {
        applyBlurEffect(ctx.value, canvas.value, framePosition.value, frameSize.value, effectIntensity.value);
      } else if (currentTool.value === 'pixelate') {
        applyPixelateEffect(ctx.value, canvas.value, framePosition.value, frameSize.value, effectIntensity.value);
      }
    };

    const addText = () => {
      if (textInput.value) {
        textItems.value.push({
          text: textInput.value,
          x: 50,
          y: 50,
          color: textColor.value,
          size: textSize.value,
          isDragging: false,
        });
        textInput.value = '';
      }
    };

    const startTextDrag = (index, event) => {
      const item = textItems.value[index];
      item.isDragging = true;
      item.dragStartX = event.clientX - item.x;
      item.dragStartY = event.clientY - item.y;
    };

    const dragText = (event) => {
      textItems.value.forEach((item) => {
        if (item.isDragging) {
          item.x = event.clientX - item.dragStartX;
          item.y = event.clientY - item.dragStartY;
        }
      });
    };

    const stopTextDrag = () => {
      textItems.value.forEach((item) => {
        item.isDragging = false;
      });
    };

    const editText = (index) => {
      const item = textItems.value[index];
      textInput.value = item.text;
      textColor.value = item.color;
      textSize.value = item.size;
      textItems.value.splice(index, 1);
    };

    const deleteText = (index) => {
      textItems.value.splice(index, 1);
    };

    const addEmoji = (emoji) => {
      emojiItems.value.push({
        emoji: emoji.i,
        x: 50,
        y: 50,
        size: 24,
        isDragging: false,
      });
    };

    const startEmojiDrag = (index, event) => {
      const item = emojiItems.value[index];
      item.isDragging = true;
      item.dragStartX = event.clientX - item.x;
      item.dragStartY = event.clientY - item.y;
    };

    const dragEmoji = (event) => {
      emojiItems.value.forEach((item) => {
        if (item.isDragging) {
          item.x = event.clientX - item.dragStartX;
          item.y = event.clientY - item.dragStartY;
        }
      });
    };

    const stopEmojiDrag = () => {
      emojiItems.value.forEach((item) => {
        item.isDragging = false;
      });
    };

    const deleteEmoji = (index) => {
      emojiItems.value.splice(index, 1);
    };

    const handleClose = () => {
      emit('update:isOpen', false);
    };

    const handleSave = () => {
      const editedImageData = canvas.value.toDataURL()
      emit('save', editedImageData)
      handleClose()
    };

    onMounted(async () => {
      if (props.isOpen) {
        await initCanvas();
      }
    });

    watch(() => props.isOpen, async (newVal) => {
      if (newVal) {
        await initCanvas();
      }
    });

    watch(() => props.imageUrl, async () => {
      if (props.isOpen) {
        await initCanvas();
      }
    });

    return {
      canvas,
      canvasContainer,
      blurFrame,
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
      availableTools,
      resizeHandles,
      blurFrameStyle,
      getTextItemStyle,
      getEmojiItemStyle,
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
    };
  },
};
</script>

<style scoped>
.vue-image-editor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.editor-container {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
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
}

.modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
</style>

