/*
	self portrait v2
	by gwen
*/

// global scope
var x = 200; // statement


function setup() {

	createCanvas(640, 360);
}

function draw () {
	background('white');

  //Hair
  noStroke()
  fill(32, 19, 19);
  arc(x + 60, 270, 300, 460, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

  //Face 
  noStroke()
  fill('#ffcb9a');
  ellipse(x + 60, 210, 200, 260);

  //Ears
  arc(x - 50, 235, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  arc(x + 170, 235, 40, 60, 0, PI + PI, HALF_PI + PI);

  //Bang
  noStroke()
  fill(32, 19, 19);
  arc(x + 110, 130, 130, 105, 0, PI + HALF_PI, CHORD);
  arc(x - 20, 110, 140, 148, 0, 0.75 * Math.PI);
  arc(x - 5, 80, 180, 120, 0, 0.75 * Math.PI);

  //Eyebrows
  stroke(21, 19, 19);
  strokeWeight(3);
  noFill();
  arc(x + 10, 190, 45, 15, PI, TWO_PI, OPEN);
  arc(x + 110, 190, 45, 15, PI, TWO_PI, OPEN);

  //Eyeshadow
  stroke(62, 19, 19, 220);
  strokeWeight(6);
  arc(x + 7, 225, 55, 35, PI, TWO_PI, OPEN);
  arc(x + 115, 225, 55, 35, PI, TWO_PI, OPEN);

  //Eyes
  strokeWeight(1)
  fill(32, 19, 19);
  ellipse(x + 20, 225, 30, 30);
  ellipse(x + 125, 225, 30, 30);

  //Eyeballs
  noStroke()
  fill(255)
  ellipse(x + 17, 220, 8, 8);
  ellipse(x + 117, 220, 8, 8);

  //Nose
  fill('#fdbc85')
  triangle(x + 60, 230, x + 70, 280, x + 50, 280);

  //Mouth
  fill('#f28865');
  arc(x + 60, 298, 49, 35, 0, PI);

  //Hoodie
  rectMode(CENTER)
  fill(255, 153, 202)
  rect(x + 60, 470, 205, 150, 20);
  fill(255, 204, 229)
  triangle(x - 65, 435, x - 30, 360, x + 130, 470);
  triangle(x + 160, 380, x + 190, 460, x, 435);
  fill(255)
  ellipse(x + 100, 432, 15, 15);
  ellipse(x + 20, 432, 15, 15);
  rect(x + 100, 460, 8, 65, 20);
  rect(x + 20, 460, 8, 65, 20);


  //Neck
  fill('#ffcb9a')
  rect(x + 60, 350, 50, 55, 20);

}