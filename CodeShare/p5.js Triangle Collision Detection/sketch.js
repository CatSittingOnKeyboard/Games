let counter = 0;
let x1;
let y1;
let col = 0;

function setup() {
  createCanvas(800, 800);
  frameRate(60);
}

function draw() {
  //displaying
  background(0);

  fill(col);
  stroke(255);
  strokeWeight(4);
  triangle(350, 450, 400, 350, 450, 450);

  if(counter % 60 == 0) {
    x1 = random(300, 500);
    y1 = random(500, 300);
  }
  stroke(255, 0, 0);
  strokeWeight(6);
  point(x1, y1);

  //collision detection
  let y1T = y1 - 350;
  let x1T = y1 - 350 + 1 * x1;

  stroke(255, 255, 0);
  strokeWeight(10);
  point(x1T, y1);

  if(x1 < x1T && y1 < 450) {
    col = 255;
  } else {
    col = 0;
  }
  console.log(x1T);
  counter++;
}
