/*
	interaction 2 - collisions

*/

// SOUND SAMPLER

var goose;
var cymbals;
var jazz;

function preload() {
goose = loadSound('goose.mp3');
cymbals = loadSound('cymbals.wav');
jazz = loadSound('jazz.mp3');

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

button(100, 100, 100, goose);
button(500, 100, 100, cymbals);

//rectButton(100, 300, 100, 50);
rectButton(300, 300, 150, 50, jazz);
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

/*

// circle button
fill('plum')
var d = dist(100, 100, mouseX, mouseY);
if (d < 50) {
fill('yellow');
}
circle(100, 100, 100);

// rect button
fill('plum');
if (mouseX > 400 && mouseY < 500 && mouseY > 100 && mouseY < 150) {
fill('yellow');
}
rect(400, 100, 100, 50);

*/