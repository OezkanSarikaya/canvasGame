/**
 * Represents a status bar displayed in the game.
 * Extends {@link DrawableObject}.
 */
class StatusBar extends DrawableObject {
  /**
   * Path to the image used for the status bar icon.
   * @type {string}
   */
  IMAGE = "./img/7_statusbars/3_icons/icon_health.png";

  /**
   * Creates an instance of StatusBar.
   * Loads the status bar image and sets its initial position and dimensions.
   */
  constructor() {
    super();
    this.loadImage(this.IMAGE);
    this.x = 105;
    this.y = 20;
    this.width = 50;
    this.height = 50;
    /**
     * The current percentage value of the status bar.
     * @type {number}
     */
    this.percentage;
  }
}