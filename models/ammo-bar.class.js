/**
 * Represents an ammo bar in the game, displaying the current amount of ammunition.
 * Extends the DrawableObject class.
 */
class AmmoBar extends DrawableObject {
  /**
   * Path to the image representing the ammo bar.
   * @type {string}
   */
  IMAGE = "./img/7_statusbars/3_icons/icon_salsa_bottle.png";

  /**
   * Creates an instance of an AmmoBar.
   * Initializes the position and dimensions of the ammo bar.
   */
  constructor() {
    super();
    this.loadImage(this.IMAGE);
    this.x = 20;
    this.y = 20;
    this.width = 50;
    this.height = 50;
  }

  /**
   * Sets the amount of ammo to be displayed by the ammo bar.
   * @param {number} ammo - The amount of ammunition.
   */
  setAmmo(ammo) {
    this.ammo = ammo;
  }
}

