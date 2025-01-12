export function initCanvas(canvas, image) {
  return new Promise((resolve) => {
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    resolve(ctx);
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

