class Box{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{restitution:0.5});
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        stroke("yellow");
        strokeWeight(10);
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }


}