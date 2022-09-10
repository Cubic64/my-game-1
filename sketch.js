var bgImg,coin,playerImg,player2Img,player3Img,border,borderImg;
var player,coin;


function preload(){

  coinImg = loadImage("./assets/coin.png");
  bgImg =loadImage("./assets/background img.jfif");
  playerImg = loadImage("./assets/mario 2.2.png");
  player2Img = loadImage("./assets/mario 1.2.png");
  player3Img = loadImage("./assets/mario 1.2.2.png");
  borderImg = loadImage("./assets/border.png");
 
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2+80,displayHeight/2,30,20)
bg.addImage(bgImg)
bg.scale = 5.3
  

//creating the player sprite
player = createSprite(displayWidth-1280, displayHeight-250, 50, 50);
 player.addImage(playerImg)
   player.scale = 0.5

   coin = createSprite(displayWidth-1000, displayHeight-255, 50, 50);
   coin.addImage(coinImg)
   coin.scale = 0.4

   border = createSprite(displayWidth+160, displayHeight-255, 50, 50);
   border.addImage(borderImg)
   border.scale = 0.4
  //player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   //player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 
  player.addImage(playerImg);

  if(player.isTouching(border)){
     player.destroy();
     console.log("bruhhhh");
  };



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-5
 player.addImage(player3Img);
  //player.addImage(left);
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = player.x+5
 player.addImage(player2Img);
 //player.addImage(right);
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(playerImg)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyDown("space")){
  player.addImage( playerImg )
 // player.addImage()
 // player.addImage(shooterImg)
 //player.addImage(shooter_1.png)

}

drawSprites();

}
