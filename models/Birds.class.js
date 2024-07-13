class Birds extends MoveableObject {
  height = 160;
  width = 320;
  speed = 1.5;
  y = 50;
  otherDirection = true;

  constructor() {
    super().loadImage("./img/5_background/layers/birds.png");
    // this.x = Math.random() * (2100 - -1000) + -2100;
    this.x = Math.floor(Math.random() * 2000) + -1000;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveRight();
    }, 1000 / 60);
  }
}
