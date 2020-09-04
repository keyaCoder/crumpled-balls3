class Dustbin{
    constructor(x, y){
        var options = {
            'isStatic':true
        }
        this.leftBody = Bodies.rectangle(x - 110, y - 40, 20, 100, options);
        this.rightBody = Bodies.rectangle(x + 110, y - 40, 20, 100, options);
        this.bottomBody = Bodies.rectangle(x - 90, y + 40, 200, 20, options);
        this.image = loadImage("dustbingreen.png");
    
        this.dustbinWidth = 270;
        this.dustbinHieght = 300;

        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
        World.add(world, this.bottomBody);
    }

    display() {
        var posLeft = this.leftBody.position;
        var posRight = this.rightBody.position;
        var posBottom = this.bottomBody.position;
        push();
                fill('');
        rect(posLeft.x, posLeft.y, 20, 100);
        rect(posRight.x, posRight.y, 20, 100);
        rect(posBottom.x, posBottom.y, 200, 20);
        image(this.image, posBottom.x - 35, posBottom.y - 270,
            this.dustbinWidth, this.dustbinHieght);
        pop();
    }
}white