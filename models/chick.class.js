/**
 * Represents a small chick enemy in the game.
 * Extends the MoveableObject class.
 */
class Chick extends MoveableObject {
  /**
   * The height of the chick.
   * @type {number}
   */
  height = 42;

  /**
   * The width of the chick.
   * @type {number}
   */
  width = 40;

  /**
   * The vertical position of the chick.
   * @type {number}
   */
  y = 640 - this.height;

  /**
   * The images used for the walking animation.
   * @type {string[]}
   */
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  /**
   * The images used when the chick is dead.
   * @type {string[]}
   */
  IMAGES_DEAD = ["./img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

  /**
   * The offset values for the chick's collision box.
   * @type {{top: number, left: number, right: number, bottom: number}}
   */
  offset = {
    top: 3,
    left: 3,
    right: 3,
    bottom: 3,
  };

  /**
   * Creates an instance of a Chick object.
   * Loads the initial image and sets up the chick's position and speed.
   * @param {number} speed - The base speed of the chick.
   */
  constructor(speed) {
    super().loadImage("./img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 200 + Math.random() * 2100;
    this.speed = speed + Math.random() * 0.95;
    this.animate();
  }

  /**
   * Animates the chick by moving it and playing the appropriate animation.
   */
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