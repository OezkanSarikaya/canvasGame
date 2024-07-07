class MoveableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  lastHit = 0;

  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        // if (this.isAboveGround() ) {
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
    const fly = setInterval(() => {
      if (otherDirection && !this.isSplashed) {
        this.x -= 10;
      }

      if (!otherDirection && !this.isSplashed) {
        this.x += 10;
      }

      if (this.isSplashed) {
        this.x = this.x;
        this.y = this.y;
        this.speedY = 0;
        this.acceleration = 0;
        clearInterval(fly);
      }
      // console.log(this.isSplashed);
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

  playAnimationOnce(images) {
    for (let i = 0; i < images.length; i++) {
      const path = images[i];
      this.img = this.imageCache[path];
    }
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  followCharacter(speed, characterX) {
    if (this.x < characterX) {
      this.x += speed;
      this.otherDirection = true;
    } else {
      this.x -= speed;
      this.otherDirection = false;
    }
  }

  jump() {
    this.speedY = 30;
  }
}
