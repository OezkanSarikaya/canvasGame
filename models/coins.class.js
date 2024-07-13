class Coins extends MoveableObject {
  offset = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  };
  width = 80;
  height = 80;

  IMAGES_COINS = ["./img/8_coin/coin_1.png", "./img/8_coin/coin_2.png"];

  constructor(y, x) {
    super().loadImage("./img/8_coin/coin_2.png");
    this.loadImages(this.IMAGES_COINS);
    this.y = y;
    this.x = x;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_COINS);
    }, 400);
  }
}
