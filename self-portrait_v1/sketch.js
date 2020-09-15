/*
	self portrait v1
	by gwen
*/

function setup() {

	createCanvas(640, 360);
}

function draw () {
	background('white');

	// face
	triangle(380, 50, 600, 60, 500, 360)

	// eyes
	circle(430, 150, 100); // left
	ellipse(550, 150, 100, 50); // right

	//mouth
	rect(450, 250, 100, 50, 10);

	// hair
	line(400, 40, 430, 80);
	line(420, 40, 450, 80);
	line(440, 40, 470, 80);
	line(460, 40, 490, 80);
	line(480, 40, 510, 80);
	line(500, 40, 530, 80);
	line(520, 40, 550, 80);


}