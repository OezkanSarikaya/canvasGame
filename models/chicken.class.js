class Chicken extends MoveableObject {
  height = 62;
  width = 60;
  world;
  // isEnemyDead = false;
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

  offset = {
    top: 3,
    left: 3,
    right: 3,
    bottom: 3,
  };

  y = 640 - this.height;
  constructor(speed) {
    super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 200 + Math.random() * 2100;
    // this.speed = 0.35 + Math.random() * 0.75;
    this.speed = speed + Math.random() * 0.95;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.energy > 0) {
        this.followCharacter(this.speed, this.characterX);
      }
    }, 1000 / 60);
    let timepassed = 0;
    setInterval(() => {
      if (this.energy > 0) {
        this.chickWalk(chicken_sound);
      } else {
        this.chickDeath(timepassed, this.lastHit);
      }
    }, 120);
  }
}
