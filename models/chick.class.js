class Chick extends MoveableObject {
  height = 42;
  width = 40;
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["./img/3_enemies_chicken/chicken_small/2_dead/dead.png"];
  offset = {
    top: 3,
    left: 3,
    right: 3,
    bottom: 3,
  };

  y = 640 - this.height;
  constructor() {
    super().loadImage("./img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 200 + Math.random() * 2100;
    this.speed = 0.25 + Math.random() * 0.75;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (!this.isEnemyDead) {
        this.moveLeft();
      }
    }, 1000 / 60);

    
    let timepassed = 0;
    setInterval(() => {
      if (!this.isEnemyDead) {
        this.playAnimation(this.IMAGES_WALKING);
      } else {
        if (timepassed < 5000) {
          this.playAnimation(this.IMAGES_DEAD);
        } else {
          this.y = -100; 
        }  
        timepassed = new Date().getTime() - this.lastHit;
      }
    }, 120);
  }
}
