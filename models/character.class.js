class Character extends MoveableObject {
  height = 300;
  width = 150;
  x = -900;
  y = 640 - this.height;
  ammo = 0;
  coins = 0;
  world;
  speed = 15;
  walking_sound = new Audio("./audio/walking.mp3");

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
    "./img/2_character_pepe/5_dead/D-57.png",
  ];

  IMAGES_HURT = [
    "./img/2_character_pepe/4_hurt/H-41.png",
    "./img/2_character_pepe/4_hurt/H-42.png",
    "./img/2_character_pepe/4_hurt/H-43.png",
  ];

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

  animate() {
    // Speed for walking Animation
    let sleepTimer = null;
    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
      } else if (this.isHurt()) {
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
        this.playAnimation(this.IMAGES_IDLE);
        if (sleepTimer == null) {
          sleepTimer = new Date().getTime();
        }
        let timepassed = new Date().getTime() - sleepTimer;
        if (timepassed >= 15000) {
          this.playAnimation(this.IMAGES_SLEEP);
        }
      }
    }, 100);

    // Speed for move character
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        // this.x += this.speed;
        this.otherDirection = false;
        // console.log(world.camera_x, this.x);
        if (!this.isAboveGround()) {
          this.walking_sound.play();
        }
      }

      if (this.world.keyboard.LEFT && this.x > -610) {
        this.moveLeft();
        // this.x -= this.speed;
        this.otherDirection = true;
        // console.log(world.camera_x, this.x);
        if (!this.isAboveGround()) {
          this.walking_sound.play();
        }
        
      }
      // console.log(this.speedY);
      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        // this.walking_sound.pause();
        this.jump();
      }

      world.camera_x = -this.x + 100;
      // this.camera_x = -this.x;
    }, 1000 / 60);
  }
}
