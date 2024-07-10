class BackgroundObject extends DrawableObject {
  // height = 480;
  // width = 720;

  height = 720;
  width = 1080;

  constructor(imagePath, x, y, width, height) {
    super().loadImage(imagePath);
    this.x = x;
    if (y) {
      this.y = y;
    } else {
      this.y = 720 - this.height;
    }

    if (width && height) {
      this.width = width;
      this.height = width;
    }

    // this.animate();
  }

  // animate() {
  //   setInterval(() => {
  //     this.moveRight();
  //   }, 1000 / 60);
  // }
}
