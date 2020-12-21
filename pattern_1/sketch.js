/*
	pattern version 2
	generative pattern
	using random
*/

function setup() {
	createCanvas(640, 360);
	rectMode(CENTER);
	pattern();
}

function mousePressed() {
	pattern();
}

//function draw() {

	

function pattern() {
	background('#1F2F5D');

	//buildings
	fill('#E4786C');
	noStroke();
	quad(0, 0, 150, 100, 150, 360, 0, 360);
	quad(550, 100, 640, 100, 640, 360, 550, 360);
	fill('#9D625C');
	quad(500, 200, 550, 100, 550, 360, 500, 360);

	//windows x constant
	fill('#FFF1B7');
	for (let y = 170; y < 391; y += 110) {
	rect(600, y, 60, 80);
	}

	// windows left building attempt
	//(but I can't do math rn so I'm sorry professor I'll try to figure this in my own time--
	// thank you for being awesome I hope you see this note. Happy Holidays! Stay safe out there!)

	//update nevermind I actually did it lol but Happy Holidays nonetheless!
	fill('#FFF1B7');
	for (let y = 30; y < 391; y += 110) {
	quad(0, y, 50, y + 30, 50, y + 120, 0, y + 90);
	quad(80, y + 50, 130, y + 80, 130, y + 170, 80, y + 140);

	}

	

	// lights for left building
	fill('red');
	let y = 0;
	for (let x = 0; x < 151; x += 15) {
		ellipse(x, y, 17, 19);
		y += 10;
		let r = random(60, 255);
		let g = random(60, 255);
		let b = random(60, 255);
		fill(r, g, b); 
		noStroke();
	}

	//lights for right building y constant
	for (let x = 550; x < 650; x += 16) {
		ellipse(x, 100, 17, 19);
		let r = random(60, 255);
		let g = random(60, 255);
		let b = random(60, 255);
		fill(r, g, b); 
		noStroke();
	}
	
	// lights for right building
	for (let x = 500; x < 560; x += 10) {
		ellipse(x, y + 75, 17, 19);
		y -= 17;
		let r = random(60, 255);
		let g = random(60, 255);
		let b = random(60, 255);
		fill(r, g, b); 
		noStroke();
	}

	// snow
	//var snow = random(3, 10);
	for (let x = 0; x < width; x += 20) {
		let y = random(350);
		let w = random(10, 7);
		let h = random(10, 7);
		fill('white');
		ellipse(x, y, w, h);
	}

		/* var clusterNumber = random(2,4);
		for (let j = 0; j < clusterNumber; j++) {
			ellipse(x + random(-20, 20), y + random(-5, 5), w, h);
		}
		*/
}