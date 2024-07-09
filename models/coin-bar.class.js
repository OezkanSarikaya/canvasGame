class CoinBar extends DrawableObject {
  IMAGE = "./img/7_statusbars/3_icons/icon_coin.png";
  
    constructor() {
      super();
      this.loadImage(this.IMAGE);
      this.x = 210;
      this.y = 20;
      this.width = 50;
      this.height = 50; 
    }
  
    setCoins(coins) {
      this.coins = coins;
    }
  }
  