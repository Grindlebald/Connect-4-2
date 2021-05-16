const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world

var piece1, ground
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  piece1= new Pieces (85, 100)
  ground = new Ground(600,height,1200,20);
  }

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  for (var i = 100; i < 800; i=i+45) {
    var block1 = createSprite(200, i+27, 275, 5)
  }
    for (var h = 65; h < 350; h=h+45) {
    var block2 = createSprite(h, 263.5, 5, 273)
  }
  piece1.display();
  ground.display();
  drawSprites()
  
}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    Matter.Body.setPosition(piece1,{x: 80, y:100})
     Matter.Body.setStatic(piece1,false);
 
   }
 }