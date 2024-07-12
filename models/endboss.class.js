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

  // YOU_WIN = "./img/9_intro_outro_screens/win/win_2.png";
  YOU_WIN = "./img/9_intro_outro_screens/win/level_2.png";

  offset = {
    top: 65,
    left: 50,
    right: 40,
    bottom: 40,
  };

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
  }

  animate() {
    // Speed for walking Animation
    let follow = false;
    let distance;
    let endBoss = setInterval(() => {
      follow = false;
      distance = parseInt(this.characterX) - parseInt(this.x);
      distance = Math.abs(distance);
      if (this.isDead()) {
        if (soundsMuted) {
          // this.chick_sound2.pause();
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

          if (soundsMuted) {
            // this.chick_sound2.pause();
            mariachi.muted = true;
          } else {
            start_game_over.muted = true;
            mariachi.muted = false;
            mariachi.play();
          }
         
          clearAllIntervals();
          this.loadImage(this.YOU_WIN);
          // clearAllIntervals();
          gameLevel = 2;
          document.getElementById('startLevel').innerHTML = "Start Level "+gameLevel;
          // setTimeout(() => {
                
          // startGame;
          // }, 3000);
          // gameLevel = "level2";
          // startGame();
        }, 1000);

        // clearInterval(endBoss);
      } else if (this.isHurt()) {
        if (soundsMuted) {
          // this.chick_sound2.pause();
          endboss_hurt.muted = true;
        } else {
          endboss_hurt.muted = false;
          endboss_hurt.play();
        }
        this.playAnimation(this.IMAGES_HURT);
      } else if (distance < 600 && distance > 400) {
        this.playAnimation(this.IMAGES_ALERT);
      } else if (distance < 400) {
        this.playAnimation(this.IMAGES_ATTACK);
      } else {
        follow = true;
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 200);

    setInterval(() => {
      if (follow) {
        this.followCharacter(3, this.characterX);
      }
    }, 1000 / 60);
  }
}
