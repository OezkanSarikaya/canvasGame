class ThrowableObject extends MoveableObject {
    // height = 100;
    // width = 100;
// world;

    constructor(x,y,otherDirection) {
        super().loadImage("../img/6_salsa_bottle/salsa_bottle.png");
        this.width = 60;
        this.height = 70;
        // this.world = world;
        this.x = x;
        this.y = y;
        this.throw(otherDirection);        
    }


}