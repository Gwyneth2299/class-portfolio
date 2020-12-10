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

function pattern() {
	background('#1F2F5D');

	// mountains
	for (let x = random(-200); x < width; x += random(100, 200)) {
		// brown
		let r = random(50, 82);
		let g = random(40, 65);
		let b = random(30, 51);
		fill(r, g, b); 
		noStroke();
		let y = random(50, 200);
		let w = random(200, 300);
		triangle(x, height, x + w/2, y, x + w, height);
	}

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


	// snow
	//var snow = random(3, 10);
	for (let x = 0; x < width; x += 20) {
		// let x = random(width);
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