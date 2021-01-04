class Box{
    constructor(x,y,width,height){
        //additional parameter options in Bodies.rectangle()
       var options={
        'restitution': 0.8,
        'friction' : 0.3,
        'density': 1.0
        }
        // create a body
    this.body=Bodies.rectangle(x,y,width,height,options);
        // add the object to the world
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green")
        fill("grey");
        rect(0, 0, this.width, this.height);
        pop();
    }
}