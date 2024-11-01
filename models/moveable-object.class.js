/**
 * Represents a moveable object in the game, extending from DrawableObject.
 * @extends DrawableObject
 */
class MoveableObject extends DrawableObject {
  /**
   * @property {number} speed - The speed of the object.
   * @property {boolean} otherDirection - Indicates if the object is facing the other direction.
   * @property {number} speedY - The vertical speed of the object.
   * @property {number} acceleration - The acceleration of the object.
   * @property {number} lastHit - The timestamp of the last hit.
   * @property {number} energy - The energy level of the object.
   * @property {Object} offset - The collision offset of the object.
   * @property {number} offset.top - The top offset.
   * @property {number} offset.left - The left offset.
   * @property {number} offset.right - The right offset.
   * @property {number} offset.bottom - The bottom offset.
   */

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

  /**
   * Applies gravity to the object.
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * Checks if the object is above the ground.
   * @returns {boolean} True if the object is above the ground, otherwise false.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 350;
    }
  }

  /**
   * Checks if the object is colliding with another object.
   * @param {Object} obj - The object to check collision with.
   * @returns {boolean} True if the objects are colliding, otherwise false.
   */
  isColliding(obj) {
    return (
      this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
      this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
      this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
      this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom
    );
  }

  /**
   * Reduces the object's energy when it gets hit.
   */
  hit() {
    this.energy -= 1;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Throws the object in the specified direction.
   * @param {boolean} otherDirection - Indicates the direction to throw the object.
   */
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

  /**
   * Checks if the object is dead.
   * @returns {boolean} True if the object's energy is zero, otherwise false.
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * Checks if the object is hurt.
   * @returns {boolean} True if the object is hurt within the last 0.5 seconds, otherwise false.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
    timepassed = timepassed / 1000; // Difference in s
    return timepassed < 0.5;
  }

  /**
   * Plays the specified animation.
   * @param {Array<string>} images - The array of image paths for the animation.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Plays the specified animation once.
   * @param {Array<string>} images - The array of image paths for the animation.
   */
  playAnimationOnce(images) {
    for (let i = 0; i < images.length; i++) {
      const path = images[i];
      this.img = this.imageCache[path];
    }
  }

  /**
   * Animates the chick walking.
   * @param {HTMLAudioElement} sound - The sound to play during the animation.
   */
  chickWalk(sound) {
    this.playAnimation(this.IMAGES_WALKING);
    if (soundsMuted) {
      sound.muted = true;
    } else {
      sound.muted = false;
      sound.play();
    }
  }

  /**
   * Animates the chick's death.
   * @param {number} timepassed - The time passed since the last hit.
   * @param {number} lastHit - The timestamp of the last hit.
   */
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

  /**
   * Moves the object to the right.
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Moves the object to the left.
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Follows the character at a specified speed.
   * @param {number} speed - The speed to follow the character.
   * @param {number} characterX - The x position of the character.
   */
  followCharacter(speed, characterX) {
    if (this.x < characterX) {
      this.x += speed;
      this.otherDirection = true;
    } else {
      this.x -= speed;
      this.otherDirection = false;
    }
  }

  /**
   * Makes the object jump.
   */
  jump() {
    this.speedY = 30;
  }
}
