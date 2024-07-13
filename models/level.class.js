class Level {
  enemies;
  clouds;
  backgroundObjects;
  objects;
  level_end_x = 2250;

  constructor(objects, enemies, clouds, backgroundObjects) {
    this.objects = objects;
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
  }
}
