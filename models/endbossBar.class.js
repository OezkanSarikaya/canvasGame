class EndbossBar extends DrawableObject {
    IMAGE = "./img/7_statusbars/3_icons/icon_health_endboss.png";
    constructor() {
      super();
      this.loadImage(this.IMAGE);
      this.x = 940;
      this.y = 20;
      this.width = 50;
      this.height = 50;
      this.percentage;
    }
  }