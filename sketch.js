
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,tar
function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,250,800,10);
tar = createSprite(100,230,20,20);
s1= createSprite(700,235,100,20);
s2= createSprite(650,225,20,50);
s3=createSprite(750,225,20,50);

target=Bodies.circle(100,220,15,{restitution:0,isStatic:false},[8]);
World.add(world,target)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tar.x=target.position.x
  tar.y=target.position.y
  keyup();
  drawSprites();

  ground.display();
  tar.display();

 
}
function keyup(){
	
	Matter.Body.applyForce(target.body,target.Body.position,{x:85,y:-85});
}



