const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var duck, bear1
var movingrock1, obstaclegroup


var gamestate="Start"


function preload(){
duckIMG=loadImage("pictures/duckframe.png")
duckWalkingIMG=loadAnimation("pictures/walkingframe1.png", "pictures/walkingframe2.png")
duckFlyingIMG=loadAnimation("pictures/flyingframe1.png", "pictures/flyingframe2.png")
cowIMG=loadImage("pictures/cow.png")
bearIMG=loadImage("pictures/BadBear.png")
backgroundIMG=loadImage("pictures/Backdrop2.png")
backdrop1=loadImage("pictures/Backdrop1.png")
}

function setup() {
  engine = Engine.create();
  world = engine.world;
 
  score=0;
 
  createCanvas(windowWidth,windowHeight);
  box1=createSprite(600,500,1,1)
  ground=createSprite(width/2-860,height-100,800,20)
  ground.shapeColor=rgb(145, 171, 201)

  //duck=createSprite(400,-2500,200,200)
  duck=createSprite(width/2-1100,height-120,200,200)
  //duck.addImage(duckIMG)
  duck.addAnimation(duckWalkingIMG)
  duck.scale=0.25;

 cage=createSprite(400,-2325,1,1)
 cageSide1=createSprite(310,-2270,1,1)
 //cageSide2=createSprite(490,-2270,30,120)
  //button.shapeColor()


  //play = createSprite(400,500,800,1000);
  //play.shapeColor=("red");

  play = createSprite(400,500,800,1000);
  play.shapeColor=("red");


  play.visible=false

  section1=createSprite(250,750,500,20)
  section2=createSprite(575,400,600,20)
  section3=createSprite(100,200,600,20)


  section1.shapeColor=rgb(145, 171, 201)
  section2.shapeColor=rgb(145, 171, 201)
  section3.shapeColor=rgb(145, 171, 201)


  block1=createSprite(650,965,300,20)
  block2=createSprite(680,900,240,20)
  block3=createSprite(720,835,200,20)

  block1.shapeColor=rgb(145, 171, 201)
  block2.shapeColor=rgb(145, 171, 201)
  block3.shapeColor=rgb(145, 171, 201)
 
  block4=createSprite(650,375,300,20);
  block5=createSprite(680,320,240,20)
  block6=createSprite(720,265,200,20)

  block4.shapeColor=rgb(145, 171, 201)
  block5.shapeColor=rgb(145, 171, 201)
  block6.shapeColor=rgb(145, 171, 201)

  
  block7=createSprite(10,-300,200,20)
  block8=createSprite(500,-650,600,20)

  block7.shapeColor=rgb(145, 171, 201)
  block8.shapeColor=rgb(145, 171, 201)

  movingrock1=createSprite(70,700,150,20);
  movingrock1.velocityY=-1;

  movingrock1.shapeColor=rgb(145, 171, 201)

  
  side1=createSprite(1,500,10,1000000)
  side2=createSprite(800,500,10,1000000);

  side1.shapeColor=rgb(145, 171, 201)
  side2.shapeColor=rgb(145, 171, 201)
  
  invisible1=createSprite(400,1200,1,1)
  invisible2=createSprite(400,-350,1,1)
  invisible3=createSprite(400,-1200,1,1)
  invisible4=createSprite(400,-1700,1,1)
  invisible5=createSprite(400,-2300,1,1)

  cow=createSprite(400,-2260,30,30)
  cow.addImage(cowIMG)
  cow.scale=1.5;
  cow.debug=true
  
  bear1=createSprite(200,-400,10,10)
  bear1.addImage(bearIMG)
  bear1.scale=0.5
  bear1.velocityX=-3
  bear1.setCollider("rectangle", 0,0, 50,150);

  bear2=createSprite(200,-1600,10,10)
  bear2.addImage(bearIMG)
  bear2.scale=0.5
  bear2.velocityX=-3
  bear2.setCollider("rectangle", 0,0, 50,150);

  bear3=createSprite(700,-1800,10,10)
  bear3.addImage(bearIMG)
  bear3.scale=0.5
  bear3.velocityX=3
  bear3.setCollider("rectangle", 0,0, 50,150);

  bear4=createSprite(200,-2000,10,10)
  bear4.addImage(bearIMG)
  bear4.scale=0.5
  bear4.velocityX=-3
  bear4.setCollider("rectangle", 0,0, 50,150);

  movingblock1=createSprite(300,-900,600,20)
  movingblock1.velocityX=5
  movingblock2=createSprite(700,-1050,600,20)
  movingblock2.velocityX=-5
  movingblock3=createSprite(300,-1200,600,20)
  movingblock3.velocityX=5
  movingblock4=createSprite(700,-1350,600,20)
  movingblock4.velocityX=-5


  movingblock1.shapeColor=rgb(145, 171, 201)
  movingblock2.shapeColor=rgb(145, 171, 201)
  movingblock3.shapeColor=rgb(145, 171, 201)
  movingblock4.shapeColor=rgb(145, 171, 201)
 

 block9=createSprite(100,-1500,300,20)
 block10=createSprite(400,-2200,300,20)
 
 block9.shapeColor=rgb(145, 171, 201)
 block10.shapeColor=rgb(145, 171, 201)
  
}

