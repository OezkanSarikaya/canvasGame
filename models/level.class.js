class Level {
  enemies;
  clouds;
  bottles;
  coins;
  backgroundObjects;
  level_end_x = 810;

  constructor(enemies, clouds, backgroundObjects, bottles, coins) {
    this.enemies = enemies;
    this.bottles = bottles;
    this.coins = coins;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
  }
}
