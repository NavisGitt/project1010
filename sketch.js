var box1, box2, box3, box4, box5, box6, box7, box8,box9, box10, box11, box12, box13, box14, box15, box16 ;
var paddle ;
var ball ;
var score;
var gameState ;


function setup () {
box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
 box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
 box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
 box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
 box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


 box9 = createSprite(25, 125, 50, 50);

box9.shapeColor="blue";
 box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
 box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
 box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
 box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

  paddle=createSprite(200,390,100,20) ;
 ball=createSprite(200,200,20,20) ;
 score = 0;

 gameState = "serve";
}


function draw() {
  
  background("white");

textSize(22);
stroke("red");
fill("red");
text( "Score :" + score, 15,20);

textSize(27);
stroke("teal");
fill("teal");
text( "The Breakout Game" , 115,28);



  drawSprites();
createEdgeSprites();
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(topEdge);
ball.bounceOff(paddle);
  
   if (ball.isTouching(box1) )
   { ball.bounceOff(box1) ;
   score = score + 1 ;
   box1.destroy();
   }
   if (ball.isTouching(box2) ) {
    ball.bounceOff(box2) ;
    score = score + 2 ;
   box2.destroy();
   }
   if (ball.isTouching(box3) ) {
     ball.bounceOff(box3) ;
   score = score + 1 ;
   box3.destroy();
   }
      if (ball.isTouching(box4) ) {
    ball.bounceOff(box4) ;
    score = score + 2 ;
   box4.destroy();
   }
    if (ball.isTouching(box5) ) {
     ball.bounceOff(box5) ;
   score = score + 1 ;
   box5.destroy();
   }
  if (ball.isTouching(box6) ) {
     ball.bounceOff(box6) ;
   score = score + 2 ;
   box6.destroy();
   }
  if (ball.isTouching(box7) ) {
     ball.bounceOff(box7) ;
    score = score + 1 ;
   box7.destroy();
   }
  
  if (ball.isTouching(box8) ) {
     ball.bounceOff(box8) ;
    score = score + 2 ;
   box8.destroy();
   }
  if (ball.isTouching(box9) ) {
     ball.bounceOff(box9) ;
    score = score + 2 ;
   box9.destroy();
   }
  
  if (ball.isTouching(box10) ) {
     ball.bounceOff(box10) ;
    score = score + 1 ;
   box10.destroy();
   }
  
  if (ball.isTouching(box11) )
   { ball.bounceOff(box11) ;
   score = score + 2 ;
   box11.destroy();
   }
   if (ball.isTouching(box12) ) {
    ball.bounceOff(box12) ;
    score = score + 1 ;
   box12.destroy();
   }
   if (ball.isTouching(box13) ) {
     ball.bounceOff(box13) ;
    score = score + 2 ;
   box13.destroy();
   }
      if (ball.isTouching(box14) ) {
    ball.bounceOff(box14) ;
   score = score + 1 ;
   box14.destroy();
   }
    if (ball.isTouching(box15) ) {
     ball.bounceOff(box15) ;
   score = score + 2 ;
   box15.destroy();
   }
  if (ball.isTouching(box16) ) {
     ball.bounceOff(box16) ;
   score = score + 1 ;
   box16.destroy();
   }
  
if (gameState === "serve") { 
textSize(39);
stroke ("green");
fill ("green");
text("Press Enter to Serve", 30, 300);
  
    if (keyDown("enter")) 
  {ball.velocityY = 2 ; 
  ball.velocityX = 5;
    gameState = "play";
  }

  
  }
 
  if (gameState === "play"){
paddle.x = World.mouseX ;
 
 if (ball.isTouching(bottomEdge) || score === 24 ) {
  gameState = "end" ;}
  }
  
  
   if (gameState === "end"){
     textSize(35);
stroke ("red");
fill ("red");
text("GAME OVER", 100, 250);
  }
  
}
  