const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1;
var box2;
var ground;
function setup(){
 createCanvas(400,400);

engine=Engine.create();
world=engine.world;
ground=new Ground(200,350,400,10)
box1= new Box(100,100,50,50);
box2=new Box(300,300,50,50);

}
function draw()
{
  background(0);
  Engine.update(engine)
  ground.display();
box1.display();
box2.display();

}
