
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
                this.y = 1900;    
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
                this.y = 1900;    
            }
        }
    
        oCtx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    flagDraw() {

        if(!skier.isCrashed){

            this.y -= this.speedY;
            this.x -= this.speedX; 
            if(this.y < -this.height){
                this.y = 1900;    
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

    for (var i = 0; i < christmasTree.length; i++){
        christmasTree[i].speedX = speedX;
        christmasTree[i].speedY = speedY;
    } 


}


//CREATING NEW OBSTACLES

var christmasTreeImg = new Image();
christmasTreeImg.src = "./images/christmas_tree.png";

var christmasTree =[

    new Obstacle(christmasTreeImg, 1200, 451, 33, 40),
    new Obstacle(christmasTreeImg, 90, 1691, 33, 40),
];

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
    new Obstacle(tornadoImg, 2700, 1050, 70, 80),
    new Obstacle(tornadoImg, 1800, 1800, 70, 80),
    new Obstacle(rennaImg, 1500, 700, 30, 30),
    new Obstacle(rennaImg, 1900, 1400, 30, 30),
];

var allObstacles = [
    //          (img    , x, y, wi, hei)
    // tree osbstacles left
    new Obstacle(treeImg, -33,  40, 33, 40),
    new Obstacle(treeImg, -33, 120, 33, 40),
    new Obstacle(treeImg, -33, 200, 33, 40),
    new Obstacle(treeImg, -33, 280, 33, 40),
    new Obstacle(treeImg, -33, 360, 33, 40),
    new Obstacle(treeImg, -33, 440, 33, 40),
    new Obstacle(treeImg, -33, 520, 33, 40),
    new Obstacle(treeImg, -33, 600, 33, 40),
    new Obstacle(treeImg, -33, 680, 33, 40),
    new Obstacle(treeImg, -33, 760, 33, 40),
    new Obstacle(treeImg, -33, 840, 33, 40),
    new Obstacle(treeImg, -33, 920, 33, 40),
    new Obstacle(treeImg, -33, 1000, 33, 40),
    new Obstacle(treeImg, -33, 1080, 33, 40),
    new Obstacle(treeImg, -33, 1160, 33, 40),
    new Obstacle(treeImg, -33, 1240, 33, 40),
    new Obstacle(treeImg, -33, 1320, 33, 40),
    new Obstacle(treeImg, -33, 1400, 33, 40),
    new Obstacle(treeImg, -33, 1480, 33, 40),
    new Obstacle(treeImg, -33, 1560, 33, 40),
    new Obstacle(treeImg, -33, 1640, 33, 40),
    new Obstacle(treeImg, -33, 1720, 33, 40),
    new Obstacle(treeImg, -33, 1800, 33, 40),
    new Obstacle(treeImg, -33, 1880, 33, 40),
    new Obstacle(treeImg, -33, 1960, 33, 40),

    new Obstacle(treeImg, -66,   0, 33, 40),
    new Obstacle(treeImg, -66,  80, 33, 40),
    new Obstacle(treeImg, -66, 160, 33, 40),
    new Obstacle(treeImg, -66, 240, 33, 40),
    new Obstacle(treeImg, -66, 320, 33, 40),
    new Obstacle(treeImg, -66, 400, 33, 40),
    new Obstacle(treeImg, -66, 480, 33, 40),
    new Obstacle(treeImg, -66, 560, 33, 40),
    new Obstacle(treeImg, -66, 640, 33, 40),
    new Obstacle(treeImg, -66, 720, 33, 40),
    new Obstacle(treeImg, -66, 800, 33, 40),
    new Obstacle(treeImg, -66, 880, 33, 40),
    new Obstacle(treeImg, -66, 960, 33, 40),
    new Obstacle(treeImg, -66, 1040, 33, 40),
    new Obstacle(treeImg, -66, 1120, 33, 40),
    new Obstacle(treeImg, -66, 1200, 33, 40),
    new Obstacle(treeImg, -66, 1280, 33, 40),
    new Obstacle(treeImg, -66, 1360, 33, 40),
    new Obstacle(treeImg, -66, 1440, 33, 40),
    new Obstacle(treeImg, -66, 1520, 33, 40),
    new Obstacle(treeImg, -66, 1600, 33, 40),
    new Obstacle(treeImg, -66, 1680, 33, 40),
    new Obstacle(treeImg, -66, 1760, 33, 40),
    new Obstacle(treeImg, -66, 1840, 33, 40),
    new Obstacle(treeImg, -66, 1920, 33, 40),
    new Obstacle(treeImg, -66, 2000, 33, 40),

    new Obstacle(treeImg, -99,  40, 33, 40),
    new Obstacle(treeImg, -99, 120, 33, 40),
    new Obstacle(treeImg, -99, 200, 33, 40),
    new Obstacle(treeImg, -99, 280, 33, 40),
    new Obstacle(treeImg, -99, 360, 33, 40),
    new Obstacle(treeImg, -99, 440, 33, 40),
    new Obstacle(treeImg, -99, 520, 33, 40),
    new Obstacle(treeImg, -99, 600, 33, 40),
    new Obstacle(treeImg, -99, 680, 33, 40),
    new Obstacle(treeImg, -99, 760, 33, 40),
    new Obstacle(treeImg, -99, 840, 33, 40),
    new Obstacle(treeImg, -99, 920, 33, 40),
    new Obstacle(treeImg, -99, 1000, 33, 40),
    new Obstacle(treeImg, -99, 1080, 33, 40),
    new Obstacle(treeImg, -99, 1160, 33, 40),
    new Obstacle(treeImg, -99, 1240, 33, 40),
    new Obstacle(treeImg, -99, 1320, 33, 40),
    new Obstacle(treeImg, -99, 1400, 33, 40),
    new Obstacle(treeImg, -99, 1480, 33, 40),
    new Obstacle(treeImg, -99, 1560, 33, 40),
    new Obstacle(treeImg, -99, 1640, 33, 40),
    new Obstacle(treeImg, -99, 1720, 33, 40),
    new Obstacle(treeImg, -99, 1800, 33, 40),
    new Obstacle(treeImg, -99, 1880, 33, 40),
    new Obstacle(treeImg, -99, 1960, 33, 40),
    
        //          (img    , x, y, wi, hei)
    // tree osbstacles right
    new Obstacle(treeImg, 1500,  40, 33, 40),
    new Obstacle(treeImg, 1500, 120, 33, 40),
    new Obstacle(treeImg, 1500, 200, 33, 40),
    new Obstacle(treeImg, 1500, 280, 33, 40),
    new Obstacle(treeImg, 1500, 360, 33, 40),
    new Obstacle(treeImg, 1500, 440, 33, 40),
    new Obstacle(treeImg, 1500, 520, 33, 40),
    new Obstacle(treeImg, 1500, 600, 33, 40),
    new Obstacle(treeImg, 1500, 680, 33, 40),
    new Obstacle(treeImg, 1500, 760, 33, 40),
    new Obstacle(treeImg, 1500, 840, 33, 40),
    new Obstacle(treeImg, 1500, 920, 33, 40),
    new Obstacle(treeImg, 1500, 1000, 33, 40),
    new Obstacle(treeImg, 1500, 1080, 33, 40),
    new Obstacle(treeImg, 1500, 1160, 33, 40),
    new Obstacle(treeImg, 1500, 1240, 33, 40),
    new Obstacle(treeImg, 1500, 1320, 33, 40),
    new Obstacle(treeImg, 1500, 1400, 33, 40),
    new Obstacle(treeImg, 1500, 1480, 33, 40),
    new Obstacle(treeImg, 1500, 1560, 33, 40),
    new Obstacle(treeImg, 1500, 1640, 33, 40),
    new Obstacle(treeImg, 1500, 1720, 33, 40),
    new Obstacle(treeImg, 1500, 1800, 33, 40),
    new Obstacle(treeImg, 1500, 1880, 33, 40),
    new Obstacle(treeImg, 1500, 1960, 33, 40),

    new Obstacle(treeImg, 1533,   0, 33, 40),
    new Obstacle(treeImg, 1533,  80, 33, 40),
    new Obstacle(treeImg, 1533, 160, 33, 40),
    new Obstacle(treeImg, 1533, 240, 33, 40),
    new Obstacle(treeImg, 1533, 320, 33, 40),
    new Obstacle(treeImg, 1533, 400, 33, 40),
    new Obstacle(treeImg, 1533, 480, 33, 40),
    new Obstacle(treeImg, 1533, 560, 33, 40),
    new Obstacle(treeImg, 1533, 640, 33, 40),
    new Obstacle(treeImg, 1533, 720, 33, 40),
    new Obstacle(treeImg, 1533, 800, 33, 40),
    new Obstacle(treeImg, 1533, 880, 33, 40),
    new Obstacle(treeImg, 1533, 960, 33, 40),
    new Obstacle(treeImg, 1533, 1040, 33, 40),
    new Obstacle(treeImg, 1533, 1120, 33, 40),
    new Obstacle(treeImg, 1533, 1200, 33, 40),
    new Obstacle(treeImg, 1533, 1280, 33, 40),
    new Obstacle(treeImg, 1533, 1360, 33, 40),
    new Obstacle(treeImg, 1533, 1440, 33, 40),
    new Obstacle(treeImg, 1533, 1520, 33, 40),
    new Obstacle(treeImg, 1533, 1600, 33, 40),
    new Obstacle(treeImg, 1533, 1680, 33, 40),
    new Obstacle(treeImg, 1533, 1760, 33, 40),
    new Obstacle(treeImg, 1533, 1840, 33, 40),
    new Obstacle(treeImg, 1533, 1920, 33, 40),
    new Obstacle(treeImg, 1533, 2000, 33, 40),

    new Obstacle(treeImg, 1566,  40, 33, 40),
    new Obstacle(treeImg, 1566, 120, 33, 40),
    new Obstacle(treeImg, 1566, 200, 33, 40),
    new Obstacle(treeImg, 1566, 280, 33, 40),
    new Obstacle(treeImg, 1566, 360, 33, 40),
    new Obstacle(treeImg, 1566, 440, 33, 40),
    new Obstacle(treeImg, 1566, 520, 33, 40),
    new Obstacle(treeImg, 1566, 600, 33, 40),
    new Obstacle(treeImg, 1566, 680, 33, 40),
    new Obstacle(treeImg, 1566, 760, 33, 40),
    new Obstacle(treeImg, 1566, 840, 33, 40),
    new Obstacle(treeImg, 1566, 920, 33, 40),
    new Obstacle(treeImg, 1566, 1000, 33, 40),
    new Obstacle(treeImg, 1566, 1080, 33, 40),
    new Obstacle(treeImg, 1566, 1160, 33, 40),
    new Obstacle(treeImg, 1566, 1240, 33, 40),
    new Obstacle(treeImg, 1566, 1320, 33, 40),
    new Obstacle(treeImg, 1566, 1400, 33, 40),
    new Obstacle(treeImg, 1566, 1480, 33, 40),
    new Obstacle(treeImg, 1566, 1560, 33, 40),
    new Obstacle(treeImg, 1566, 1640, 33, 40),
    new Obstacle(treeImg, 1566, 1720, 33, 40),
    new Obstacle(treeImg, 1566, 1800, 33, 40),
    new Obstacle(treeImg, 1566, 1880, 33, 40),
    new Obstacle(treeImg, 1566, 1960, 33, 40),

        //          (img    , x, y, wi, hei)
    new Obstacle(treeImg, 333,   40, 33, 40),
    new Obstacle(treeImg, 1340, 120, 33, 40),
    new Obstacle(treeImg, 859,  200, 33, 40),
    new Obstacle(treeImg, 350,  280, 33, 40),
    new Obstacle(treeImg, 1200, 360, 33, 40),
    new Obstacle(treeImg, 678,  440, 33, 40),
    new Obstacle(treeImg, 890,  520, 33, 40),

    new Obstacle(treeImg,   50,  900, 33, 40),
    new Obstacle(treeImg,  100,  450, 33, 40),
    new Obstacle(treeImg,  500,  300, 33, 40),
    new Obstacle(treeImg,  600,  400, 33, 40),
    new Obstacle(treeImg,  810,  300, 33, 40),
    new Obstacle(treeImg,  120,  120, 33, 40),
    new Obstacle(treeImg,  570,  800, 33, 40),
    new Obstacle(treeImg, 1360,  900, 33, 40),
    new Obstacle(treeImg, 1190, 1000, 33, 40),
    new Obstacle(treeImg, 1200,  451, 33, 40),

    new Obstacle(snowManImg,  222,  387, 20, 20),
    new Obstacle(snowManImg,  922, 1420, 20, 20),
    new Obstacle(snowManImg, 1000, 1230, 20, 20),
    new Obstacle(snowManImg, 1110, 1000, 20, 20),
    new Obstacle(snowManImg, 757,  1682, 20, 20),
];

var flagImg = new Image();
flagImg.src = "./images/bandiera_right.png";

var flagLeftImg = new Image();
flagLeftImg.src = "./images/bandiera_left.png";

var flags = [
    new Obstacle(flagLeftImg, 300, 570, 30, 30),
    new Obstacle(flagImg, 400, 570, 30, 30),

    new Obstacle(flagLeftImg, 1100, 1370, 30, 30),
    new Obstacle(flagImg, 1200, 1370, 30, 30),

    new Obstacle(flagLeftImg, 700, 100, 30, 30),
    new Obstacle(flagImg, 800, 100, 30, 30),
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
        if(skier.y < 0){
            skier.y= 0
        }
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
    
// declaring how many flags I taken
var flagsTaken = 0;




function drawEverything() {
    
    // draw skier
    skier.verDraw();

    var scoresPanel = document.querySelector("span");
    scoresPanel.innerHTML = flagsTaken;

    // YETI EXIT
    var yetiExit = document.querySelector(".yeti");

    if(flagsTaken >= 20){
        gameOver.drawMe();

        yetiExit.style.display = "block";
    };
    
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

    //flags taken
    flags.forEach(function(oneFlag){
                    
        oneFlag.flagDraw();
            
        if(!oneFlag.isCrashed && rectangleCollision(skier, oneFlag)){
            oneFlag.isCrashed = true;
            flagsTaken++;
            console.log(flagsTaken);

            setTimeout(function(){
                oneFlag.isCrashed=false
            }, 2000)

        }
        

        // if(oneFlag.isCrashed){
        //     flagsTaken++;
        // }
    });

    //CHRISTMASTREE BECOME FLAG
    christmasTree.forEach(function(cTree){
                    
        cTree.verDraw();
        
        if(christmasTreeCollision(skier, cTree)){
            skier.isCrashed = true;
            cTree.isCrashed = true;
        }
        
        if(cTree === true){
            flagImg.verDraw();

        }

    });


}



function rectangleCollision(rectA, rectB) {
    return rectA.y + rectA.height >= rectB.y
    &&     rectA.y <= rectB.y + rectB.height
    &&     rectA.x + rectA.width >= rectB.x
    &&     rectA.x <= rectB.x + rectB.width;
}

// function halfRectCollision(rectA, rectB) {
//     return rectA.y + rectA.height >= rectB.y
//     &&     rectA.y <= rectB.y + rectB.height
//     &&     rectA.x + rectA.width >= rectB.x
//     &&     rectA.x <= rectB.x + rectB.width;
// }

function christmasTreeCollision(rectA, rectB) {
    return rectA.y + rectA.height >= rectB.y
    &&     rectA.y <= rectB.y + rectB.height
    &&     rectA.x + rectA.width >= rectB.x
    &&     rectA.x <= rectB.x + rectB.width;
}
