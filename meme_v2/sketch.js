/*
	meme v1
	by Gwen
	text + images
*/

var memeImage;

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

	//image
	if (mouseIsPressed) {
		image(memeImage, 0, 0, width, height);

	
	textSize(50);
	fill('red');
	stroke(255);
	strokeWeight(10);
	textStyle(ITALIC); 
	textAlign(CENTER)
	text('Omae wa mou SHINDEIRU', width / 2, height - 300);
	}
	}