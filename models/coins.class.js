/**
 * Represents a coin object in the game.
 * Extends the MoveableObject class.
 */
class Coins extends MoveableObject {
  /**
   * The offset for the coin's hitbox.
   * @type {Object}
   * @property {number} top - The top offset value.
   * @property {number} left - The left offset value.
   * @property {number} right - The right offset value.
   * @property {number} bottom - The bottom offset value.
   */
  offset = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  };

  /**
   * The width of the coin.
   * @type {number}
   */
  width = 80;

  /**
   * The height of the coin.
   * @type {number}
   */
  height = 80;

  /**
   * The image sources for the coin animation.
   * @type {string[]}
   */
  IMAGES_COINS = ["./img/8_coin/coin_1.png", "./img/8_coin/coin_2.png"];

  /**
   * Creates an instance of a Coins object.
   * Loads the initial image and sets up the position of the coin.
   * @param {number} y - The y-coordinate of the coin.
   * @param {number} x - The x-coordinate of the coin.
   */
  constructor(y, x) {
    super().loadImage("./img/8_coin/coin_2.png");
    this.loadImages(this.IMAGES_COINS);
    this.y = y;
    this.x = x;
    this.animate();
  }

  /**
   * Animates the coin by cycling through the coin images.
   * Sets an interval to play the animation.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_COINS);
    }, 400);
  }
}
