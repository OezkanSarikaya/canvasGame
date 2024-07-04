class MoveableObject extends DrawableObject {
  //   x = 120;
  //   y = 250;
  //   height = 200;
  //   width = 100;

  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  // offsetY = 10;
  energy = 100;
  ammo = 100;
  lastHit = 0;
  // isEnemyDead = false;
  // isDead = false;
  // isDead = false;
  // world;
  // character;
  // ammoBar = new AmmoBar();
  // world;
  // keyboard;

  // constructor() {}

  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 350;
    }
  }

  // character.isColliding(chicken)
  isColliding(obj) {
    return (
      this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
      this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
      this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&      
      this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom
      // &&  obj.onCollisionCourse
    );
    // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt.
    // Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
  }

  hit() {
    this.energy -= 1;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  throw(otherDirection) {
    this.speedY = 30;
    this.applyGravity();
    this.ammo--;
    setInterval(() => {
      if (otherDirection) {
        this.x -= 10;
      } else {
        this.x += 10;
      }
    }, 25);
  }

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
    timepassed = timepassed / 1000; // Difference in s
    return timepassed < 0.5;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 30;
  }
}
