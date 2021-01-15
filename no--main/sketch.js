
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy;
var ground;
var mango1;
var stone,launcher;
function preload()
{
	boy=loadImage("Images/boy1.png");
	tree = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	
	ground=new Ground(width/2,700,width,20);
    mango1 = new Mango(1100,200,30);
	stone=new Stone(235,420,30);
    launcher = new Launcher(stone.body,{x:210,y:400});
}


function draw() {
  background(0);
  Engine.update(engine);
  image(boy,200,300,250,400);
  image(tree,800,100,500,600);
  //boy.display();
  ground.display();
  mango1.display();
  stone.display();
  launcher.display();
}



