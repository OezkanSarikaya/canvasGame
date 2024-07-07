class ThrowableObject extends MoveableObject {
  isSplashed = false;

  IMAGES_BOTTLE_ROTATION = [
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  IMAGES_BOTTLE_SPLASH = [
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  offset = {
    top: 14,
    left: 14,
    right: 14,
    bottom: 10,
  };

  constructor(x, y, otherDirection) {
    super().loadImage("./img/6_salsa_bottle/salsa_bottle.png");
    this.loadImages(this.IMAGES_BOTTLE_ROTATION);
    this.loadImages(this.IMAGES_BOTTLE_SPLASH);
    this.width = 60;
    this.height = 70;
    this.x = x;
    this.y = y;
    this.animate();
    this.throw(otherDirection);
  }

  animate() {
    const splashInterval = setInterval(() => {
      if (!this.isSplashed) {
        this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
      } 
      else {  
        this.playAnimationOnce(this.IMAGES_BOTTLE_SPLASH);    
        setTimeout(() => {
            this.y = 900;   
        }, 500);              
        clearInterval(splashInterval);    
      }  
    }, 100);
  }
}
