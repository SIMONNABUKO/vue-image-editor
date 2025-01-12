# Vue Image Editor

A comprehensive and customizable image editor component for Vue.js applications. This package provides a powerful set of tools for editing images directly in the browser, including blur, pixelate, text overlay, and emoji placement features.

## Features

- **Blur**: Apply a customizable blur effect to specific areas of the image
- **Pixelate**: Pixelate selected regions of the image
- **Text Overlay**: Add, edit, and position text on the image
- **Emoji Placement**: Add and position emojis on the image
- **Drag and Resize**: Easily adjust the position and size of blur/pixelate areas, text, and emojis
- **Responsive Design**: Works well on both desktop and mobile devices
- **Customizable UI**: Easily integrate the editor into your existing Vue.js applications

## Installation

You can install the Vue Image Editor package using npm:

```bash
npm install vue-image-editor
```

Or using yarn:

```bash
yarn add vue-image-editor
```

## Usage

### Basic Setup

First, import and register the component in your Vue.js application:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import VueImageEditor from 'vue-image-editor'

const app = createApp(App)
app.use(VueImageEditor)
app.mount('#app')
```

Then, you can use the component in your Vue template:

```vue
<template>
  <div>
    <button @click="openEditor">Edit Image</button>
    <vue-image-editor
      :is-open="isEditorOpen"
      :image-url="imageUrl"
      @close="closeEditor"
      @save="handleSave"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditorOpen: false,
      imageUrl: 'path/to/your/image.jpg'
    }
  },
  methods: {
    openEditor() {
      this.isEditorOpen = true
    },
    closeEditor() {
      this.isEditorOpen = false
    },
    handleSave(editedImageData) {
      console.log('Edited image data:', editedImageData)
      // Handle the edited image data (e.g., save it or display it)
    }
  }
}
</script>
```

### Props

The `vue-image-editor` component accepts the following props:

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | Boolean | Yes | - | Controls the visibility of the editor |
| `imageUrl` | String | Yes | - | URL of the image to be edited |
| `tools` | Array | No | All tools | Array of tool objects to customize the toolbar |

### Events

The component emits the following events:

| Event | Payload | Description |
|-------|---------|-------------|
| `close` | None | Emitted when the editor is closed |
| `save` | `editedImageData` (String) | Emitted when changes are applied, with the edited image data as payload |

### Available Tools

The Vue Image Editor comes with the following tools:

1. **Blur**: Apply a blur effect to specific areas of the image
2. **Pixelate**: Pixelate selected regions of the image
3. **Text**: Add and edit text overlays on the image
4. **Emoji**: Add and position emojis on the image

### Customizing the Toolbar

You can customize the toolbar by passing a `tools` prop to the component:

```vue
<template>
  <vue-image-editor
    :is-open="isEditorOpen"
    :image-url="imageUrl"
    :tools="customTools"
    @close="closeEditor"
    @save="handleSave"
  />
</template>

<script>
export default {
  data() {
    return {
      isEditorOpen: false,
      imageUrl: 'path/to/your/image.jpg',
      customTools: [
        { name: 'blur', label: 'Blur' },
        { name: 'text', label: 'Add Text' },
        { name: 'emoji', label: 'Add Emoji' }
      ]
    }
  },
  methods: {
    openEditor() {
      this.isEditorOpen = true
    },
    closeEditor() {
      this.isEditorOpen = false
    },
    handleSave(editedImageData) {
      // Handle the saved image data
    }
  }
}
</script>
```

### Using Specific Tools

#### Blur and Pixelate

To use the blur or pixelate tools:

1. Select the tool from the toolbar.
2. Click and drag on the image to create a blur/pixelate area.
3. Use the slider to adjust the intensity of the effect.
4. Drag the corners of the area to resize it.

#### Text

To add text to the image:

1. Select the text tool from the toolbar.
2. Enter your text in the input field.
3. Choose a color and font size using the provided controls.
4. Click "Add Text" to place the text on the image.
5. Drag the text to reposition it.

#### Emoji

To add emojis to the image:

1. Select the emoji tool from the toolbar.
2. Choose an emoji from the picker.
3. The emoji will be added to the image.
4. Drag the emoji to reposition it.

### Handling the Edited Image

When the user saves their changes, the `save` event is emitted with the edited image data as a base64-encoded string. You can handle this data as follows:

```vue
<template>
  <vue-image-editor
    :is-open="isEditorOpen"
    :image-url="imageUrl"
    @close="closeEditor"
    @save="handleSave"
  />
