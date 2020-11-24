/*
	final project pitch template
	title
	description
	theme
	interaction
	grapics
*/

var currentSlide = 1;
var totalSlides = 5;

var nextBtnX = 960 - 120;
var nextBtnY = 640 - 50;

var backBtnX = 20;
var backBtnY = nextBtnY;

var btnW = 100;
var btnH = 30;

function setup() {
	createCanvas(960, 640);
}

function draw() {
	background(51);
	noStroke();
	
	// slides
	if (currentSlide == 1) {
		// title
		textSize(80);
		fill(255);
		textAlign(CENTER, CENTER);

		// fill in your own title
		text('Hit the Dot', width/2, height/2 - 50);
		textSize(60);
		text('Kid-Friendly version', width/2, height/2 + 50);
	
	} else if (currentSlide == 2) {
		// description, theme
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('My project is a simple game that requires the user to click on the white circle that appears on the screen, and to avoid the red circle that pops up.', 50, 100, width - 100);

	} else if (currentSlide == 3) {
		// describe the interaction
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('The user is to click on the white circle that appears on the screen. The circles will appear one at a time. Make sure to ONLY click on the white circles and not the red one! (or else Patrick will come and get you).', 50, 100, width - 100);
	} else if (currentSlide == 4) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('The graphics include white and red circles.', 50, 100, width - 100);

		fill(100);
		rect(200, 200, 600, 400);
		fill('white');
		circle(width/2, height/2, 100);
	} else if (currentSlide == 5) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('The graphics include meme Patrick that will appear if you accidentally click on the red circle.', 50, 100, width - 100);

		rect(200, 200, 600, 500);
	}

	// draw buttons
	if (currentSlide < totalSlides) {
		button(nextBtnX, nextBtnY, "Next");
	}

	if (currentSlide > 1) {
		button(backBtnX, backBtnY, "Back");
	}
	
}

// displaying button
function button(x, y, displayText) {

	// draw buttons
	stroke('plum');
	fill(255);
	
	if (mouseX > x && mouseX < x + btnW &&
		mouseY > y && mouseY < y + btnH) {
		fill('yellow');

		if (mouseIsPressed) {
			stroke('yellow');
		}
	}
	
	strokeWeight(4);
	rect(x, y, btnW, btnH, 10);

	noStroke();
	fill('plum');
	textSize(25);
	textAlign(CENTER, CENTER);
	text(displayText, x, y, btnW, btnH);

}

function mousePressed() {
	// over the next button
	if (mouseX > nextBtnX && mouseX < nextBtnX + btnW &&
		mouseY > nextBtnY && mouseY < nextBtnY + btnH) {
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	// over the back button
	if (mouseX > backBtnX && mouseX < backBtnX + btnW &&
		mouseY > backBtnY && mouseY < backBtnY + btnH) {
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}

function keyPressed() {
	if (keyCode == 39) { // right arrow
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	if (keyCode == 37) { // left arrow
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}
