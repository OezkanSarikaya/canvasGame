class MoveableObject extends DrawableObject {
  //   x = 120;
  //   y = 250;
  //   height = 200;
  //   width = 100;

  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  offsetY = 10;
  energy = 100;
  ammo = 100;
  lastHit = 0;
  // world;
  // character;
  // ammoBar = new AmmoBar();
  // world;
  // keyboard;

  // constructor() {}

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
      return this.y < 220;
    }
  }


  // drawFrame(ctx) {
  //   if (this instanceof Character || this instanceof Chicken) {
  //     ctx.beginPath();
  //     ctx.lineWidth = "1";
  //     ctx.strokeStyle = "blue";
  //     ctx.rect(this.x, this.y, this.width, this.height);
  //     ctx.stroke();
  //   }
  // }

  // character.isColliding(chicken)
  isColliding(obj) {
    return (
      // this.x + this.width > obj.x &&
      // this.y + this.height > obj.y &&
      // this.x < obj.x &&
      // this.y < obj.y + obj.height

      this.x + this.width >= obj.x && this.x <= obj.x + obj.width
      && this.y + this.offsetY + this.height >= obj.y &&
      this.y + this.offsetY <= obj.y + obj.height
      // &&  obj.onCollisionCourse
    );
    // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
  }

  hit() {
    this.energy -= 2;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  throw(otherDirection) {
    // console.log(otherDirection);
    this.speedY = 30;
    this.applyGravity();
    this.ammo--;
    setInterval(() => {
      if (otherDirection) {
        this.x -= 10;
      }
      else {
        this.x += 10;
      }
    }, 25);
}

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
    timepassed = timepassed / 1000; // Difference ein s
    return timepassed < 0.5;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    // setInterval(() => {
    this.x += this.speed;
    // this.otherDirection = false;
    // }, 1000 / 60);
  }

  moveLeft() {
    // setInterval(() => {
    this.x -= this.speed;
    // this.otherDirection = true;
    // }, 1000 / 60);
  }

  jump() {
    this.speedY = 30;
  }
}
