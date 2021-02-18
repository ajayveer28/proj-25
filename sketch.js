var paper,dustbin,ground;
var wood1,wood2,wood3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	wood=loadImage("dustbinImg.png")
}

function setup() {
	createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;
    paper=new Paper(100,450,70);
	 
    ground=new Ground(width/2,670,width,20); 
    wood1=new Dustbin(500,height-70,170,20);
    wood2=new Dustbin(420,height-150,20,190);
   
     wood3=new Dustbin(580,height-150,20,190);
   
  wood4=createSprite(500,height-150,20,20);
  wood4.addImage(wood)
  wood4.scale=0.7
	Engine.run(engine);
  
}


function draw() {
 
  background("120")

  
Engine.update(engine);
 
  
  paper.display();
 // dustbin.display();
  ground.display();
wood1.display()
wood2.display()
wood3.display()

  drawSprites();
 
}

function keyPressed(){
 if (keyCode===UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-500});

  }
  }