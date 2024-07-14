class Cloud extends MoveableObject {
  height = 360;
  width = 640;
  speed = 0.5;
  y = 50;

  constructor() {
    super().loadImage("./img/5_background/layers/4_clouds/1.png");
    this.x = Math.random() * 2100;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
