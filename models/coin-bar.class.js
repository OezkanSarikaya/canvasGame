/**
 * Represents a coin bar in the game.
 * Extends the DrawableObject class.
 */
class CoinBar extends DrawableObject {
  /**
   * The image source for the coin bar icon.
   * @type {string}
   */
  IMAGE = "./img/7_statusbars/3_icons/icon_coin.png";

  /**
   * Creates an instance of a CoinBar object.
   * Loads the initial image and sets up the position and size of the coin bar.
   */
  constructor() {
    super();
    this.loadImage(this.IMAGE);
    this.x = 210;
    this.y = 20;
    this.width = 50;
    this.height = 50;
  }

  /**
   * Sets the number of coins to be displayed in the coin bar.
   * @param {number} coins - The number of coins.
   */
  setCoins(coins) {
    this.coins = coins;
  }
}