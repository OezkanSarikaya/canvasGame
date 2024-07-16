/**
 * Represents a bottle object in the game that can be collected.
 * Extends the DrawableObject class.
 */
class Bottles extends DrawableObject {
  /**
   * The offset values for the bottle's collision box.
   * @type {{top: number, left: number, right: number, bottom: number}}
   */
  offset = {
    top: 14,
    left: 14,
    right: 14,
    bottom: 10,
  };

  /**
   * Creates an instance of a Bottles object.
   * Loads a random bottle image and initializes the bottle's position and size.
   */
  constructor() {
    let xPosition;
    if (Math.random() * 10 > 5) {
      super().loadImage("./img/6_salsa_bottle/2_salsa_bottle_on_ground.png");
    } else {
      super().loadImage("./img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    }
    this.width = 80;
    this.height = 80;
    this.y = 640 - this.height;
    xPosition = -600 + Math.random() * 2100;
    this.x = Math.trunc(xPosition / this.width) * 90;
  }
}

