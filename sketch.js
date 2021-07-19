
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle = 64

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  var rock_options = {
    restitution: 0.55,
    frictionAir:0.01
  }

   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(300,-20,40,rock_options);
  World.add(world,rock);

  wall = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,wall);

  wedge = Bodies.rectangle(100,200,100,20,ground_options);
  World.add(world,wedge);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x,rock.position.y,40);
  rect(wall.position.x,wall.position.y,200,20);
  push();
  translate(wedge.position.x,wedge.position.y)
  rotate(angle)
  rect(0,0,100,20);
  pop();
  Body.rotate(wedge,angle)
 angle+=0.1
}

