const Engine = Matter.Engine;
const World= Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
var roofObject;
var bobDiameter;
var startBobPositionX, startBobPositionY;

function setup() {

  createCanvas(1600,700);

  engine = Engine.create();
  world = engine.world;

  roofObject = new Roof(width/2,height/4,width/7,20);

  bobDiameter = 40;

  startBobPositionX = width/2;
  startBobPositionY = height/4+500;

  bob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
  bob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
  bob3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
  bob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
  bob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

  rope1 = new Rope(bob1.body,roofObject.body,-bobDiameter*2,0);
  rope2 = new Rope(bob2.body,roofObject.body,-bobDiameter*1,0);
  rope3 = new Rope(bob3.body,roofObject.body,0,0);
  rope4 = new Rope(bob4.body,roofObject.body,bobDiameter*1,0);
  rope5 = new Rope(bob5.body,roofObject.body,bobDiameter*2,0);
}

function draw() {
  background(255);  
  Engine.update(engine);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  roofObject.display();
  
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x : -50, y : -45});
  }
}

function drawLine(constraint) {
  var bobBodyPosition = constraint.bodyA.position;
  var roofBodyPosition = constraint.bodyB.position;

  var roofBodyOffSet = constraint.pointB;

  roofBodyX = roofBodyPosition.x + roofBodyOffSet.x;
  roofBodyY = roofBodyPosition.y + roofBodyOffSet.y;
  drawLine(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);
}