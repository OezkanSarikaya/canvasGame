/**
 * Represents a background object in the game.
 * Extends the DrawableObject class.
 */
class BackgroundObject extends DrawableObject {
  /**
   * The height of the background object.
   * @type {number}
   */
  height = 720;

  /**
   * The width of the background object.
   * @type {number}
   */
  width = 1080;

  /**
   * Creates an instance of a BackgroundObject.
   * Initializes the position, dimensions, and layer of the background object.
   * 
   * @param {string} imagePath - The path to the image of the background object.
   * @param {number} x - The x-coordinate position of the background object.
   * @param {number} [y] - The y-coordinate position of the background object. Defaults to 720 - height if not provided.
   * @param {number} [width] - The width of the background object. Defaults to 1080 if not provided.
   * @param {number} [height] - The height of the background object. Defaults to 720 if not provided.
   * @param {number} layer - The layer of the background object (used for parallax effects).
   */
  constructor(imagePath, x, y, width, height, layer) {
    super().loadImage(imagePath);
    this.x = x;
    this.layer = layer;
    if (y) {
      this.y = y;
    } else {
      this.y = 720 - this.height;
    }
    if (width && height) {
      this.width = width;
      this.height = height;
    }
  }
}