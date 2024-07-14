/**
 * This class is for the enemy chick (small chicken)
 */
class Chick extends MoveableObject {
  height = 42;
  width = 40;
  y = 640 - this.height;

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

  /**
   * Constructor for class chick
   */
  constructor(speed) {
    super().loadImage("./img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 200 + Math.random() * 2100;
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
        this.chickWalk(chick_sound);
      } else {
        this.chickDeath(timepassed, this.lastHit);
      }
    }, 120);
  }
}
