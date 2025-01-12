export function initCanvas(canvas, canvasContainer, imageUrl) {
    return new Promise((resolve) => {
      canvas.width = canvasContainer.clientWidth;
      canvas.height = canvasContainer.clientHeight;
      const ctx = canvas.getContext('2d');
  
      const originalImage = new Image();
      originalImage.onload = () => {
        ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);
        resolve(ctx);
      };
      originalImage.src = imageUrl;
    });
  }
  
  export function applyBlurEffect(ctx, canvas, framePosition, frameSize, intensity) {
    ctx.filter = `blur(${intensity}px)`;
    ctx.drawImage(
      canvas,
      framePosition.x,
      framePosition.y,
      frameSize.width,
      frameSize.height,
      framePosition.x,
      framePosition.y,
      frameSize.width,
      frameSize.height
    );
    ctx.filter = 'none';
  }
  
  export function applyPixelateEffect(ctx, framePosition, frameSize, pixelSize) {
    const imageData = ctx.getImageData(
      framePosition.x,
      framePosition.y,
      frameSize.width,
      frameSize.height
    );
  
    for (let y = 0; y < frameSize.height; y += pixelSize) {
      for (let x = 0; x < frameSize.width; x += pixelSize) {
        const i = (y * frameSize.width + x) * 4;
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
  
        for (let py = 0; py < pixelSize; py++) {
          for (let px = 0; px < pixelSize; px++) {
            if (x + px < frameSize.width && y + py < frameSize.height) {
              const pixelIndex = ((y + py) * frameSize.width + (x + px)) * 4;
              imageData.data[pixelIndex] = r;
              imageData.data[pixelIndex + 1] = g;
              imageData.data[pixelIndex + 2] = b;
            }
          }
        }
      }
    }
  
    ctx.putImageData(imageData, framePosition.x, framePosition.y);
  }
  
  export function getResizeHandles() {
    return [
      { position: 'nw', style: { top: '-5px', left: '-5px', cursor: 'nwse-resize' } },
      { position: 'ne', style: { top: '-5px', right: '-5px', cursor: 'nesw-resize' } },
      { position: 'sw', style: { bottom: '-5px', left: '-5px', cursor: 'nesw-resize' } },
      { position: 'se', style: { bottom: '-5px', right: '-5px', cursor: 'nwse-resize' } },
    ];
  }
  
  export function handleResize(currentHandle, framePosition, frameSize, mouseX, mouseY) {
    switch (currentHandle) {
      case 'nw':
        frameSize.width += framePosition.x - mouseX;
        frameSize.height += framePosition.y - mouseY;
        framePosition.x = mouseX;
        framePosition.y = mouseY;
        break;
      case 'ne':
        frameSize.width = mouseX - framePosition.x;
        frameSize.height += framePosition.y - mouseY;
        framePosition.y = mouseY;
        break;
      case 'sw':
        frameSize.width += framePosition.x - mouseX;
        frameSize.height = mouseY - framePosition.y;
        framePosition.x = mouseX;
        break;
      case 'se':
        frameSize.width = mouseX - framePosition.x;
        frameSize.height = mouseY - framePosition.y;
        break;
    }
    return { framePosition, frameSize };
  }
  