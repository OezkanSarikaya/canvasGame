/**
 * Represents a game level, including its enemies, clouds, background objects, and other objects.
 */
class Level {
  /**
   * Array of enemies in the level.
   * @type {Array<MoveableObject>}
   */
  enemies;

  /**
   * Array of clouds in the level.
   * @type {Array<Cloud>}
   */
  clouds;

  /**
   * Array of background objects in the level.
   * @type {Array<BackgroundObject>}
   */
  backgroundObjects;

  /**
   * Array of other objects in the level.
   * @type {Array<DrawableObject>}
   */
  objects;

  /**
   * The x-coordinate at which the level ends.
   * @type {number}
   * @default 2250
   */
  level_end_x = 2250;

  /**
   * Creates an instance of a Level.
   * @param {Array<DrawableObject>} objects - The objects in the level.
   * @param {Array<MoveableObject>} enemies - The enemies in the level.
   * @param {Array<Cloud>} clouds - The clouds in the level.
   * @param {Array<BackgroundObject>} backgroundObjects - The background objects in the level.
   */
  constructor(objects, enemies, clouds, backgroundObjects) {
    this.objects = objects;
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
  }
}