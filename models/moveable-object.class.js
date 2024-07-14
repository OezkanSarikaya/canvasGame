class MoveableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  lastHit = 0;
  energy = 1;

  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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

  isColliding(obj) {
    return (
      this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
      this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
      this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
      this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom
    );
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
      if (!this.isSplashed) {
        otherDirection ? (this.x -= 10) : (this.x += 10);
      } else {
        this.x = this.x;
        this.y = this.y;
        this.speedY = 0;
        this.acceleration = 0;
        clearInterval(fly);
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

  playAnimationOnce(images) {
    for (let i = 0; i < images.length; i++) {
      const path = images[i];
      this.img = this.imageCache[path];
    }
  }

  chickWalk(sound) {
    this.playAnimation(this.IMAGES_WALKING);
    if (soundsMuted) {
      sound.muted = true;
    } else {
      sound.muted = false;
      sound.play();
    }
  }

  chickDeath(timepassed, lastHit) {
    timepassed = new Date().getTime() - lastHit;
    if (timepassed < 4000) {
      this.playAnimation(this.IMAGES_DEAD);
    } else {
      let index = this.world.level.enemies.indexOf(this);
      if (index > -1) {
        this.world.level.enemies.splice(index, 1);
      }
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
