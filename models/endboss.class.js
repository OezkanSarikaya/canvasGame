class Endboss extends MoveableObject {
  height = 405;
  width = 348;
  y = 280;
  x = 2700;
  energy = 200;

  IMAGES_WALKING = [
    "./img/4_enemie_boss_chicken/1_walk/G1.png",
    "./img/4_enemie_boss_chicken/1_walk/G2.png",
    "./img/4_enemie_boss_chicken/1_walk/G3.png",
    "./img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_ALERT = [
    "./img/4_enemie_boss_chicken/2_alert/G5.png",
    "./img/4_enemie_boss_chicken/2_alert/G6.png",
    "./img/4_enemie_boss_chicken/2_alert/G7.png",
    "./img/4_enemie_boss_chicken/2_alert/G8.png",
    "./img/4_enemie_boss_chicken/2_alert/G9.png",
    "./img/4_enemie_boss_chicken/2_alert/G10.png",
    "./img/4_enemie_boss_chicken/2_alert/G11.png",
    "./img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_ATTACK = [
    "./img/4_enemie_boss_chicken/3_attack/G13.png",
    "./img/4_enemie_boss_chicken/3_attack/G14.png",
    "./img/4_enemie_boss_chicken/3_attack/G15.png",
    "./img/4_enemie_boss_chicken/3_attack/G16.png",
    "./img/4_enemie_boss_chicken/3_attack/G17.png",
    "./img/4_enemie_boss_chicken/3_attack/G18.png",
    "./img/4_enemie_boss_chicken/3_attack/G19.png",
    "./img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_HURT = [
    "./img/4_enemie_boss_chicken/4_hurt/G21.png",
    "./img/4_enemie_boss_chicken/4_hurt/G22.png",
    "./img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "./img/4_enemie_boss_chicken/5_dead/G24.png",
    "./img/4_enemie_boss_chicken/5_dead/G25.png",
    "./img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  YOU_WIN = "./img/9_intro_outro_screens/win/win_2.png";
  level1 = "./img/9_intro_outro_screens/win/level_1.png";
  level2 = "./img/9_intro_outro_screens/win/level_2.png";
  level3 = "./img/9_intro_outro_screens/win/level_3.png";

  offset = {
    top: 65,
    left: 50,
    right: 40,
    bottom: 40,
  };

  constructor(speed, energy) {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
    this.energy = energy;
    this.speed = speed;
  }

  animate() {
    // Speed for walking Animation
    let follow = false;
    let awake = false;
    let distance;
    let endBoss = setInterval(() => {
      distance = parseInt(this.characterX) - parseInt(this.x);
      distance = Math.abs(distance);
      if (!awake && parseInt(this.characterX) > 1900) {
        awake = true;
      }

      if (this.isDead()) {
        follow = false;
        if (soundsMuted) {
          endboss_die.muted = true;
        } else {
          endboss_die.muted = false;
          endboss_die.play();
        }
        this.playAnimationOnce(this.IMAGES_DEAD);
        setTimeout(() => {
          this.height = 650;
          this.width = 650;
          this.x = this.characterX -= 100 - 220;
          this.y = 20;
          this.otherDirection = false;

          distance = parseInt(this.characterX) - parseInt(this.x);
          distance = Math.abs(distance);

          if (soundsMuted) {
            mariachi.muted = true;
          } else {
            start_game_over.muted = true;
            mariachi.play();
            mariachi.muted = false;
            if (!musicMuted) {
              mariachi.muted = false;
            }
          }

          clearAllIntervals();
          if (gameLevel <= 4) {
            gameLevel++;
          }

          switch (gameLevel) {
            case 1:
              this.loadImage(this.level1);
              break;
            case 2:
              this.loadImage(this.level2);
              break;
            case 3:
              this.loadImage(this.level3);
              break;
            case 4:
              this.loadImage(this.YOU_WIN);
              break;
          }
        }, 1000);
      } else if (this.isHurt()) {
        follow = false;
        if (soundsMuted) {
          endboss_hurt.muted = true;
        } else {
          endboss_hurt.muted = false;
          endboss_hurt.play();
        }
        this.playAnimation(this.IMAGES_HURT);
      } else if (awake && distance <= 900 && distance > 500) {
        follow = true;
        this.playAnimation(this.IMAGES_WALKING);
      } else if (awake && distance <= 500 && distance > 200) {
        follow = true;
        this.playAnimation(this.IMAGES_ALERT);
      } else if (awake && distance <= 200) {
        follow = true;
        this.playAnimation(this.IMAGES_ATTACK);
      }
    }, 200);

    setInterval(() => {
      if (follow) {
        this.followCharacter(this.speed, this.characterX);
      }
    }, 1000 / 60);
  }
}
