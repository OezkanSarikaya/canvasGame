class Chick extends MoveableObject {
  height = 42;
  width = 40;
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["./img/3_enemies_chicken/chicken_small/2_dead/dead.png"];
  offset = {
    top: 3,
    left: 3,
    right: 3,
    bottom: 3,
  };
  chick_sound = new Audio("./audio/chic2.mp3");
  chick_sound2 = new Audio("./audio/chick.mp3");

  y = 640 - this.height;
  constructor() {
    super().loadImage("./img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 200 + Math.random() * 2100;
    this.speed = 0.55 + Math.random() * 0.95;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.energy >0) {
        this.followCharacter(this.speed, this.characterX);

        // this.chick_sound.play();
      }
    }, 1000 / 60);

    let timepassed = 0;
    setInterval(() => {
      if (this.energy >0) {
        this.playAnimation(this.IMAGES_WALKING);

        if (soundsMuted) {
          // this.chick_sound2.pause();
          this.chick_sound2.muted = true;
        } else {
          if (level) {
            let pause = Math.floor(Math.random() * 5 + 1);
            setTimeout(() => {
              this.chick_sound2.muted = false;
              this.chick_sound2.volume = 0.1;
              this.chick_sound2.play();
            }, pause);
          }
        }
      } else {
        if (timepassed < 4000) {
          this.playAnimation(this.IMAGES_DEAD);
        } else {
          let index = this.world.level.enemies.indexOf(this);
          if (index > -1) {
            this.world.level.enemies.splice(index,1);        
          }    
        }     
        timepassed = new Date().getTime() - this.lastHit;
      }
    }, 120);
  }
}