function draw() {
  background(backgroundIMG); 
  drawSprites();

  if(gamestate=="Start"){
  background(backdrop1); 
  fill("blue");
  textSize(40);
  text("Finding My Cow",250, 100)
  text("Click anywhere to start the game", 150,200)

  play.visibile=false

if(mousePressedOver(play)){
  gamestate="play"}}

 else if (gamestate==="play"){
 //background(backgroundIMG)
  fill("blue");
  textSize(40);
 //text("Congratulations, you have rescued Cow!",50, -2400)
 //text("Click on Cow to restart the game!", 150,-2325)
  //play.visible=true
  duck.collide(ground);
  duck.collide(block1);
  duck.collide(section1);
  duck.collide(block2);
  duck.collide(block3);
  duck.collide(movingrock1);
  duck.collide(section2);
  movingrock1.collide(section3);
  duck.collide(section3);
  duck.collide(block4);
  duck.collide(block5);
  duck.collide(block6);
  duck.collide(block7)

  duck.collide(side1)
  duck.collide(side2)
  duck.collide(block8)
  
  duck.collide(movingblock1)
  duck.collide(movingblock2)
  duck.collide(movingblock3)
  duck.collide(movingblock4)
  duck.collide(block9)
  duck.collide(block10)
  

  bear1.bounceOff(side1)
  bear1.bounceOff(side2)

  bear2.bounceOff(side1)
  bear2.bounceOff(side2)

  bear3.bounceOff(side1)
  bear3.bounceOff(side2)

  bear4.bounceOff(side1)
  bear4.bounceOff(side2)

  movingblock1.bounceOff(side1)
  movingblock1.bounceOff(side2)

  movingblock2.bounceOff(side1)
  movingblock2.bounceOff(side2)

  movingblock3.bounceOff(side1)
  movingblock3.bounceOff(side2)

  movingblock4.bounceOff(side1)
  movingblock4.bounceOff(side2)

  if(duck.y<100){
  camera.position.y=invisible1.y;
  //duck.y=duck.y-90


}

if(duck.y<900){
  camera.position.y=box1.y;

  score=10;
  text("score: "+score,600,170);

}

if(duck.y<-125){
  camera.position.y=invisible2.y;
  score=100;
  text("score: "+score,600,-600);
}

if(duck.y<-800){
  camera.position.y=invisible3.y;
  score=200;
  text("score: "+score,600,-1600);
}

if(duck.y<-1000){
  camera.position.y=invisible4.y;
  score="300 you found Cow!";
  text("score: "+score,150,-2300);
}

if(duck.y<-2000){
  camera.position.y=invisible5.y;
}


if(duck.collide(bear1)){
  duck.y=930;
  camera.position.y=box1;
}
 
if(duck.collide(bear2)){
  duck.y=930;
  camera.position.y=box1;
}

if(duck.collide(bear3)){
  duck.y=930;
  camera.position.y=box1;
}


if(duck.collide(bear4)){
  duck.y=930;
  camera.position.y=box1;
}


if(keyDown(UP_ARROW)||touches.length>0){
    duck.y=duck.y-20

    duck.addAnimation("duckFlyingIMG", duckFlyingIMG)
    touches=[]
  }

  if(keyDown(DOWN_ARROW)||touches.length>0){
    duck.y=duck.y+10
    touches=[]
  }

  if(keyDown(RIGHT_ARROW)||touches.length>0){
    duck.x=duck.x+10
    //duck.addAnimation("duckWalkingIMG", duckWalkingIMG)
    touches=[]
  }

  if(keyDown(LEFT_ARROW)||touches.length>0){
    duck.x=duck.x-10
   // duck.addAnimation("duckWalkingIMG", duckWalkingIMG)
   touches=[]
  }

  duck.y=duck.y+10
  
 // if(mousePressedOver(cageSide1)){
   //   gamestate="start"
  //}

//text("score: "+score,600,duck.y-650);
  }
}