</template>

<script>
export default {
  methods: {
    handleSave(editedImageData) {
      // Display the edited image
      this.displayImage(editedImageData);
      
      // Or save it to your server
      this.saveImageToServer(editedImageData);
      
      // Or download it
      this.downloadImage(editedImageData);
    },
    displayImage(imageData) {
      const img = document.createElement('img');
      img.src = imageData;
      document.body.appendChild(img);
    },
    saveImageToServer(imageData) {
      // Implement your server-saving logic here
    },
    downloadImage(imageData) {
      const link = document.createElement('a');
      link.href = imageData;
      link.download = 'edited-image.png';
      link.click();
    }
  }
}
</script>
```

### Styling

The Vue Image Editor component uses scoped styles, so it won't interfere with your existing styles. However, you can override some styles by targeting the `.image-editor` class:

```css
.image-editor {
  /* Your custom styles here */
}
```

## Examples

### Basic Usage

```vue
<template>
  <div>
    <img :src="currentImage" alt="Edited Image" />
    <button @click="openEditor">Edit Image</button>
    <vue-image-editor
      :is-open="isEditorOpen"
      :image-url="originalImageUrl"
      @close="closeEditor"
      @save="handleSave"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditorOpen: false,
      originalImageUrl: 'path/to/original/image.jpg',
      currentImage: 'path/to/original/image.jpg'
    }
  },
  methods: {
    openEditor() {
      this.isEditorOpen = true
    },
    closeEditor() {
      this.isEditorOpen = false
    },
    handleSave(editedImageData) {
      this.currentImage = editedImageData
      this.closeEditor()
    }
  }
}
</script>
```

### With Custom Toolbar and Styling

```vue
<template>
  <div>
    <img :src="currentImage" alt="Edited Image" />
    <button @click="openEditor">Edit Image</button>
    <vue-image-editor
      :is-open="isEditorOpen"
      :image-url="originalImageUrl"
      :tools="customTools"
      @close="closeEditor"
      @save="handleSave"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditorOpen: false,
      originalImageUrl: 'path/to/original/image.jpg',
      currentImage: 'path/to/original/image.jpg',
      customTools: [
        { name: 'blur', label: 'Blur' },
        { name: 'text', label: 'Add Text' },
        { name: 'emoji', label: 'Add Emoji' }
      ]
    }
  },
  methods: {
    openEditor() {
      this.isEditorOpen = true
    },
    closeEditor() {
      this.isEditorOpen = false
    },
    handleSave(editedImageData) {
      this.currentImage = editedImageData
      this.closeEditor()
    }
  }
}
</script>

<style>
.image-editor {
  --editor-bg-color: #2c3e50;
  --editor-text-color: #ecf0f1;
}
</style>
```

## Troubleshooting

### Image Not Loading

If the image doesn't load, ensure that:
1. The `imageUrl` prop is correct and accessible.
2. You're not facing any CORS (Cross-Origin Resource Sharing) issues. You might need to configure your server to allow cross-origin requests.

### Editor Not Opening

If the editor doesn't open, check that:
1. The `isOpen` prop is correctly toggled in your parent component.
2. There are no console errors indicating missing dependencies or incorrect usage.

### Saving Issues

If you're having trouble saving the edited image:
1. Check the browser console for any error messages.
2. Ensure that the `save` event is correctly handled in your parent component.
3. Verify that you have sufficient storage space if you're saving the image locally.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

If you encounter any problems or have any questions, please open an issue on the GitHub repository.

---

Made with ❤️ by Simon Angatia