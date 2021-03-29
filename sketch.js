var movingRect, fixedRect;



function setup() {
  createCanvas(800,400);
  movingRect= createSprite(100, 300,70, 80);
  movingRect.shapeColor= "aqua";

  fixedRect= createSprite(300,100,50,60);
  fixedRect.shapeColor= "pink";
}

function draw() {
  background("lightgreen");  
  //move the rectangle using mouse
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  //console.log(movingRect.x - fixedRect.x);

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x- movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2&&
  fixedRect.y- movingRect.y < fixedRect.height/2 + movingRect.height/2){

  movingRect.shapeColor= "darkblue";
  fixedRect.shapeColor="darkblue";
}

else{
  movingRect.shapeColor="aqua";
  fixedRect.shapeColor="pink";
}



drawSprites();
}