/*
	self portrait v1
	by gwen
*/

function setup() {

	createCanvas(640, 360);
}

function draw () {
	background('white');

  //Hair
  noStroke()
  fill(32, 19, 19);
  arc(260, 270, 300, 460, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

  //Face 
  noStroke()
  fill('#ffcb9a');
  ellipse(260, 210, 200, 260);

  //Ears
  arc(150, 235, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  arc(370, 235, 40, 60, 0, PI + PI, HALF_PI + PI);

  //Bang
  noStroke()
  fill(32, 19, 19);
  arc(310, 130, 130, 105, 0, PI + HALF_PI, CHORD);
  arc(180, 110, 140, 148, 0, 0.75 * Math.PI);
  arc(195, 80, 180, 120, 0, 0.75 * Math.PI);

  //Eyebrows
  stroke(21, 19, 19);
  strokeWeight(3);
  noFill();
  arc(210, 190, 45, 15, PI, TWO_PI, OPEN);
  arc(310, 190, 45, 15, PI, TWO_PI, OPEN);

  //Eyeshadow
  stroke(62, 19, 19, 220);
  strokeWeight(6);
  arc(207, 225, 55, 35, PI, TWO_PI, OPEN);
  arc(315, 225, 55, 35, PI, TWO_PI, OPEN);

  //Eyes
  strokeWeight(1)
  fill(32, 19, 19);
  ellipse(220, 225, 30, 30);
  ellipse(325, 225, 30, 30);

  //Highlight
  noStroke()
  fill(255)
  ellipse(217, 220, 8, 8);
  ellipse(321, 220, 8, 8);

  //Nose
  fill('#fdbc85')
  triangle(260, 230, 270, 280, 250, 280);

  //Mouth
  fill('#f28865');
  arc(260, 298, 49, 35, 0, PI);

  //Neck
  rectMode(CENTER)
  fill('#ffcb9a')
  rect(260, 350, 50, 55, 20);

}