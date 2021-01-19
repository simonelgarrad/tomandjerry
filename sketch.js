//bg stands for background
var bg,canvas;
var tom,jerry;
var catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/tomOne.png");
    mouseImg1=loadAnimation("images/jerryOne.png");

    catImg2=loadAnimation("images/tomTwo.png","images/tomThree.png")
    mouseImg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png")

    catImg3=loadAnimation("images/tomFour.png");
    mouseImg3=loadAnimation("images/jerryFour.png")

}

function setup(){
    canvas=createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry=createSprite(150,650,20,50);
    jerry.addAnimation(" jerrystanding",mouseImg1);
    
    jerry.scale=0.2;

    tom=createSprite(800,650,50,20);
    tom.addAnimation("tomsitting",catImg1);
    
    tom.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
 

    if(tom.x-jerry.x < jerry.width/2 - tom.width/2 ) {

        tom.velocityX=0;
        tom.addAnimation("tomLastImage", catImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", mouseImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown=== LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", catImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", mouseImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }

}
