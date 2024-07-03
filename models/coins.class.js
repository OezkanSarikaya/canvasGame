class Coins extends DrawableObject {
  constructor(y,x) {
    // let xPosition;
    super().loadImage("../img/8_coin/coin_2.png");
    // if (Math.random() * 10 > 5) {
    //   super().loadImage("../img/8_coin/coin_1.png");
    // } else {
    //   super().loadImage("../img/8_coin/coin_2.png");
    // }

    this.width = 80;
    this.height = 80;
    this.y = y;
    this.x = x;
    //  xPosition = -600 + Math.random() * 1500;
    // this.x = Math.trunc(xPosition / this.width) * 40;
  }
}
