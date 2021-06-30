function setup() {
  createCanvas(800, 800);
  background(100,10,0);
}

var col = {
  r: 0,
  g: 0,
  b: 200
};

var circleSize = 35
var amountEllipse = 0
var spot = {
  x: 0,
  y: 0
};

function draw() {

  noStroke()

  spot.x = random(0, width);
  spot.y = random(0, height);

  col.r = map(spot.x, 0, 800, 0 ,255);
  col.g = map(spot.y, 0, 800, 0 ,255);
  col.b = map(spot.x, 0, 800, 0, 255);

  fill(col.r, col.g, 0);

  ellipse(spot.x, spot.y, circleSize, circleSize);
  amountEllipse = amountEllipse + 1
  console.log(amountEllipse);
}
