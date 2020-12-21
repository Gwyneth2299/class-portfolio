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

	// lights
	circle(0, 10, 10);

	for (let x = 0; x < width; x += 20) {
		let r = random(0,200);
		let g = random(0,200);
		let b = random(0,200);

	}
	

/*
	// trees
	for (let x = 0; x < width; x += random(5, 100)) {
		fill('rosybrown');
		let y = random(50);
		let w = random(4, 10);
		let h = random(50, 100);
		rect(x, height - y, w, h);

		// random green
		var r = random(50);
		var g = random(50, 200);
		var b = random(50);
		
		fill(r, g, b);
		let treeWidth = random(10, 40);
		let treeHeight = random(treeWidth, treeWidth * 2);
		ellipse(x, height - y - h/2, treeWidth, treeHeight);
	}
*/

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