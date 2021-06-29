var background,backgroundImage
var bowImage,bow
var createA,arrowImage ,arrow
var green_balloonImage,gB,green
var rB,red_balloonImage,red 
var pink_balloonImage,pB,pink
var blue_balloonImage,bB,blue


var PLAY=1
var END=0
var gameState=PLAY
var score=0

function preload()
{
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

 
}



function setup() {
  createCanvas(400, 400);

  

  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
 scene.scale = 2.5
 //scene.visible=false
 


  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1
  
  


rB=new Group()
bB=new Group()
pB=new Group()
gB=new Group()
createA=new Group()

edges = createEdgeSprites()

}



function draw() {
  
  
  text("Score: "+ score,250,30)

if(gameState==PLAY){
 
  



if(createA.isTouching(rB)){
  
  rB.destroyEach()
  createA.destroyEach()
  
  
  score=score+1
}

if(createA.isTouching(pB)){
  
  pB.destroyEach()
  createA.destroyEach()
  
  score=score+3
}

if(createA.isTouching(gB)){
  
  gB.destroyEach()
  createA.destroyEach()
  
  score=score+5
}

if(createA.isTouching(bB)){
  
  bB.destroyEach()
  createA.destroyEach()
  
  score=score+10
  
}


if(createA.isTouching(createA)){
  
  createA.destroyEach()
  

}


  if (keyWentDown("space")) {
    createArrow();
  
   
  
  }
  
  
   
 
  bow.y = World.mouseY
  


  scene.velocityX = -3 
  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  

  
if(bow.isTouching(pB)){
  gameState=END
}

if(bow.isTouching(rB)){
  gameState=END
}

if(bow.isTouching(gB)){
  gameState=END
}

if(bow.isTouching(bB)){
  gameState=END
}

if(edges[1].isTouching(gB)){
  gameState=END
} 

if(edges[1].isTouching(bB)){
  gameState=END
}

if(edges[1].isTouching(rB)){
  gameState=END
}

if(edges[1].isTouching(pB)){
  gameState=END
}


}

if(gameState==END){

  scene.velocityx = 0
  createA.velocityX = 0;

  if (scene.x = 0){
    scene.x = scene.width/0;
  }

  bow.destroy()
  rB.destroyEach()
  bB.destroyEach()
  pB.destroyEach()
  gB.destroyEach()




 
    
  
  
 
  drawSprites()


}
// moving ground

   
  
  //moving bow
  
  
  
  // release arrow when space key is pressed

    
  
 
  
  //creating continous balloons
  

  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
    
    
      redBalloon();
      
    }

    else if (select_balloon == 2) { 
      greenBalloon();
    }
    else if (select_balloon == 3) {
       pinkBalloon();

    }
    else if (select_balloon == 4) {
      blueBalloon();
    }
 
    
  
  
 
  } 


  drawSprites();}
  



// Creating  arrows for bow
 function createArrow() {

  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y   
  arrow.velocityX = -5;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  createA.add(arrow)
}




function redBalloon() {

  
   
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1
  
  rB.add(red)
  
  
 }
 
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(30, 360)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  bB.add(blue)
}

function greenBalloon() {
  
  
   var green = createSprite(0,Math.round(random(25, 380)), 10, 10);
  green.addImage(green_balloonImage);
  
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  gB.add(green)
}

function pinkBalloon(){
  var pink = createSprite(0,Math.round(random(40, 355)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pB.add(pink)
  

}




