function setup() {
  createCanvas(800, 800);
}
var backColX = {
  r: 0,
  g: 0,
  b: 0,
  white: 0,
};
var backColY = {
  r: 0,
  g: 0,
  b: 0,
  white: 0,
};

function draw() {
  backColX.r = map(mouseX, 0, 200, 0, 255);
  backColX.g = map(mouseX, 200, 400, 0, 255);
  backColX.b = map(mouseX, 400, 600, 0, 255);
  backColX.white = map(mouseX, 600, 800, 0, 255);

  backColY.r = map(mouseY, 0, 800, 255, 0);
  backColY.g = map(mouseY, 0, 800, 255, 0);
  backColY.b = map(mouseY, 0, 800, 255, 0);
  backColY.white = map(mouseY, 0, 800, 255, 0);

  if(mouseX > 0 && mouseX < 200 && !toggle) {
    background(backColX.r, 0, 0);
  } else if(mouseX > 200 && mouseX  < 400 && !toggle) {
    background(0, backColX.g, 0);
  } else if(mouseX > 400 && mouseX < 600 && !toggle) {
    background(0, 0, backColX.b);
  } else if(mouseX > 600 && mouseX < 800 && !toggle) {
    background(backColX.white);
  }
  if(mouseX > 0 && mouseX < 200 && toggle) {
    background(backColY.r, 0, 0);
  } else if(mouseX > 200 && mouseX  < 400 && toggle) {
    background(0, backColY.g, 0);
  } else if(mouseX > 400 && mouseX < 600 && toggle) {
    background(0, 0, backColY.b);
  } else if(mouseX > 600 && mouseX < 800 && toggle) {
    background(backColY.white);
  }
}
var toggle = false
function mousePressed() {
  toggle = !toggle
  if(toggle) {
    console.log("Vertical mode")
  } else {
    console.log("Horizontal mode")
  }
}
