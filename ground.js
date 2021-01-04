class Ground{
    constructor(x,y,width,height){
        //additional parameter options in Bodies.rectangle()
       var options={
            isStatic:true
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
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }

}