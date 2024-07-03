class Cloud extends MoveableObject {
  height = 360;
  width = 640;
  speed = 0.15;
  // x= 720;
  y = 20;
  constructor() {
    super().loadImage("../img/5_background/layers/4_clouds/1.png");
    this.x = 0 + Math.random() * 500;
    this.animate();
  }

  animate() {
    this.moveLeft();
  }
}
