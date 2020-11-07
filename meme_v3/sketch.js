/*
	meme v1
	by Gwen
	text + images
*/


var x = 0;
var y = 0;
var xSpeed = 3;
var ySpeed = 3;

function preload() {
	memeImage = loadImage('meme.jpg');
}

function setup() {
	var canvas = createCanvas(640, 360);
	canvas.drawingContext.miterLimit = 2;
}

function draw() {
	background('red');

	textSize(20);
	fill('white');
	stroke(255);
	strokeWeight(2);
	textStyle(ITALIC); 
	textAlign(CENTER)
	text('Press anywhere on the red box (if you dare)', width / 2, height / 2);

	//image intensifies
	if (mouseIsPressed) {
	image(memeImage, x, y, width, height);
	 x += random(-3, 3);
	 y += random(-3, 3);
	textSize(50);
	fill('red');
	stroke(255);
	strokeWeight(10);
	textStyle(ITALIC); 
	textAlign(CENTER)
	text('Omae wa mou SHINDEIRU', width / 2, height - 300);
	}
}
	