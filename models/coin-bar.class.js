class CoinBar extends DrawableObject {
    IMAGES = [
      "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
      "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
      "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
      "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
      "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
      "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
    ];
  
    // coins = 50;
    world;
  
    constructor() {
      super();
      this.loadImages(this.IMAGES);
      this.x = 20;
      this.y = 120;
      this.width = 200;
      this.height = 53;
      this.setCoins(0);
    }
  
    setCoins(coins) {
      this.coins = coins;
      let healthImage = coins / 20;
      healthImage = Math.trunc(healthImage);
      if (healthImage < this.IMAGES.length) {
      let path = this.IMAGES[healthImage];
      this.img = this.imageCache[path];
      }
    }
  }
  