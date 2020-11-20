const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground; 
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var goptions = {
    isStatic : true 
  }
  ground = Bodies.rectangle(200,390,400,20,goptions);
  World.add(world,ground);
  console.log(ground);

  var boption = {
    restitution: 1,
    friction:0.3,
    density:1
    }

  ball = Bodies.circle(100,100,15,boption);
  World.add(world,ball);
  console.log(ball);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,15,15);
} 