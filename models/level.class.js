class Level {
  enemies;
  clouds;
  // bottles;
  // coins;
  backgroundObjects;
  level_end_x = 2250;

  constructor(enemies, clouds, backgroundObjects, endboss) {
    this.enemies = enemies;
    // this.bottles = bottles;
    // this.coins = coins;
    this.clouds = clouds;
    this.endboss = endboss;
    this.backgroundObjects = backgroundObjects;
    // this.animate();
  }

}
