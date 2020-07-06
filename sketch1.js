var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 200, 50, 50);
 fixedRect = createSprite(300, 100, 50, 50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.velocityX = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  background(255,255,255);  
    bounceOff(fixedRect,movingRect);
  drawSprites();
}
function bounceOff (objectOne,objectTwo){
  if(objectOne.x-objectTwo.x<=objectOne.width/2+objectTwo.width/2
    &&objectTwo.x-objectOne.x<=objectOne.width/2+objectTwo.width/2){
    objectOne.velocityX = objectOne.velocityX*-1;
    objectTwo.velocityX = objectTwo.velocityX*-1;
    }
    if(objectOne.y-objectTwo.y<=objectOne.height/2+objectTwo.height/2
    &&objectTwo.y-objectOne.y<=objectOne.height/2+objectTwo.height/2)
    {
        objectOne.velocityY = objectOne.velocityY*-1;
        objectTwo.velocityY = objectTwo.velocityY*-1;
    }
  
}



