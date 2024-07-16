/**
 * Represents a bird object in the game that moves across the screen.
 * Extends the MoveableObject class.
 */
class Birds extends MoveableObject {
  /**
   * The height of the bird.
   * @type {number}
   */
  height = 160;

  /**
   * The width of the bird.
   * @type {number}
   */
  width = 320;

  /**
   * The speed at which the bird moves.
   * @type {number}
   */
  speed = 1.5;

  /**
   * The y-coordinate position of the bird.
   * @type {number}
   */
  y = 50;

  /**
   * Indicates whether the bird is moving in the opposite direction.
   * @type {boolean}
   */
  otherDirection = true;

  /**
   * Creates an instance of a Birds object.
   * Initializes the bird's position and starts its animation.
   */
  constructor() {
    super().loadImage("./img/5_background/layers/birds.png");
    this.x = Math.floor(Math.random() * 2000) + -1000;
    this.animate();
  }

  /**
   * Animates the bird by moving it to the right at regular intervals.
   * The bird moves at a speed of 1.5 units per frame, updating 60 times per second.
   */
  animate() {
    setInterval(() => {
      this.moveRight();
    }, 1000 / 60);
  }
}
