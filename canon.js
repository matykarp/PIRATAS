class Canon{
    constructor(x,y,width,height,angle){
    this.x = x
    this.angle = angle
    this.y = y
    this.width= width
    this.height = height
    this.canon_image =loadImage("assets/canon.png")
    this.canon_base =loadImage("assets/cannonBase.png")
}


appear(){
    if(keyIsDown(RIGHT_ARROW)){
        this.angle +=1
    }
    if(keyIsDown(LEFT_ARROW)){
        this.angle -=1
    }
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.canon_image,0,0,this.width,this.height);
    pop()
    image(this.canon_base,70,20,200,200)
    noFill();   

}
}