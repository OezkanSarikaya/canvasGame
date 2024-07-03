class BackgroundObject extends MoveableObject {
  // height = 480;
  // width = 720;

  height = 720;
  width = 1080;

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 720 - this.height;
  }
}
