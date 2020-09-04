var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var paper, dustbin;
var launcher;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	//Create a Ground
	ground = new Ground(width / 2,height - 20,800,40);

	// why can't i make the paper sit on ground??????????????
	paper = new Paper(50, height - 100, 50);
	dustbin = new Dustbin(600, 595);
	launcher = new Launcher(paper.body, {x: 50, y: 200});


	Engine.run(engine);
  
}


function draw() {
//  rectMode(CENTER);
  background(255);
  ground.display();
  paper.display();
  dustbin.display();
  launcher.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}
