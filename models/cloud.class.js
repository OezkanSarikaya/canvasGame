/**
 * Represents a cloud in the game.
 * Extends the MoveableObject class.
 */
class Cloud extends MoveableObject {
  /**
   * The height of the cloud.
   * @type {number}
   */
  height = 360;

  /**
   * The width of the cloud.
   * @type {number}
   */
  width = 640;

  /**
   * The speed at which the cloud moves.
   * @type {number}
   */
  speed = 0.5;

  /**
   * The vertical position of the cloud.
   * @type {number}
   */
  y = 50;

  /**
   * Creates an instance of a Cloud object.
   * Loads the initial image and sets up the cloud's position.
   */
  constructor() {
    super().loadImage("./img/5_background/layers/4_clouds/1.png");
    this.x = Math.random() * 2100;
    this.animate();
  }

  /**
   * Animates the cloud by moving it to the left.
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}