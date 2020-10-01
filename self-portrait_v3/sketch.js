/*
	self portrait v2
	by gwen
*/

// global scope
var x = 200; // statement
var y = 200;

let r;
let g;
let b;

let spot = {
  x: 50,
  y: 50,
  size: 20
};

let extraCanvas;

function setup() {

	createCanvas(640, 360);
}

function draw () {
	background('white');

    //mouse circle
  fill(255, 192, 203, 70)
  noStroke();
  circle(mouseX, mouseY, 50)

   // //call extraCanvas to appear
  // image(extraCanvas, 0, 0);

  //bg dots
  spot.x = random(0, width);
  spot.y = random(0, 350);
  spot.size = random(5, 80);
  col.r = random(111, 59);
  col.g = random(72, 15);
  col.b = random(209, 166);
  fill(col.r, col.g, col.b);
  noStroke();
  // extraCanvas.circle(spot.x, spot.y, spot.size);
  circle(spot.x, spot.y, spot.size);

  //Hair
  noStroke()
  fill(32, 19, 19);
  arc(x + 60, y + 70, 300, 460, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

  //Face 
  noStroke()
  fill('#ffcb9a');
  ellipse(x + 60, y + 10, 200, 260);

  //Ears
  arc(x - 50, y + 35, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  arc(x + 170, y + 35, 40, 60, 0, PI + PI, HALF_PI + PI);

  //Bang
  noStroke()
  fill(32, 19, 19);
  arc(x + 110, y - 70, 130, 105, 0, PI + HALF_PI, CHORD);
  arc(x - 20, y - 90, 140, 148, 0, 0.75 * Math.PI);
  arc(x - 5, y - 120, 180, 120, 0, 0.75 * Math.PI);

  //Eyebrows
  stroke(21, 19, 19);
  strokeWeight(3);
  noFill();
  arc(x + 10, y - 10, 45, 15, PI, TWO_PI, OPEN);
  arc(x + 110, y - 10, 45, 15, PI, TWO_PI, OPEN);

  //Eyeshadow
  stroke(62, 19, 19, 220);
  strokeWeight(6);
  arc(x + 7, y + 25, 55, 35, PI, TWO_PI, OPEN);
  arc(x + 115, y + 25, 55, 35, PI, TWO_PI, OPEN);

  //Eyes
  strokeWeight(1)
  fill(32, 19, 19);
  ellipse(x + 20, y + 25, 30, 30);
  ellipse(x + 125, y + 25, 30, 30);

  //Eyeballs
  noStroke()
  fill(255)
  ellipse(x + 17, y + 20, 8, 8);
  ellipse(x + 117, y + 20, 8, 8);

  //Nose
  fill('#fdbc85')
  triangle(x + 60, y + 30, x + 70, y + 80, x + 50, y + 80);

  //Mouth
  fill('#f28865');
  arc(x + 60, y + 98, 49, 35, 0, PI);


  //Neck
  rectMode(CENTER)
  fill('#ffcb9a')
  rect(x + 60, y + 150, 50, 55, 20);

}