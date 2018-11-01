
var obstacleCanvas = document.getElementById('obstacle');

var oCtx = obstacleCanvas.getContext('2d');


class Obstacle {
    constructor(obstacleImg, obstacleX, obstacleY, obstacleWidth, obstacleHeight) {
        this.image     = obstacleImg;
        this.x         = obstacleX;
        this.y         = obstacleY;
        this.width     = obstacleWidth;
        this.height    = obstacleHeight;
        this.isCrashed = false;
        this.speedX    = 0;
        this.speedY    = 0;
        this.naturalSpeedX = 3;
    }

    verDraw() {

        if(!skier.isCrashed){

            this.y -= this.speedY;
            this.x -= this.speedX; 
            if(this.y < -this.height){
                this.y = 1000;    
            }
        }

        oCtx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    horDraw(){

        if(!skier.isCrashed){
            this.x -= this.naturalSpeedX + this.speedX;
            this.y -= this.speedY;

            if(this.x < -this.width){
                this.x = 1500;    
            }
            if(this.y < -this.height){
                this.y = 1000;    
            }
        }
    
        oCtx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    flagDraw() {

        if(!skier.isCrashed){

            this.y -= this.speedY;
            this.x -= this.speedX; 
            if(this.y < -this.height){
                this.y = 1000;    
            }
        }

        oCtx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

}
    


//CREATING SKIER
var skierImg = new Image();
skierImg.src = "./images/skier_left.png";

var skier = {
            x: 750,
            y: 100,
        width: 35,
       height: 35,
    isCrashed: false,
    direction: "left",

    verDraw  : function() {

        oCtx.drawImage(skierImg, this.x, this.y, this.width, this.height);
    },
};

function changeSpeed(speedX,speedY) {
    for (var i = 0; i < allObstacles.length; i++){
        allObstacles[i].speedX = speedX;
        allObstacles[i].speedY = speedY;
    } 

    for (var i = 0; i < flags.length; i++){
        flags[i].speedX = speedX;
        flags[i].speedY = speedY;
    } 

    for (var i = 0; i < horObstacles.length; i++){
        horObstacles[i].speedX = speedX;
        horObstacles[i].speedY = speedY;
    } 


}


//CREATING NEW OBSTACLES

var treeImg = new Image();
treeImg.src = "./images/evergreen-tree.png";

var snowManImg = new Image();
snowManImg.src = "./images/snowman.png";

var rennaImg = new Image();
rennaImg.src = "./images/renna.png";

var tornadoImg = new Image();
tornadoImg.src = "./images/tornado.png";

var horObstacles =[
        //            (img    , x, y, wi, hei)
    new Obstacle(tornadoImg, 2000, 1550, 35, 40),
    new Obstacle(tornadoImg, 1230, 1500, 35, 40),
    new Obstacle(rennaImg, 530, 1800, 35, 40),
    new Obstacle(rennaImg, 1500, 1000, 35, 40),
];

var allObstacles = [
    //          (img    , x, y, wi, hei)
    // tree osbstacles right
    new Obstacle(treeImg, -35, 40, 35, 40 ),
    new Obstacle(treeImg, -35, 120, 35, 40),
    new Obstacle(treeImg, -35, 200, 35, 40),
    new Obstacle(treeImg, -35, 280, 35, 40),
    new Obstacle(treeImg, -35, 360, 35, 40),
    new Obstacle(treeImg, -35, 440, 35, 40),
    new Obstacle(treeImg, -35, 520, 35, 40),
    new Obstacle(treeImg, -35, 600, 35, 40),
    new Obstacle(treeImg, -35, 680, 35, 40),
    new Obstacle(treeImg, -35, 760, 35, 40),
    new Obstacle(treeImg, -35, 840, 35, 40),
    new Obstacle(treeImg, -35, 920, 35, 40),
    new Obstacle(treeImg, -35, 1000, 35, 40),
    new Obstacle(treeImg, -35, 1080, 35, 40),

    new Obstacle(treeImg, -75, 0, 35, 40),
    new Obstacle(treeImg, -75,  80, 35, 40),
    new Obstacle(treeImg, -75, 160, 35, 40),
    new Obstacle(treeImg, -75, 240, 35, 40),
    new Obstacle(treeImg, -75, 320, 35, 40),
    new Obstacle(treeImg, -75, 400, 35, 40),
    new Obstacle(treeImg, -75, 480, 35, 40),
    new Obstacle(treeImg, -75, 560, 35, 40),
    new Obstacle(treeImg, -75, 640, 35, 40),
    new Obstacle(treeImg, -75, 720, 35, 40),
    new Obstacle(treeImg, -75, 800, 35, 40),
    new Obstacle(treeImg, -75, 880, 35, 40),
    new Obstacle(treeImg, -75, 960, 35, 40),

    new Obstacle(treeImg, -100, 40, 35, 40 ),
    new Obstacle(treeImg, -100, 120, 35, 40),
    new Obstacle(treeImg, -100, 200, 35, 40),
    new Obstacle(treeImg, -100, 280, 35, 40),
    new Obstacle(treeImg, -100, 360, 35, 40),
    new Obstacle(treeImg, -100, 440, 35, 40),
    new Obstacle(treeImg, -100, 520, 35, 40),
    new Obstacle(treeImg, -100, 600, 35, 40),
    new Obstacle(treeImg, -100, 680, 35, 40),
    new Obstacle(treeImg, -100, 760, 35, 40),
    new Obstacle(treeImg, -100, 840, 35, 40),
    new Obstacle(treeImg, -100, 920, 35, 40),
    new Obstacle(treeImg, -100, 1000, 35, 40),
    new Obstacle(treeImg, -100, 1080, 35, 40),
    
        //          (img    , x, y, wi, hei)
    // tree osbstacles left
    new Obstacle(treeImg, 1500, 40, 35, 40 ),
    new Obstacle(treeImg, 1500, 120, 35, 40),
    new Obstacle(treeImg, 1500, 200, 35, 40),
    new Obstacle(treeImg, 1500, 280, 35, 40),
    new Obstacle(treeImg, 1500, 360, 35, 40),
    new Obstacle(treeImg, 1500, 440, 35, 40),
    new Obstacle(treeImg, 1500, 520, 35, 40),
    new Obstacle(treeImg, 1500, 600, 35, 40),
    new Obstacle(treeImg, 1500, 680, 35, 40),
    new Obstacle(treeImg, 1500, 760, 35, 40),
    new Obstacle(treeImg, 1500, 840, 35, 40),
    new Obstacle(treeImg, 1500, 920, 35, 40),
    new Obstacle(treeImg, 1500, 1000, 35, 40),
    new Obstacle(treeImg, 1500, 1080, 35, 40),

    new Obstacle(treeImg, 1535, 0, 35, 40),
    new Obstacle(treeImg, 1535,  80, 35, 40),
    new Obstacle(treeImg, 1535, 160, 35, 40),
    new Obstacle(treeImg, 1535, 240, 35, 40),
    new Obstacle(treeImg, 1535, 320, 35, 40),
    new Obstacle(treeImg, 1535, 400, 35, 40),
    new Obstacle(treeImg, 1535, 480, 35, 40),
    new Obstacle(treeImg, 1535, 560, 35, 40),
    new Obstacle(treeImg, 1535, 640, 35, 40),
    new Obstacle(treeImg, 1535, 720, 35, 40),
    new Obstacle(treeImg, 1535, 800, 35, 40),
    new Obstacle(treeImg, 1535, 880, 35, 40),
    new Obstacle(treeImg, 1535, 960, 35, 40),

    new Obstacle(treeImg, 1570, 40, 35, 40 ),
    new Obstacle(treeImg, 1570, 120, 35, 40),
    new Obstacle(treeImg, 1570, 200, 35, 40),
    new Obstacle(treeImg, 1570, 280, 35, 40),
    new Obstacle(treeImg, 1570, 360, 35, 40),
    new Obstacle(treeImg, 1570, 440, 35, 40),
    new Obstacle(treeImg, 1570, 520, 35, 40),
    new Obstacle(treeImg, 1570, 600, 35, 40),
    new Obstacle(treeImg, 1570, 680, 35, 40),
    new Obstacle(treeImg, 1570, 760, 35, 40),
    new Obstacle(treeImg, 1570, 840, 35, 40),
    new Obstacle(treeImg, 1570, 920, 35, 40),
    new Obstacle(treeImg, 1570, 1000, 35, 40),
    new Obstacle(treeImg, 1570, 1080, 35, 40),

        //          (img    , x, y, wi, hei)
    new Obstacle(treeImg, 333, 40, 35, 40 ),
    new Obstacle(treeImg, 1340, 120, 35, 40),
    new Obstacle(treeImg, 859, 200, 35, 40),
    new Obstacle(treeImg, 350, 280, 35, 40),
    new Obstacle(treeImg, 1200, 360, 35, 40),
    new Obstacle(treeImg, 678, 440, 35, 40),
    new Obstacle(treeImg, 890, 520, 35, 40),

    new Obstacle(treeImg, 50, 900, 35, 40 ),
    new Obstacle(treeImg, 100, 450, 35, 40 ),
    new Obstacle(treeImg, 500, 300, 35, 40),
    new Obstacle(treeImg, 600, 400, 35, 40),
    new Obstacle(treeImg, 810,300, 35, 40),
    new Obstacle(treeImg, 120, 120, 35, 40),
    new Obstacle(treeImg, 570, 800, 35, 40),
    new Obstacle(treeImg, 1360, 900, 35, 40),
    new Obstacle(treeImg, 1190,1000, 35, 40),
    new Obstacle(treeImg, 1200, 451, 35, 40),

    new Obstacle(snowManImg, 222, 300, 25, 28),
    new Obstacle(snowManImg, 822, 1420, 25, 28),
    new Obstacle(snowManImg, 1000, 1230, 25, 28),
    new Obstacle(snowManImg, 1110, 1000, 25, 28),
];

var flagImg = new Image();
flagImg.src = "./images/bandiera.png";

var flags = [
    new Obstacle(flagImg, 400, 500, 30, 35),
    new Obstacle(flagImg, 500, 500, 30, 35),

    new Obstacle(flagImg, 1300, 1650, 30, 35),
    new Obstacle(flagImg, 1400, 1650, 30, 35),
];


var gameOver = {
    opacity: 0,
    drawMe: function(){
        this.opacity += 0.01;
        oCtx.globalAlpha = this.opacity;
        oCtx.font = "bold 70px monospace"

        var size = oCtx.measureText("Game Over");
        var gameOverX = (obstacleCanvas.width / 2) - (size.width / 2);
    
        oCtx.fillStyle = "tomato";
        oCtx.fillText("Game Over", gameOverX, 300); // can I write "height/2"?

        oCtx.lineWidth = 3;
        oCtx.strokeText("Game Over", gameOverX, 300);
        oCtx.font = "40px monospace"
        var size = oCtx.measureText("Press cmd + R or control + R to start regain");
        oCtx.fillText(
            "Press cmd + R or control + R to start regain",
            (obstacleCanvas.width / 2) - (size.width / 2) ,
            390
        );
    
    
        oCtx.globalAlpha = 1;

        // INSERT BUTTON TO Start From SKretch
    }
};

drawingLoop();

//keydown event handler
document.onkeydown = function () {
    if(skier.isCrashed){
        // exit the function without moving is skier has Crashed
        return ;
    }
    switch (event.keyCode){
        case 37: // left arrow
        event.preventDefault();
        changeSpeed(0,0);
        if(skier.direction === "down"){
            skier.direction = "half-left";
            changeSpeed(-4,2);
            skierImg.src = "./images/skier_half_left.png";
            
        } else if (skier.direction === "half-left"){
            skier.direction = "left";
            changeSpeed(0,0); 
            skierImg.src = "./images/skier_left.png";
        
        } else if(skier.direction === "left"){
            skier.direction = "left";
            changeSpeed(0,0);
            skier.x -= 10;
            skierImg.src = "./images/skier_left.png";

        } else if (skier.direction === "right") {
            skier.direction = "half-right";
            // changeSpeed(x,y)
            changeSpeed(4,2);
            skierImg.src = "./images/skier_half_right.png";

        } else if (skier.direction === "half-right") {
            skier.direction = "down";
            // changeSpeed(x,y)
            changeSpeed(0,5);
            skierImg.src = "./images/skier_down.png";
        }
        break;

        case 38:  // up arrow

        //fix bug here
        event.preventDefault();
        skier.y -= 10;
        break;

        case 39:  // right arrow
        event.preventDefault();
        if(skier.direction === "down"){
            skier.direction = "half-right";
            // changeSpeed(x,y)
            changeSpeed(4,2);
            skierImg.src = "./images/skier_half_right.png";
            
        } else if (skier.direction === "half-right"){
            skier.direction = "right";
            changeSpeed(0,0); 
            skierImg.src = "./images/skier_right.png";

        } else if (skier.direction === "right") {
            skier.direction = "right";
            changeSpeed(0,0);
            skier.x -= -10;
            skierImg.src = "./images/skier_right.png";

        } else if (skier.direction === "left") {
            skier.direction = "half-left";
            changeSpeed(-4,2);
            skierImg.src = "./images/skier_half_left.png";

        } else if (skier.direction === "half-left") {
            skier.direction = "down";
            changeSpeed(0,5);
            skierImg.src = "./images/skier_down.png";
        }
        break;

        case 40:  // down arrow
        event.preventDefault();
        skier.direction = "down";
        changeSpeed(0,5);
        skierImg.src = "./images/skier_down.png";
        break;
    }
};

function drawingLoop() {

    oCtx.clearRect(0, 0, 1500, 2000);

        drawEverything();
    
        requestAnimationFrame(function(){
            drawingLoop();
        });
}
    

function drawEverything() {
    
    // draw skier
    skier.verDraw();

    
    allObstacles.forEach(function(oneObstacle){
            
         oneObstacle.verDraw();

    
        if(rectangleCollision(skier, oneObstacle)){
            skier.isCrashed = true;
            oneObstacle.isCrashed = true;
        }
    
        if(skier.isCrashed){
            gameOver.drawMe();
        }
    });
        // //draw pipes
        // pipe1.drawMe();
    
        // if(rectangleCollision(celine, pipe1)){
        //     celine.isCrashed = true;
        //     pipe1.isCrashed = true;
        // }
    
    horObstacles.forEach(function(oneObstacle){
                    
        oneObstacle.horDraw();
        
        if(rectangleCollision(skier, oneObstacle)){
            skier.isCrashed = true;
            oneObstacle.isCrashed = true;
        }
        
        if(skier.isCrashed){
            gameOver.drawMe();
        }
    });  

    flags.forEach(function(oneFlag){
                    
            oneFlag.flagDraw();
            
            if(rectangleCollision(skier, oneFlag)){
                // skier.isCrashed = true;
                // oneFlag.isCrashed = true;
            }
            
        if(skier.isCrashed){
            gameOver.drawMe();
        }
    });

}



function rectangleCollision(rectA, rectB) {
    return rectA.y + rectA.height >= rectB.y
    &&     rectA.y <= rectB.y + rectB.height
    &&     rectA.x + rectA.width >= rectB.x
    &&     rectA.x <= rectB.x + rectB.width;
}
