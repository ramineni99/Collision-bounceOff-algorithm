var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 200, 50, 50);
 fixedRect = createSprite(300, 100, 50, 50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
 if(isTouching(movingRect,fixedRect)){
  
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}
function isTouching (objectOne,objectTwo){
  if(objectOne.x-objectTwo.x<=objectOne.width/2+objectTwo.width/2
    &&objectTwo.x-objectOne.x<=objectOne.width/2+objectTwo.width/2
    &&objectOne.y-objectTwo.y<=objectOne.height/2+objectTwo.height/2
    &&objectTwo.y-objectOne.y<=objectOne.height/2+objectTwo.height/2)
    {
     return true;
    }
  else {
    return false;
  }
}



