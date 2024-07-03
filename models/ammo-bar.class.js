class AmmoBar extends DrawableObject {
  IMAGES = [
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
    "./img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
  ];

  ammo = 100;
  world;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 20;
    this.y = 70;
    this.width = 200;
    this.height = 53;
    this.setAmmo(100);
  }

  setAmmo(ammo) {
    this.ammo = ammo;
    let healthImage = ammo / 20;
    healthImage = Math.trunc(healthImage);
    let path = this.IMAGES[healthImage];
    this.img = this.imageCache[path];
  }
}
