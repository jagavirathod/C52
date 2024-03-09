var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsBottom1, obsBottom1Img
var obsBottom2, obsBottom2Img
var obsBottom3, obsBottom3Img
var obsTop1, obsTop1Img
var obsTop2, obsTop2Img
var restart, restartImg

function preload(){
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obsBottom1Img = loadImage("assets/obsBottom1.png")
obsBottom2Img = loadImage("assets/obsBottom2.png")
obsBottom3Img = loadImage("assets/obsBottom3.png")
obsTop1Img = loadImage("assets/obsTop1.png")
obsTop2Img = loadImage("assets/obsTop2.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY+0.2;

          //spawn the obstacles
          spawnTopObstacles()
          spawnBottomObstacles()

        drawSprites();
      
}
function spawnTopObstacles() {
if (frameCount % 100 === 0){
let y = Math.round(random(50, 150)) 
obstacle = createSprite(500, y, 50, 20);
obstacle.velocityX = -3;
obstacle.depth = balloon.depth;
balloon.depth = balloon.depth+1;
var rand = Math.round(random(1,2));
switch(rand) {
  case 1: obstacle.addImage(obsTop1Img);
          break;
  case 2: obstacle.addImage(obsTop2Img);
          break;
  default: break;
}
obstacle.scale = 0.1;
}
}

function spawnBottomObstacles() {
  if (frameCount % 80 === 0){
  let y = Math.round(random(height-50, height-150)) 
  obstacle = createSprite(500, y, 50, 20);
  obstacle.velocityX = -3;
  obstacle.depth = balloon.depth;
  balloon.depth = balloon.depth+1;
  var rand = Math.round(random(1,3));
  switch(rand) {
  case 1: obstacle.addImage(obsBottom1Img);
          break;
  case 2: obstacle.addImage(obsBottom2Img);
          break;
  case 3: obstacle.addImage(obsBottom3Img);
          break;
  default: break;
}
obstacle.scale = 0.1;
}
}
