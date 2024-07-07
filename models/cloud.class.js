class Cloud extends MoveableObject {
  height = 360;
  width = 640;
  speed = 0.5;
  // x= 720;
  y = 50;


  // getRandomInt(min, max) {
  //   const minCeiled = Math.ceil(min);
  //   const maxFloored = Math.floor(max);
  //   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  // }

  constructor() {
    super().loadImage("./img/5_background/layers/4_clouds/1.png");
    // this.x = -1000 + Math.random() * 3100;
    this.x = Math.random() * (2100 - -1000) + -1000;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
