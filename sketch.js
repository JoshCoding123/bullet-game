var wall, thickness
var bullet,speed,weight



function setup() {
  createCanvas(1600,400);
  
  speed=random(200,250)
  weight=random(400,1500)
  
  thickness=random(22,83)

  bullet=createSprite(100,200,50,5)
  
  bullet.shapeColor="yellow"

  bullet.velocityX=speed;


  
  wall=createSprite(1200,200,thickness, height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;

  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
 console.log(damage)
 if(damage>10){

  wall.shapeColor="red";
 
}

if (damage <10) {
wall.shapeColor="green";

}
  }
}


function hascollided(Lbullet,Lwall)
{
    bulletRightEdge=Lbullet.velocityX +Lbullet.width;
    wallLeftEdge=Lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
         return true

    }
    return false;
  }