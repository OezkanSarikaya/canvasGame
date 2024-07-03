class Chick extends MoveableObject {
    height = 42;
    width = 40;
    IMAGES_WALKING = [
      "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
      "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
      "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
    ];
  
    y = 640 - this.height;
    constructor() {
      super().loadImage("./img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
      this.loadImages(this.IMAGES_WALKING);
      this.x = 200 + Math.random() * 2100;
      this.speed = 0.25 + Math.random() * 0.75;
      this.animate();
    }
  
    animate() {
      setInterval(() => {
        this.moveLeft();
      }, 1000 / 60);
  
      setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
      }, 120);
    }
  }
  