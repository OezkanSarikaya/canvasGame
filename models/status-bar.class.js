class StatusBar extends DrawableObject {
  IMAGES = [
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
  ];

  percentage = 100;
  world;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 20;     
    this.y = 20;
    this.width = 200;
    this.height = 53;
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let healthImage = percentage / 20;
    healthImage = Math.trunc(healthImage);
    let path = this.IMAGES[healthImage];
    this.img = this.imageCache[path];
  }
}
