class Character extends MoveableObject {
  height = 300;
  width = 150;
  x = -900;
  y = 640 - this.height;
  ammo = 0;
  coins = 35;
  energy = 100;
  // world;
  speed = 15;
  // walking_sound = new Audio("./audio/walking.mp3");
  // jump_sound = new Audio("./audio/jump.mp3");
  // hurt = new Audio("./audio/hurt.mp3");

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

  constructor() {
    super().loadImage("./img/2_character_pepe/2_walk/W-21.png");
    // this.loadImage(this.GAME_OVER);
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
        if (soundsMuted) {
          // this.chick_sound2.pause();
          die.muted = true;
        } else {
          die.muted = false;
          die.play();
        }
        this.playAnimationOnce(this.IMAGES_DEAD);
        clearAllIntervals();
        setTimeout(() => {
          this.height = 720;
          this.width = 1080;
          this.x -= 100;
          this.y = 0;
          this.otherDirection = false;

          if (soundsMuted) {
            // this.chick_sound2.pause();
            start_game_over.muted = true;
          } else {
            start_game_over.muted = false;
            start_game_over.play();
          }

          this.loadImage(this.GAME_OVER);
        }, 1000);
      } else if (this.isHurt()) {
        if (soundsMuted) {
          // this.chick_sound2.pause();
          hurt.muted = true;
        } else {
          hurt.muted = false;
          hurt.play();
        }
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
          if (soundsMuted) {
            // this.chick_sound2.pause();
            snoring.muted = true;
          } else {
            snoring.muted = false;
            snoring.play();
          }
          this.playAnimation(this.IMAGES_SLEEP);
        }
      }
    }, 100);

    let speedLayer3 = 10;
    let speedLayer2 = 5;
    let speedLayerSun = 15;

    // Speed for move character
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        // this.world.level.backgroundObjects[1].x += this.speed-3;
        this.moveRight();
        // world.camera_x += 30;
        this.world.level.backgroundObjects[1].x += speedLayerSun;

        this.world.level.backgroundObjects[0].x += speedLayerSun;
        this.world.level.backgroundObjects[2].x += speedLayer3;
        this.world.level.backgroundObjects[5].x += speedLayerSun;
        this.world.level.backgroundObjects[6].x += speedLayer3;
        this.world.level.backgroundObjects[9].x += speedLayerSun;
        this.world.level.backgroundObjects[10].x += speedLayer3;
        this.world.level.backgroundObjects[13].x += speedLayerSun;
        this.world.level.backgroundObjects[14].x += speedLayer3;

        this.world.level.backgroundObjects[3].x += speedLayer2;
        this.world.level.backgroundObjects[7].x += speedLayer2;
        this.world.level.backgroundObjects[11].x += speedLayer2;
        this.world.level.backgroundObjects[15].x += speedLayer2;

        this.otherDirection = false;
        if (!this.isAboveGround()) {
          // playSound('walking_sound');

          if (soundsMuted) {
            // this.chick_sound2.pause();
            walking_sound.muted = true;
          } else {
            walking_sound.muted = false;
            walking_sound.play();
          }
        }
      }

      if (this.world.keyboard.LEFT && this.x > -610) {
        // this.world.level.backgroundObjects[1].x -= this.speed-3;
        this.moveLeft();

        this.world.level.backgroundObjects[1].x -= speedLayerSun;

        this.world.level.backgroundObjects[0].x -= speedLayerSun;
        this.world.level.backgroundObjects[2].x -= speedLayer3;
        this.world.level.backgroundObjects[5].x -= speedLayerSun;
        this.world.level.backgroundObjects[6].x -= speedLayer3;
        this.world.level.backgroundObjects[9].x -= speedLayerSun;
        this.world.level.backgroundObjects[10].x -= speedLayer3;
        this.world.level.backgroundObjects[13].x -= speedLayerSun;
        this.world.level.backgroundObjects[14].x -= speedLayer3;

        this.world.level.backgroundObjects[3].x -= speedLayer2;
        this.world.level.backgroundObjects[7].x -= speedLayer2;
        this.world.level.backgroundObjects[11].x -= speedLayer2;
        this.world.level.backgroundObjects[15].x -= speedLayer2;

        this.otherDirection = true;
        if (!this.isAboveGround()) {
          walking_sound.play();
        }
      }
      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
        if (soundsMuted) {
          jump_sound.muted = true;
        } else {
          jump_sound.muted = false;
          jump_sound.play();
        }
      }
      world.camera_x = -this.x + 100;
    }, 1000 / 60);
  }
}
