class Box{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("01.png");

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill(255,0,0);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
    }
}
