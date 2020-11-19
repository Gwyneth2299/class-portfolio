/*
	interaction 2 - collisions

*/

// SOUND SAMPLER

var goose;
var cymbals;
var jazz;
var gooseSound;
var bgSound;
var gooseImage;
var cymbalImage;
var jazzImage;

function preload() {
goose = loadSound('goose.mp3');
cymbals = loadSound('cymbals.wav');
jazz = loadSound('jazz.mp3');
gooseImage = loadImage('goose.png');
cymbalImage = loadImage('cymbal.png');
jazzImage = loadImage('jazz.png');
}

function setup() {
createCanvas(640, 360);
jazz.setVolume(0.2);
}

function draw() {
background(220);

var x = 100;
var y = 100;
var s = 100;
var d = dist(x, y, mouseX, mouseY);

// "screen"
fill('lightblue');
noStroke();
rect(145, 55, 350, 250);

button(80, 180, 80, goose);
button(560, 180, 80, cymbals);

// rectButton(100, 300, 100, 50);
rectButton(520, 300, 75, 30, jazz);

// Images

	if (goose.isPlaying()) {
		image(gooseImage, random(200,300), random(100, 200), 150, 65);
	}
	if (cymbals.isPlaying()) {
		image(cymbalImage, random(200, 300), random(100, 200), 155, 65);
	}
	if (jazz.isPlaying()) {
		image(jazzImage, random(200, 300), random(100, 200), 155, 65);
	}
}

function rectButton(x, y, w, h, sound) {
var d = dist(x, y, mouseX, mouseY);
// calculate distance
if (mouseX > x && mouseX < x + w &&
mouseY > y && mouseY < y + h) {
fill('yellow');
noStroke();

// sound

if (mouseIsPressed && !sound.isPlaying()) {
sound.play();
}

} else { 
fill('plum');
noStroke();
}
rect(x, y, w, h);
}
 

function button(x, y, s, sound) {
var d = dist(x, y, mouseX, mouseY);
//calculate distance
if (d < s / 2) {
fill('yellow');

// inside the button

if (mouseIsPressed && !sound.isPlaying()) {
sound.play();
}
if (mouseIsPressed && !sound.isPlaying()) {
sound.play();
}

} else {
//outside the button
fill('plum');
}
ellipse(x, y, s);
}
