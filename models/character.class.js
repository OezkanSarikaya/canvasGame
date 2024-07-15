/**
 * Represents the main character in the game, extending from MoveableObject.
 * @extends MoveableObject
 */
class Character extends MoveableObject {
  /**
   * @property {number} height - The height of the character.
   * @property {number} width - The width of the character.
   * @property {number} x - The x-coordinate of the character.
   * @property {number} y - The y-coordinate of the character.
   * @property {number} ammo - The amount of ammo the character has.
   * @property {number} coins - The amount of coins the character has.
   * @property {number} energy - The energy level of the character.
   * @property {number} speed - The speed of the character.
   * @property {Object} offset - The collision offset of the character.
   * @property {number} offset.top - The top offset.
   * @property {number} offset.left - The left offset.
   * @property {number} offset.right - The right offset.
   * @property {number} offset.bottom - The bottom offset.
   * @property {Array<string>} IMAGES_IDLE - Array of image paths for idle animation.
   * @property {Array<string>} IMAGES_SLEEP - Array of image paths for sleep animation.
   * @property {Array<string>} IMAGES_WALKING - Array of image paths for walking animation.
   * @property {Array<string>} IMAGES_JUMPING - Array of image paths for jumping animation.
   * @property {Array<string>} IMAGES_DEAD - Array of image paths for dead animation.
   * @property {Array<string>} IMAGES_HURT - Array of image paths for hurt animation.
   * @property {string} GAME_OVER - Image path for game over screen.
   */
  height = 300;
  width = 150;
  x = -900;
  y = 640 - this.height;
  ammo = 0;
  coins = 0;
  energy = 100;
  speed = 15;

  offset = {
    top: 120,
    left: 30,
    right: 35,
    bottom: 16,
  };

  IMAGES_IDLE = [
    "./img/2_character_pepe/1_idle/idle/I-1.png",
    "./img/2_character_pepe/1_idle/idle/I-2.png",
    "./img/2_character_pepe/1_idle/idle/I-3.png",
    "./img/2_character_pepe/1_idle/idle/I-4.png",
    "./img/2_character_pepe/1_idle/idle/I-5.png",
    "./img/2_character_pepe/1_idle/idle/I-6.png",
    "./img/2_character_pepe/1_idle/idle/I-7.png",
    "./img/2_character_pepe/1_idle/idle/I-8.png",
    "./img/2_character_pepe/1_idle/idle/I-9.png",
    "./img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_SLEEP = [
    "./img/2_character_pepe/1_idle/long_idle/I-11.png",
    "./img/2_character_pepe/1_idle/long_idle/I-12.png",
    "./img/2_character_pepe/1_idle/long_idle/I-13.png",
    "./img/2_character_pepe/1_idle/long_idle/I-14.png",
    "./img/2_character_pepe/1_idle/long_idle/I-15.png",
    "./img/2_character_pepe/1_idle/long_idle/I-16.png",
    "./img/2_character_pepe/1_idle/long_idle/I-17.png",
    "./img/2_character_pepe/1_idle/long_idle/I-18.png",
    "./img/2_character_pepe/1_idle/long_idle/I-19.png",
    "./img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  IMAGES_WALKING = [
    "./img/2_character_pepe/2_walk/W-21.png",
    "./img/2_character_pepe/2_walk/W-22.png",
    "./img/2_character_pepe/2_walk/W-23.png",
    "./img/2_character_pepe/2_walk/W-24.png",
    "./img/2_character_pepe/2_walk/W-25.png",
    "./img/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "./img/2_character_pepe/3_jump/J-31.png",
    "./img/2_character_pepe/3_jump/J-32.png",
    "./img/2_character_pepe/3_jump/J-33.png",
    "./img/2_character_pepe/3_jump/J-34.png",
    "./img/2_character_pepe/3_jump/J-35.png",
    "./img/2_character_pepe/3_jump/J-36.png",
    "./img/2_character_pepe/3_jump/J-37.png",
    "./img/2_character_pepe/3_jump/J-38.png",
    "./img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_DEAD = [
    "./img/2_character_pepe/5_dead/D-51.png",
    "./img/2_character_pepe/5_dead/D-52.png",
    "./img/2_character_pepe/5_dead/D-53.png",
    "./img/2_character_pepe/5_dead/D-54.png",
    "./img/2_character_pepe/5_dead/D-55.png",
    "./img/2_character_pepe/5_dead/D-56.png",
    // "./img/2_character_pepe/5_dead/D-57.png",
  ];

