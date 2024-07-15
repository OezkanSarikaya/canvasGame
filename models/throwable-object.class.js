/**
 * Represents a throwable object in the game, such as a salsa bottle.
 * Extends the MoveableObject class.
 */
class ThrowableObject extends MoveableObject {
  /**
   * Indicates whether the object has splashed.
   * @type {boolean}
   */
  isSplashed = false;

  /**
   * Array of image paths for the bottle rotation animation.
   * @type {string[]}
   */
  IMAGES_BOTTLE_ROTATION = [
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  /**
   * Array of image paths for the bottle splash animation.
   * @type {string[]}
   */
  IMAGES_BOTTLE_SPLASH = [
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  /**
   * Offset values for collision detection.
   * @type {Object}
   * @property {number} top - The top offset.
   * @property {number} left - The left offset.
   * @property {number} right - The right offset.
   * @property {number} bottom - The bottom offset.
   */
  offset = {
    top: 14,
    left: 14,
    right: 14,
    bottom: 10,
  };

  /**
   * Creates an instance of a ThrowableObject.
   * @param {number} x - The initial x-coordinate.
   * @param {number} y - The initial y-coordinate.
   * @param {boolean} otherDirection - Indicates the direction of the throw.
   */
  constructor(x, y, otherDirection) {
    super().loadImage("./img/6_salsa_bottle/salsa_bottle.png");
    this.loadImages(this.IMAGES_BOTTLE_ROTATION);
    this.loadImages(this.IMAGES_BOTTLE_SPLASH);
    this.width = 60;
    this.height = 70;
    this.x = x;
    this.y = y;
    this.animate();
    this.throw(otherDirection);
  }

  /**
   * Animates the throwable object, switching between rotation and splash animations.
   */
  animate() {
    const splashInterval = setInterval(() => {
      if (!this.isSplashed) {
        this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
      } else {
        this.playAnimationOnce(this.IMAGES_BOTTLE_SPLASH);
        setTimeout(() => {
          this.y = 900;   
        }, 500);
        clearInterval(splashInterval);
      }
    }, 100);
  }
}