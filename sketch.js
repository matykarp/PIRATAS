const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var pueblopirata;
var torre;
var torrerect;
var cannon;
var angle;

function preload() {
  pueblopirata = loadImage("./assets/background.gif")
  torre = loadImage("./assets/tower.png")
}

function setup() {
  var options  ={
    isStatic: true
  }

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  ground =Bodies.rectangle(0,height-10,width,5,options)
  World.add(world,ground)
  torrerect=Bodies.rectangle(160,350,160,310,options)
  World.add(world,torrerect)

  cannon = new Canon(180,110,130,100,angle) 
}

function draw() {
  background(200);
  image(pueblopirata,0,0,width,height);
 
  Engine.update(engine);

  rect(ground.position.x,ground.position.y,width,10)

  push();
  imageMode(CENTER) 
  image(torre,torrerect.position.x,torrerect.position.y,160,310)
  pop();

  cannon.appear();

}
function keyPressed(){
  if(keyCode === DOWN_ARROW){
    ball.shoot()
}
}