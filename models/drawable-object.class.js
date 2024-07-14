class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 120;
  y = 250;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  outerFrame(x, y, width, height, ctx) {
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "blue";
    ctx.rect(x, y, width, height);
    ctx.stroke();
  }

  innerFrame(x, y, width, height, ctx,offsetTop,offsetRight,offsetBottom,offsetLeft) {
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "red";
    ctx.rect(
      x + offsetLeft,
      y + offsetTop,
      width - offsetRight - offsetLeft,
      height - offsetBottom - offsetTop
    );
    ctx.stroke();
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof ThrowableObject ||
      this instanceof Endboss ||
      this instanceof Chick ||
      this instanceof Chicken ||
      this instanceof Bottles ||
      this instanceof Coins
    ) {
      this.outerFrame(this.x, this.y, this.width, this.height, ctx);
      this.innerFrame(this.x, this.y, this.width, this.height, ctx,this.offset.top,this.offset.right,this.offset.bottom,this.offset.left);
    }
  }
}
