/**
 * Represents a chicken enemy in the game.
 * Extends the MoveableObject class.
 */
class Chicken extends MoveableObject {
  /**
   * The height of the chicken.
   * @type {number}
   */
  height = 62;

  /**
   * The width of the chicken.
   * @type {number}
   */
  width = 60;

  /**
   * The reference to the game world.
   * @type {Object}
   */
  world;

  /**
   * The images used for the walking animation.
   * @type {string[]}
   */
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  /**
   * The images used when the chicken is dead.
   * @type {string[]}
   */
  IMAGES_DEAD = ["./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

  /**
   * The offset values for the chicken's collision box.
   * @type {{top: number, left: number, right: number, bottom: number}}
   */
  offset = {
    top: 3,
    left: 3,
    right: 3,
    bottom: 3,
  };

  /**
   * The vertical position of the chicken.
   * @type {number}
   */
  y = 640 - this.height;

  /**
   * Creates an instance of a Chicken object.
   * Loads the initial image and sets up the chicken's position and speed.
   * @param {number} speed - The base speed of the chicken.
   */
  constructor(speed) {
    super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 200 + Math.random() * 2100;
    this.speed = speed + Math.random() * 0.95;
    this.animate();
  }

  /**
   * Animates the chicken by moving it and playing the appropriate animation.
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
        this.chickWalk(chicken_sound);
      } else {
        this.chickDeath(timepassed, this.lastHit);
      }
    }, 120);
  }
}