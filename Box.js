class Box{
    constructor(x,y,width,height){
    var some = {
    restitution:1.2,
    friction:0.7,
    density:0.5
    }
    this.body = Bodies.rectangle(x,y,width,height,some)
    this.width= width;
    this.height= height;
    World.add(myworld,this.body);
    }
    display(){
       var pos = this.body.position
       var angle = this.body.angle
       push()
       translate(pos.x,pos.y)
       rotate(angle)
       rectMode(CENTER);
       fill(255);
        rect(0,0,this.width,this.height)
        pop()
    }
}
