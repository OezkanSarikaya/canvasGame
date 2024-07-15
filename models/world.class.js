
/**
 * Represents the game world.
 */
class World {
  /**
   * @property {Character} character - The main character in the game.
   * @property {Level} level - The level configuration.
   * @property {HTMLCanvasElement} canvas - The canvas element where the game is drawn.
   * @property {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
   * @property {Keyboard} keyboard - The keyboard input handler.
   * @property {number} camera_x - The x position of the camera.
   * @property {StatusBar} statusBar - The status bar of the game.
   * @property {AmmoBar} ammoBar - The ammo bar of the game.
   * @property {CoinBar} coinBar - The coin bar of the game.
   * @property {EndbossBar} endbossBar - The endboss health bar.
   * @property {Array<ThrowableObject>} throwableObjects - The array of throwable objects.
   * @property {Array<Bottles>} bottles - The array of bottles.
   * @property {Array<Coins>} coins - The array of coins.
   */

  character = new Character();
  level = level;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  ammoBar = new AmmoBar();
  coinBar = new CoinBar();
  endbossBar = new EndbossBar();
  throwableObjects = [];
  bottles = [];
  coins = [];

  /**
   * Creates an instance of World.
   * @param {HTMLCanvasElement} canvas - The canvas element where the game is drawn.
   * @param {Keyboard} keyboard - The keyboard input handler.
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  /**
   * Sets the world properties for the character and enemies.
   */
  setWorld() {
    this.character.world = this;
    for (let i = 0; i < this.level.enemies.length; i++) {
      this.level.enemies[i].characterX = this.character.x;
    }
    for (let i = 0; i < this.level.enemies.length; i++) {
      this.level.enemies[i].world = this;
    }
  }

  /**
   * Clears all intervals in the game.
   */
  clearAllIntervals() {
    for (let i = 1; i < 9999; i++) {
      window.clearInterval(i);
    }
  }

  /**
   * Starts the main game loop.
   */
  run() {
    this.drawBottles(20);
    this.drawCoins(10);
    setInterval(() => {
      for (let i = 0; i < this.level.enemies.length; i++) {
        this.level.enemies[i].characterX = this.character.x;
      }
      this.checkThrowObjects();
      this.checkCollisions();
      this.checkHit();
      this.checkCollect();
      this.collectCoins();
    }, 1000 / 20);
  }

  /**
   * Draws the specified number of bottles in the game.
   * @param {number} amount - The number of bottles to draw.
   */
  drawBottles(amount) {
    for (let i = 0; i < amount; i++) {
      let bottle = new Bottles();
      this.bottles.push(bottle);
    }
  }

  /**
   * Draws the specified number of coins in the game.
   * @param {number} amount - The number of coins to draw.
   */
  drawCoins(amount) {
    let xPosition = 50 + Math.random() * 600;
    xPosition = Math.trunc(xPosition / 80) * 40;
    let y = 390;
    let speedY = 50;
    let acceleration = 10;
    let x = xPosition;
    this.setCoinsArc(amount, x, y, speedY, acceleration);
  }

  /**
   * Sets the arc of coins in the game.
   * @param {number} amount - The number of coins.
   * @param {number} x - The starting x position.
   * @param {number} y - The starting y position.
   * @param {number} speedY - The initial speed in the y direction.
   * @param {number} acceleration - The acceleration in the y direction.
   */
  setCoinsArc(amount, x, y, speedY, acceleration) {
    for (let i = 0; i < amount; i++) {
      x += 40;
      y -= speedY;
      speedY -= acceleration;
      let coin = new Coins(y, x);
      this.coins.push(coin);
    }
  }

  /**
   * Checks if throw objects are triggered by the keyboard input.
   */
  checkThrowObjects() {
    if (this.keyboard.D && this.character.ammo > 0) {
      let bottle = new ThrowableObject(this.character.x + 30, this.character.y + 120, this.character.otherDirection);
      soundsMuted ? (throw_sound.muted = true) : throw_sound.play();
      this.throwableObjects.push(bottle);
      this.ammoBar.setAmmo(this.character.ammo--);
    }
  }

  /**
   * Checks if any enemies are hit by throwable objects.
   */
  checkHit() {
    this.level.enemies.forEach((enemy) => {
      this.throwableObjects.forEach((bottle) => {
        if (bottle.isColliding(enemy)) {
          soundsMuted ? (glass.muted = true) : glass.play();
          enemy.hit();
          bottle.isSplashed = true;
        }
      });
    });
  }

