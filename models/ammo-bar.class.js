class AmmoBar extends DrawableObject {
  IMAGE = "./img/7_statusbars/3_icons/icon_salsa_bottle.png";

  constructor() {
    super();
    this.loadImage(this.IMAGE);
    this.x = 20;
    this.y = 20;
    this.width = 50;
    this.height = 50;
  }
  setAmmo(ammo) {
    this.ammo = ammo;
  }
}
