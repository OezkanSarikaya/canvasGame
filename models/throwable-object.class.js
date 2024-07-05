class ThrowableObject extends MoveableObject {
  IMAGES_BOTTLE_ROTATION = [
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
  ];

  offset = {
    top: 14,
    left: 14,
    right: 14,
    bottom: 10,
  };

  constructor(x, y, otherDirection) {
    super().loadImage("./img/6_salsa_bottle/salsa_bottle.png");
    this.loadImages(this.IMAGES_BOTTLE_ROTATION);
    this.width = 60;
    this.height = 70;
    // this.world = world; 
    this.x = x;
    this.y = y;    
    this.animate();
    this.throw(otherDirection);    
  }

  animate() {
    setInterval(() => {
      if (world.keyboard.D) {
        this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
      }
    }, 100);
  }
}
