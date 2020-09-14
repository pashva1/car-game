function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  var car,wall;
  var speed,weight;
  speed=random(50,90);1500,
  weight(400,1500);
car=createSprite(50,200,50,50);
wall=createSprite(200,60,height/2)
car.velocityX=speed;

}

function draw() {
  background(255,255,255);
  bounceOff()
}
(function bounceOff(car,wall){
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2) {
      wall.velocityX = car.velocityX * (-1);
      wall.velocityX = car.velocityX * (-1);
}
if (car.y - wall.y < wall.height/2 + car.height/2
  &&  wall.y - car.y < wall.height/2 + car.height/2){
    car.velocityY = car.velocityY * (-1);
    wall.velocityY = obj2.velocityY * (-1);
}
})