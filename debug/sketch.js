/*
    debug exercise
*/

var x = 300;
var y = 100;

function setup() {
    createCanvas(640, 480);
}

function draw () {
    backGround(50);

    // face
    noStroke();
    fill('lightblue');
    ellipse(350, 320, x); 

    // right eye
    fill(0, 0, 0);
    ellipse (450, 250, 100); 

    // left eye
    ellipse(x, y, 100); 

    // mouth
    ellipse(x, y + 100, 100, 50); 

    fill(white);
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont(monospace);
    text("Nice work!" 65, 110);
}
