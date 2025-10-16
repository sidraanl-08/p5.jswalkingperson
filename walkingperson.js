///variables for person's position
let pX = 200;
let pY = 300;

///variables for hand movement
let waving = false;


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("skyblue");

 ///adding movement with keyPressed function
if(keyIsDown(UP_ARROW)) pY -= 10;
if(keyIsDown(DOWN_ARROW)) pY += 10;
if(keyIsDown(RIGHT_ARROW)) pX += 10;
if(keyIsDown(LEFT_ARROW)) pX -= 10;

//using constrain to prevent figure going outside canvas
pX = constrain(pX, 20, width - 20);
pY = constrain(pY, 60, height - 30);

//arm movement
if (waving) {
  line(pX - 20, pY - 40, pX + 20, pY - 60); // hand up
} else {
  line(pX - 20, pY - 40, pX + 20, pY - 40); // normal arm
}


    ///calling all custom functions
    person();
    button(); 
}

///custom function for stick figure

function person () {
    //head
    fill("white");
    ellipse(pX, pY - 60, 20);

    //body
    line(pX, pY - 50, pX, pY);

    ///legs
    line(pX, pY, pX-15, pY+30);
    line(pX, pY, pX+15, pY+30);
}


function mousePressed() {
    waving = !waving;
}

function button () {
fill(255, 255, 200); 
stroke(0);
rect(10, 10, 180, 60, 10); 
fill(0);
textSize(12);
text("Use Arrow Keys to move", 20, 30);
text("Click mouse to wave hand", 20, 50);

}