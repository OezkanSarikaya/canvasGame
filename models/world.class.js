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
  }

  run() {
    this.drawBottles(40);
    this.drawCoins(10);
    // this.drawCoins(10);
    setInterval(() => {
      this.checkCollisions();
      this.checkCollect();
      this.collectCoins();
      this.checkThrowObjects();
    }, 200);
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
    let y = 280;
    let speedY = 50;
    let acceleration = 10;

    let x = xPosition;
    for (let i = 0; i < amount; i++) {
      x += 40;
      // if (speedY >=0) {
        // console.log(y, speedY);
        y -= speedY;
        speedY -= acceleration;
      // }
      //  else {
      //   y += speedY;
      //   speedY += acceleration;
      // }

      let coin = new Coins(y, x);
      this.coins.push(coin);
    }
  }

  checkThrowObjects() {
    if (this.keyboard.D && this.character.ammo > 0) {
      let bottle = new ThrowableObject(this.character.x + 20, this.character.y + 40, this.character.otherDirection);
      this.throwableObjects.push(bottle);
      this.ammoBar.setAmmo(this.character.ammo--);
      this.keyboard.D = false;
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
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
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.translate(this.camera_x, 0);
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
    // End Space for fixed objects
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
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
    // this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    // this.ctx.beginPath();
    // this.ctx.lineWidth = "1";
    // this.ctx.strokeStyle = "blue";
    // this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
    // this.ctx.stroke();

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
