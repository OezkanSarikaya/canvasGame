class Bottles extends DrawableObject {

  offset = {
    top: 14,
    left: 14,
    right: 14,
    bottom: 10
  };
  constructor() {
    let xPosition;

    if (Math.random() * 10 > 5) {
      super().loadImage("./img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
    } else {
      super().loadImage("./img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    }

    this.width = 80;
    this.height = 80;
    // this.y = 350;
    this.y = 640 - this.height;
    xPosition = -600 + Math.random() * 2100;
    this.x = Math.trunc(xPosition / this.width) * 90;
  }
}
