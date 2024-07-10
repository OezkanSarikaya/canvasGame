class World {
  character = new Character();
  level = level1;
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

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
    // Each enemy can read x position of character (needed for follow function)
    for (let i = 0; i < this.level.enemies.length; i++) {
      this.level.enemies[i].characterX = this.character.x;
    }
  }

  clearAllIntervals() {
    for (let i = 1; i < 9999; i++) {
      window.clearInterval(i);
    }
  }

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
    }, 1000/20);
  }

  drawBottles(amount) {
    for (let i = 0; i < amount; i++) {
      let bottle = new Bottles();
      this.bottles.push(bottle);
    }
  }

  drawCoins(amount) {
    let xPosition = 50 + Math.random() * 600;
    xPosition = Math.trunc(xPosition / 80) * 40;
    let y = 390;
    let speedY = 50;
    let acceleration = 10;
    let x = xPosition;
    for (let i = 0; i < amount; i++) {
      x += 40;
      y -= speedY;
      speedY -= acceleration;
      let coin = new Coins(y, x);
      this.coins.push(coin);
    }
  }

  checkThrowObjects() {
    if (this.keyboard.D && this.character.ammo > 0) {
      let bottle = new ThrowableObject(this.character.x + 30, this.character.y + 120, this.character.otherDirection);
      this.throwableObjects.push(bottle);
      this.ammoBar.setAmmo(this.character.ammo--);
    }
  }

  checkHit() {
    this.level.enemies.forEach((enemy) => {
      this.throwableObjects.forEach((bottle) => {
        if (bottle.isColliding(enemy)) {
          enemy.hit();
          enemy.isEnemyDead = true;
          bottle.isSplashed = true;
        }
      });
    });
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.isAboveGround() && this.character.speedY < 0) {
          enemy.hit();
          enemy.isEnemyDead = true;
        } else if (!enemy.isEnemyDead) {
          this.character.hit();    
        }
      }
    });
  }

  checkCollect() {
    for (let i = 0; i < this.bottles.length; i++) {
      const enemy = this.bottles[i];
      if (this.character.isColliding(enemy)) {
        this.bottles.splice(i, 1);
        this.ammoBar.setAmmo(this.character.ammo++);
      }
    }
  }

  collectCoins() {
    for (let i = 0; i < this.coins.length; i++) {
      const enemy = this.coins[i];
      if (this.character.isColliding(enemy)) {
        this.coins.splice(i, 1);
        this.coinBar.setCoins(this.character.coins++);
      }
    }
  }

  draw() {
    this.ctx.reset();
    this.ctx.translate(this.camera_x, 0);

    // sunrise animation
    let saturate = -this.level.backgroundObjects[1].y + 400;
    if (this.level.backgroundObjects[1].y > 50) {
      this.level.backgroundObjects[1].x += 0.5;
      this.level.backgroundObjects[1].y -= 0.5;
      if (saturate <= 100) {
        this.canvas.style.filter = "saturate(" + saturate + "%)";
      }
    }

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.coins);
    this.addObjectsToMap(this.bottles);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.camera_x, 0);
    // Begin Space for fixed objects
    this.addToMap(this.statusBar);
    this.addToMap(this.ammoBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.endbossBar);
    this.ctx.font = "40px Boogaloo";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.character.ammo, 60, 60);
    this.ctx.fillText(this.character.energy, 155, 60);    
    this.ctx.fillText(this.character.coins, 255, 60);
    // this.ctx.fillText(this.character.coins, 245, 60);
    if (this.level.enemies[8]) {

      this.ctx.fillText(this.level.enemies[8].energy, 1000, 60); // Endboss
    }
 
    // End Space for fixed objects
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);

    requestAnimationFrame(() => {
      this.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    // mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