  /**
   * Checks for collisions between the character and enemies.
   */
  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.isAboveGround() && this.character.speedY < 0) {
          enemy.hit();
          chicken_die.muted = soundsMuted ? true : false;
          chicken_die.play();
        } else if (enemy.energy > 0) {
          this.character.hit();
        }
      }
    });
  }

  /**
   * Checks if the character collects any bottles.
   */
  checkCollect() {
    for (let i = 0; i < this.bottles.length; i++) {
      const enemy = this.bottles[i];
      if (this.character.isColliding(enemy)) {
        soundsMuted ? (pickBottle.pause()) : pickBottle.play();
        this.bottles.splice(i, 1);
        this.ammoBar.setAmmo(this.character.ammo++);
      }
    }
  }

  /**
   * Checks if the character collects any coins.
   */
  collectCoins() {
    for (let i = 0; i < this.coins.length; i++) {
      const enemy = this.coins[i];
      if (this.character.isColliding(enemy)) {
        soundsMuted ? coinSound.pause() : coinSound.play();
        this.coins.splice(i, 1);
        this.coinBar.setCoins(this.character.coins++);
        if (this.character.coins == 10) {
          this.character.coins -= 10;
          this.character.ammo += 10;
          soundsMuted ? (bottlesBonus.muted = true) : (bottlesBonus.muted = false);
          bottlesBonus.play();
        }
      }
    }
  }

  /**
   * Animates the sunrise effect in the game.
   */
  sunrise() {
    if (gameLevel == 1 || gameLevel == 3) {
      let saturate = -this.level.backgroundObjects[1].y + 400;
      if (this.level.backgroundObjects[1].y > 50) {
        this.level.backgroundObjects[1].x += 0.5;
        this.level.backgroundObjects[1].y -= 0.5;
        if (saturate <= 100) {
          this.canvas.style.filter = "saturate(" + saturate + "%)";
        }
      }
    }
  }

  /**
   * Animates the sunset effect in the game.
   */
  sunset() {
    if (gameLevel == 2) {
      let saturate = -this.level.backgroundObjects[1].y + 400;
      if (this.level.backgroundObjects[1].y >= 80 && this.level.backgroundObjects[1].y < 320) {
        this.level.backgroundObjects[1].x += 0.5;
        this.level.backgroundObjects[1].y += 0.5;
        if (saturate <= 100) {
          this.canvas.style.filter = "saturate(" + saturate + "%)";
        }
      }
    }
  }

  /**
   * Draws the fixed objects in the game (status bars, text, etc.).
   */
  drawFixedObjects() {
    this.addToMap(this.statusBar);
    this.addToMap(this.ammoBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.endbossBar);
    this.ctx.font = "40px Boogaloo";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.character.ammo, 60, 60);
    this.ctx.fillText(this.character.energy, 155, 60);
    this.ctx.fillText(this.character.coins, 255, 60);
    if (gameLevel == 4) {
      gameLevel--;
    }
    this.ctx.fillText("Level: " + gameLevel, 800, 60);
    if (this.level.enemies[0]) {
      this.ctx.fillText(this.level.enemies[0].energy, 1000, 60); // Endboss
    }
  }

  /**
   * Draws the dynamic objects to the game map.
   */
  drawObjectsToMap() {
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.objects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.coins);
    this.addObjectsToMap(this.bottles);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
  }

  /**
   * Draws the entire game scene.
   */
  draw() {
    this.ctx.reset();
    this.ctx.translate(this.camera_x, 0);
    this.sunrise(); // sunrise (or moonrise) animation
    this.sunset(); // sunset animation
    this.drawObjectsToMap();
    this.ctx.translate(-this.camera_x, 0);
    this.drawFixedObjects();
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);
    requestAnimationFrame(() => {
      this.draw();
    });
  }

  /**
   * Adds multiple objects to the map.
   * @param {Array<Object>} objects - The objects to be added to the map.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Adds a single object to the map.
   * @param {Object} mo - The movable object to be added.
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    // mo.drawFrame(this.ctx); // Uncomment to show frames around objects
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * Flips the image horizontally.
   * @param {Object} mo - The movable object to be flipped.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * Flips the image back to its original orientation.
   * @param {Object} mo - The movable object to be flipped back.
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
