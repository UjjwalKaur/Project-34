const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;
	bobDiameter=40;
	var posX = width/2;
	var posY = height/4 + 200;
	bob1 = new Bob(posX - bobDiameter*2,posY,bobDiameter);
	bob2 = new Bob(posX - bobDiameter*1,posY,bobDiameter);
	bob3 = new Bob(posX ,posY,bobDiameter);
	bob4 = new Bob(posX + bobDiameter*1,posY,bobDiameter);
	bob5 = new Bob(posX +bobDiameter*2,posY,bobDiameter);

	roof = new Roof(width/2,height/4,400,30);

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body, -bobDiameter*1,0);
	rope3 = new Rope(bob3.body,roof.body, 0,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  roof.display();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();

}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}

function drawLine(constraint)
{
	bobPosition = constraint.bodyA.position;
	roofPosition = constraint.bodyB.position;
	roofOffset = constraint.pointB;
	roofX = roofPosition.x + roofOffset.x;
	roofY = roofPosition.y + roofOffset.y;
	stroke(255);
	line(bobPosition.x,bobPosition.y,roofX, roofY);
}


