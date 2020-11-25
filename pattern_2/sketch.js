/*
	pattern version 1
	javascript loops
*/

function setup() {
	createCanvas(640, 360);
	pattern();
}

function mousePressed() {
	pattern();
}


function pattern() {
	background(220);

	// landscape

	//mountains
	for (let x = 0; x < width; x+=100) {

		let r = random(50, 82);
		let g = random(40, 65);
		let b = random(30, 51);
		fill(r, g, b); //brown
		noStroke();
		let y = random(50, 200);
		let w = random(200, 300);
		rect(x, height - 250, x + 100, height);
	}

	//trees
	for (let x = 0; x < width; x += random(25, 50)) {
		fill('rosybrown');
		rect(x, height - 50, 10, 100);
	}
}