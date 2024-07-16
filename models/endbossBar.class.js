/**
 * Represents the health bar of the Endboss in the game.
 * Extends the DrawableObject class.
 */
class EndbossBar extends DrawableObject {
  /**
   * The image source for the Endboss health icon.
   * @type {string}
   */
  IMAGE = "./img/7_statusbars/3_icons/icon_health_endboss.png";

  /**
   * The percentage of health remaining for the Endboss.
   * @type {number}
   */
  percentage;

  /**
   * Creates an instance of an EndbossBar object.
   * Loads the image and sets up the initial position and dimensions of the health bar.
   */
  constructor() {
    super();
    this.loadImage(this.IMAGE);
    this.x = 940;
    this.y = 20;
    this.width = 50;
    this.height = 50;
  }
}