  IMAGES_HURT = [
    "./img/2_character_pepe/4_hurt/H-41.png",
    "./img/2_character_pepe/4_hurt/H-42.png",
    "./img/2_character_pepe/4_hurt/H-43.png",
  ];

  GAME_OVER = "./img/9_intro_outro_screens/game_over/game over.png";

  /**
   * Creates an instance of Character and initializes its properties.
   */
  constructor() {
    super().loadImage("./img/2_character_pepe/2_walk/W-21.png"); 
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SLEEP);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.applyGravity();
    this.animate();
  }

  /**
   * Handles the game over state.
   */
  gameOver() {
    clearAllIntervals();
    setTimeout(() => {
      this.height = 720;
      this.width = 1080;
      this.x -= 100;
      this.y = 0;
      this.otherDirection = false;
      musicMuted || soundsMuted ? start_game_over.pause() : start_game_over.play();
      this.loadImage(this.GAME_OVER);
      gameLevel = 1;
    }, 1000);
  }

  /**
   * Handles the sleep idle animation.
   * @param {number} sleepTimer - The timer for sleep animation.
   * @returns {number} Updated sleep timer.
   */
  sleepIdle(sleepTimer) {
    let timepassed = 0;
    this.playAnimation(this.IMAGES_IDLE);
    if (sleepTimer === null) {
      sleepTimer = new Date().getTime();
    }
    timepassed = new Date().getTime() - sleepTimer;
    if (timepassed >= 8000) {
      soundsMuted ? (snoring.muted = true) : snoring.play();
      this.playAnimation(this.IMAGES_SLEEP);
    }
    return sleepTimer;
  }

  /**
   * Animates the character based on its state.
   */
  animateCharacter() {
    let sleepTimer = null;
    setInterval(() => {
      if (this.isDead()) {
        soundsMuted ? (die.muted = true) : die.play();
        this.playAnimationOnce(this.IMAGES_DEAD);
        this.gameOver();
      } else if (this.isHurt()) {
        soundsMuted ? (hurt.muted = true) : hurt.play();
        sleepTimer = null;
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isAboveGround()) {
        sleepTimer = null;
        this.playAnimation(this.IMAGES_JUMPING);
      } else if (world.keyboard.RIGHT || world.keyboard.LEFT) {
        sleepTimer = null;
        this.playAnimation(this.IMAGES_WALKING);
      } else if (world.keyboard.D) {
        sleepTimer = null;
      } else {
        sleepTimer = this.sleepIdle(sleepTimer);
      }
    }, 100);
  }

  /**
   * Moves the background layers to create a parallax effect.
   * @param {string} direction - The direction to move the layers.
   */
  parallaxLayers(direction) {
    let speedLayer3 = 10,
      speedLayer2 = 5,
      speedLayerSun = 15;
    this.world.level.backgroundObjects.forEach((obj) => {
      switch (obj.layer) {
        case 0:
          direction == "right" ? (obj.x += speedLayerSun) : (obj.x -= speedLayerSun);
          break;
        case 2:
          direction == "right" ? (obj.x += speedLayer2) : (obj.x -= speedLayer2);
          break;
        case 3:
          direction == "right" ? (obj.x += speedLayer3) : (obj.x -= speedLayer3);
          break;
      }
    });
  }

  /**
   * Moves the character to the right.
   */
  moveCharacterRight() {
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      this.moveRight();
      this.parallaxLayers("right");
      this.otherDirection = false;
      if (!this.isAboveGround()) {
        walking_sound.muted = soundsMuted ? true : false;
        walking_sound.play();
      }
    }
  }

  /**
   * Moves the character to the left.
   */
  moveCharacterLeft() {
    if (this.world.keyboard.LEFT && this.x > -610) {
      this.moveLeft();
      this.parallaxLayers("left");
      this.otherDirection = true;
      if (!this.isAboveGround()) {
        walking_sound.play();
      }
    }
  }

  /**
   * Makes the character jump.
   */
  jumpCharacter() {
    if (this.world.keyboard.SPACE && !this.isAboveGround()) {
      this.jump();
      soundsMuted ? jump_sound.pause() : jump_sound.play();
    }
  }

  /**
   * Moves the character based on keyboard input.
   */
  moveCharacter() {
    setInterval(() => {
      this.moveCharacterRight();
      this.moveCharacterLeft();
      this.jumpCharacter();
      world.camera_x = -this.x + 100;
    }, 1000 / 60);
  }

  /**
   * Starts the animation and movement of the character.
   */
  animate() {
    // Speed for walking Animation
    this.animateCharacter();
    // Speed for move character
    this.moveCharacter();
  }
}