/* Hit the Dot Kid-friendly version 
  Final Project
*/

var r, g, b;
var x, y;
var score = 0;
var time = 0;
var endtime = 600;
var gameOver = false;
var circleColor = 'white';
//var music;
//var endmusic;

// image
function preload() {
  memeImage = loadImage('meme.jpg');
  /* music = loadSound('ding.mp3');                       //input music
  endmusic = loadSound('buzzer.wav');
  */
  }


// refresh screen for interaction
function update() {
 // music.play();
  r = random(0, 100);
  g = random(0, 20);
  b = random(0, 200);
  x = random(0 , width);
  y = random(0 , height);
}

function setup() {
  createCanvas(600, 450);
  update();
}

function draw() {
  background(r,g,b);
  ellipse(x ,y , 100);

  // "try again" screen
  if (time >= endtime) {
  textSize(20);
  fill('white');
  text("Score: " + score, 10, 100);
  text("Press the ENTER key to try again!", 10, 60); 
  }
  if (!gameOver) {
  /*image(memeImage, x, y, width, height);
   x += random(-3, 3);
   y += random(-3, 3);
  textSize(50);
  fill('red');                                                  -image for meme patrick attempt-
  stroke(255);
  strokeWeight(10);
  textStyle(ITALIC); 
  textAlign(CENTER)
  text('Omae wa mou SHINDEIRU', width / 2, height - 300);
  */
  gameOver = true;
  } else {
  time ++;
  }
  textSize(20);
  fill('white');
  text("Time: " + time + "/"+ endtime, 10,30);
}

function reset() {
  gameOver = false;
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
     if (time < endtime) {
      update();
      score ++;
    } else {
      reset();
    } 
  var r = random(1);
  if (r > 0.5) {
    circleColor = 'white';
    } else {
    circleColor = 'red';
  } 
  }

}


