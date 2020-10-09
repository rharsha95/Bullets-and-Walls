var thickness,wall;
var bullet,speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 30, 18);
  bullet.shapeColor = color(255,255,255);

  wall = createSprite(1200, 200, 30, height/2);
  wall.shapeColor = color(80,80,80);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet.velocityX = speed;

}

function draw() {
  background(0);  

  damage = ( 0.5 * weight * speed * speed ) / (thickness * thickness * thickness);

  if(bullet.isTouching(wall)) {
    bullet.velocityX = 0;
    
    if(damage > 10) {
      wall.shapeColor = "red"
    }
    else if(damage <= 10) {
      wall.shapeColor = "green"
    }
    
  }

  drawSprites();
}