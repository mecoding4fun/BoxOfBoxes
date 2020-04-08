const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var boxA, ground;
var boxes = [];

var slider;
var val;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 800, 800, 200);
  slider = createSlider(0, 7, 1);
  slider.position(10, 10);
}

function mousePressed(){
  var rand = random(5,30);
  boxA = new Box(mouseX, mouseY, rand, rand);
  boxes.push(boxA);
}

function draw(){
  background(89,86,93);
  val = slider.value();
  world.gravity.y = val;
  Engine.update(engine);
  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
  }
  ground.display();
}
