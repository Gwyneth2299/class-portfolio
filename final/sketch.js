/* Hit the Dot Kid-friendly version 
  Final Project
*/

var r, g, b;
var x, y;
var patX = 0;
var patY = 0;
var score = 0;
var time = 0;
var endtime = 200;
var gameOver = false;
var circleColor = 'white';
var redCircleClicked = false;

// image
function preload() {
  memeImage = loadImage('meme.jpg');
}

// refresh screen for interaction
function update() {
 // music.play();
  r = random(0, 100);
  g = random(0, 20);
  b = random(0, 200);
  x = random(0 , width);
  y = random(0 , height);

  //change ellipse color to red sometimes
  var c = random(1);
  if (c > 0.3) {
    circleColor = 'white';
    } else {
    circleColor = 'red';
  } 
}

function setup() {
  createCanvas(600, 450);
  update();
}

function draw() {
  background(r,g,b);
  fill(circleColor);
  ellipse(x ,y , 100);
  if (redCircleClicked) {
  image(memeImage, patX, patY, width, height);
   patX += random(-2, 2);
   //patY += random(-3, 0);
  textSize(40);
  fill('red');
  stroke(255);
  strokeWeight(6);
  textStyle(ITALIC); 
  textAlign(CENTER)
  text('Omae wa mou SHINDEIRU', width / 2, height - 300);
  }  

  // "try again" screen
  if (time >= endtime) {
  update();
  time = 0;
  }
  time ++;
}

function reset() {
  redCircleClicked = false;
  time = 0;
  score = 0;
  update();
}

function keyPressed() {
  if (keyCode == 13) { // Enter key
    reset();
  }
}

function mousePressed() {
  var d = dist(mouseX, mouseY, x, y);
  if (d < 50) {
     if (circleColor == 'white') {
      update();
    } else {
      redCircleClicked = true;
    }

  }

}


