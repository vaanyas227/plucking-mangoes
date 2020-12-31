
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy ,stones;
var mango1,mango2.mango3,mango4,mango5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 detectCollision(stoneObj.mango1);
 detectCollision(stoneObj.mango2);
 detectCollision(stoneObj.mango2);
 detectCollision(stoneObj.mango3);
 detectCollision(stoneObj.mango4);
 detectCollision(stoneObj.mango5);
}
function keyPressed(){
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235,y:420})
		launcherObject.attach(stoneObj.body);


	}
}

function detectCollision(Lstone,Lmango){
	
	mangoBodyPosition=1mango.body.setPositionstoneBodyPosition
	stoneBodyPosition=1stone.body.mangoBodyPosition
	
	
}


