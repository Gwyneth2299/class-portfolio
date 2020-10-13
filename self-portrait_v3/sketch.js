/*
	self portrait v3
	by gwen
*/

// global scope
var x; // statement
var y = 200;

let r;
let g;
let b;


let col = {
  r: 218,
  g: 47,
  b: 67,
}


function setup() {
	createCanvas(640, 360)
   x = width - 380;
}

function draw () {
	

  stroke(mouseX, 0, mouseY);
  strokeWeight(30);
  point(mouseX-5, mouseY-5);
  point(mouseX*-1+640, mouseY-5);
  point(mouseX*-1+640, mouseY*-1+360);
  point(mouseX-5, mouseY*-1+360);


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
  arc(x - 20, y -90, 140, 148, 0, 0.75 * Math.PI);
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
  var mx = map(mouseX, 0, width, -20, 0);
  ellipse(x + 20 + mx, y + 25, 30, 30);
  ellipse(x + 125 + mx, y + 25, 30, 30);

  //Highlight
  noStroke()
  fill(255)
  ellipse(x + 17 + mx, y + 20, 8, 8);
  ellipse(x + 121 + mx, y + 20, 8, 8);

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

  // text
  textSize(30);
  fill('plum');
  stroke(255);
  strokeWeight(2); 
  textAlign(CENTER)
  text('Move the mouse to paint her background', width / 2, height - 300);
  textSize(20);
  text('(Beware, she is watching)', width / 2, height - 270);

}