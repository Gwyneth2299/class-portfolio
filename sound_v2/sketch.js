/*
	sound sampler
*/

var gooseSound;
var bgSound;
var cymbalSound;
var gooseImage;
var cymbalImage;
var x = 100;
var y = 100;

function preload() {
	gooseSound = loadSound('goose.mp3');
	bgSound = loadSound('jazz.mp3');
	cymbalSound = loadSound('cymbals.wav');
	gooseImage = loadImage('goose.png');
	cymbalImage = loadImage('cymbal.png');
}

function setup () {
	createCanvas(640, 360);
}

function draw() {
	background(220);

	if (gooseSound.isPlaying()) {
		background('#FFCC33');
		image(gooseImage, random(width), random(height), x, y);
		image(gooseImage, random(width), random(height), x + 50, y + 50);
		image(gooseImage, random(width), random(height), x + 70, y + 70);
		image(gooseImage, random(width), random(height), x + 100, y + 100);
		image(gooseImage, random(width), random(height), x + 150, y + 150);
	}
	if (cymbalSound.isPlaying()) {
		background('#95E0E7');
		image(cymbalImage, random(width), random(height), x, y);
		image(cymbalImage, random(width), random(height), x + 50, y + 50);
		image(cymbalImage, random(width), random(height), x + 70, y + 70);
		image(cymbalImage, random(width), random(height), x + 100, y + 100);
		image(cymbalImage, random(width), random(height), x + 150, y + 150);
	}
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		gooseSound.play();
	}
	if (keyCode == DOWN_ARROW) {
		cymbalSound.play();
	}



	if (keyCode == 83) {
		save();
	}
}