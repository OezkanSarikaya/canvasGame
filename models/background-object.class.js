class BackgroundObject extends DrawableObject {
  height = 720;
  width = 1080;

  constructor(imagePath, x, y, width, height, layer) {
    super().loadImage(imagePath);
    this.x = x;
    this.layer = layer;
    if (y) {
      this.y = y;
    } else {
      this.y = 720 - this.height;
    }
    if (width && height) {
      this.width = width;
      this.height = width;
    }
  }
}
