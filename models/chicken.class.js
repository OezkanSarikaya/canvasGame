class Chicken extends MoveableObject {
  height = 62;
  width = 60;
  world;
  isEnemyDead = false;
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];
  
  offset = {
    top: 3,
    left: 3,
    right: 3,
    bottom: 3,
  };

  y = 640 - this.height;
  constructor() {
    super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 200 + Math.random() * 2100;
    this.speed = 0.35 + Math.random() * 0.75;
    this.isEnemyDead = false;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (!this.isEnemyDead) {
        this.followCharacter(this.speed,this.characterX);
        // this.chick_sound.play();
      }
    }, 1000 / 60);

    let timepassed = 0;
    setInterval(() => {
      if (!this.isEnemyDead) {
        this.playAnimation(this.IMAGES_WALKING);


        if (soundsMuted) {
          // this.chick_sound2.pause();
          chicken_sound.muted = true;
        } else {

        if (level) {
          let pause = Math.floor((Math.random() * 5) + 1);
          setTimeout(() => {
            chicken_sound.muted = false;
            chicken_sound.volume = 0.9;
            chicken_sound.play();
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
