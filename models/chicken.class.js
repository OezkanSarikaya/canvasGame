class Chicken extends MoveableObject {
  height = 62;
  width = 60;
  IMAGES_WALKING = [
    "../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
  ];
  
  // y = 418;
  y = 418-40;
  constructor() {
    super().loadImage("../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 500;
    this.speed = 0.25 + Math.random() * 0.75;
    this.animate();
  }

  animate() {
    
    setInterval(() => {
      this.moveLeft();
    }, 1000/60);
    
    setInterval(() => {
      // let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 % 6;
      // let path = this.IMAGES_WALKING[i];
      // this.img = this.imageCache[path];
      // this.currentImage++;
      this.playAnimation(this.IMAGES_WALKING);
    }, 120);


    
  }
}
