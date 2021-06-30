function setup() {
  createCanvas(800, 800);
  background(0);
  frameRate(100);
}
var rectX = 0;
var rectY = 0;
var distance = 25;
var distanceHalf = distance / 2;
var linesOfRects = 0

var colX = {
  r:0,
  g:0,
  b:0,
};
var colY = {
  r:0,
  g:0,
  b:0,
};

function draw() {
  noStroke();

  //maping colors to canvas
  colX.r = map(rectX, 0, width, 0, 255);
  colX.g = map(rectX, 0, width, 0, 255);
  colX.b = map(rectX, 0, width, 0, 255);

  colY.r = map(rectY, 0, width, 0, 255);
  colY.g = map(rectY, 0, width, 0, 255);
  colY.b = map(rectY, 0, width, 0, 255);

  fill(colY.r, 0, colX.b);

  //coloring in
  if(rectX < 805) {
     rect(rectX, rectY, distance, distance);
     rectX += distanceHalf;
     console.log("rect")
  } else if (rectX => width) {
     rectY += distanceHalf;
     rectX = 0;
     linesOfRects += 1
     console.log("line down")
  }
  //cancelling once reached bottom
  if(rectY > 800) {
   noLoop();
   console.log(linesOfRects)
  }
}
