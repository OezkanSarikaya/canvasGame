/**
 * Represents a drawable object in the game.
 */
class DrawableObject {
  /**
   * The image to be drawn.
   * @type {HTMLImageElement}
   */
  img;

  /**
   * Cache for loaded images.
   * @type {Object.<string, HTMLImageElement>}
   */
  imageCache = {};

  /**
   * Index of the current image.
   * @type {number}
   */
  currentImage = 0;

  /**
   * The x-coordinate of the drawable object.
   * @type {number}
   */
  x = 120;

  /**
   * The y-coordinate of the drawable object.
   * @type {number}
   */
  y = 250;

  /**
   * Loads an image from the given path and sets it as the current image.
   * @param {string} path - The path of the image to load.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Draws the current image on the given canvas context.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * Loads multiple images from the given array of paths and stores them in the image cache.
   * @param {Array<string>} arr - An array of image paths to load.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * Draws an outer frame around the specified area.
   * @param {number} x - The x-coordinate of the frame.
   * @param {number} y - The y-coordinate of the frame.
   * @param {number} width - The width of the frame.
   * @param {number} height - The height of the frame.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
  outerFrame(x, y, width, height, ctx) {
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "blue";
    ctx.rect(x, y, width, height);
    ctx.stroke();
  }

  /**
   * Draws an inner frame within the specified area, with the specified offsets.
   * @param {number} x - The x-coordinate of the frame.
   * @param {number} y - The y-coordinate of the frame.
   * @param {number} width - The width of the frame.
   * @param {number} height - The height of the frame.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   * @param {number} offsetTop - The top offset of the inner frame.
   * @param {number} offsetRight - The right offset of the inner frame.
   * @param {number} offsetBottom - The bottom offset of the inner frame.
   * @param {number} offsetLeft - The left offset of the inner frame.
   */
  innerFrame(x, y, width, height, ctx, offsetTop, offsetRight, offsetBottom, offsetLeft) {
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

  /**
   * Draws frames around the drawable object if it is an instance of certain classes.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
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
      this.innerFrame(this.x, this.y, this.width, this.height, ctx, this.offset.top, this.offset.right, this.offset.bottom, this.offset.left);
    }
  }
}