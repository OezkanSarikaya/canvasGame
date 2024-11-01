/**
 * Represents the end boss in the game, extending from MoveableObject.
 * @extends MoveableObject
 */
class Endboss extends MoveableObject {
  /**
   * @property {number} height - The height of the end boss.
   * @property {number} width - The width of the end boss.
   * @property {number} y - The y-coordinate of the end boss.
   * @property {number} x - The x-coordinate of the end boss.
   * @property {number} energy - The energy level of the end boss.
   * @property {number} speed - The speed of the end boss.
   * @property {Object} offset - The collision offset of the end boss.
   * @property {number} offset.top - The top offset.
   * @property {number} offset.left - The left offset.
   * @property {number} offset.right - The right offset.
   * @property {number} offset.bottom - The bottom offset.
   * @property {Array<string>} IMAGES_WALKING - Array of image paths for walking animation.
   * @property {Array<string>} IMAGES_ALERT - Array of image paths for alert animation.
   * @property {Array<string>} IMAGES_ATTACK - Array of image paths for attack animation.
   * @property {Array<string>} IMAGES_HURT - Array of image paths for hurt animation.
   * @property {Array<string>} IMAGES_DEAD - Array of image paths for dead animation.
   * @property {string} YOU_WIN - Image path for the 'You Win' screen.
   * @property {string} level1 - Image path for the level 1 end screen.
   * @property {string} level2 - Image path for the level 2 end screen.
   * @property {string} level3 - Image path for the level 3 end screen.
   */
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

  /**
   * Creates an instance of Endboss and initializes its properties.
   * @param {number} speed - The speed of the end boss.
   * @param {number} energy - The energy level of the end boss.
   */
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

  /**
   * Displays the end screen based on the game level.
   * @param {number} gameLevel - The current game level.
   */
  displayEndScreen(gameLevel) {
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
        win = true;
        break;
    }
  }

  /**
   * Ends the current level and displays the appropriate end screen.
   */
  endLevel() {
    setTimeout(() => {
      this.height = 650;
      this.width = 650;
      this.x = this.characterX -= 100 - 220;
      this.y = 20;
      this.otherDirection = false;
      start_game_over.pause();
      soundsMuted ? (mariachi.muted = true) : mariachi.play();
      clearAllIntervals();
      if (gameLevel <= 3) {
        gameLevel++;
      }
      this.displayEndScreen(gameLevel);
    }, 1000);
  }

/**
 * Endboss Animation depending on its state
 * @param {boolean} follow - Follow the Character or not (remain standing)
 * @param {boolean} awake - Once triggered Endbos Attach when X position auf Character is exceeded
 * @param {number} distance - Distance between Endboss and Character
 * @returns - follow 
 */
  endbosssAnimation(follow, awake, distance) {
    if (this.isDead()) {
      follow = false;
      soundsMuted ? (endboss_die.muted = true) : endboss_die.play();
      this.playAnimationOnce(this.IMAGES_DEAD);
      this.endLevel();
    } else if (this.isHurt()) {
      follow = false;
      soundsMuted ? (endboss_hurt.muted = true) : (endboss_hurt.muted = false);
      endboss_hurt.play();
      this.playAnimation(this.IMAGES_HURT);
    } else if (awake && distance <= 900 && distance > 600) {
      follow = true;
      this.playAnimation(this.IMAGES_WALKING);
    } else if (awake && distance <= 600 && distance > 400) {
      follow = true;
      this.playAnimation(this.IMAGES_ALERT);
    } else if (awake && distance <= 400) {
      follow = true;
      this.playAnimation(this.IMAGES_ATTACK);
    }
    return follow;
  }

  /**
   * Starts Animation and Moves Interval for the end boss based on its state and the distance to the character.
   */
  animate() {
    let follow = false;
    let awake = false;
    let distance;
    setInterval(() => {
      distance = Math.abs(parseInt(this.characterX) - parseInt(this.x));
      if (!awake && parseInt(this.characterX) > 1900) {
        awake = true;
      }
      follow = this.endbosssAnimation(follow, awake, distance);
    }, 200);
    setInterval(() => {
      if (follow) {
        this.followCharacter(this.speed, this.characterX);
      }
    }, 1000 / 60);
  }
}
