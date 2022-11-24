class CannonBall{
    constructor(x,y){
        var options = {
            isStatic : true
        };
        this.r = 30;
        this.body = Bodies.circle(x,y,this.r, options);
        this.image = loadImage("./assets/cannonball.png");
        this.trajectory = [];
        World.add(world,this.body)
    }
    shoot(){
        var newAngle = cannon.angle;
        newAngle = newAngle * (3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle)
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body,false);
    }
}   