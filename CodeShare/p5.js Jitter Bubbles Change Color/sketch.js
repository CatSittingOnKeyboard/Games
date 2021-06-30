let bubble = [];
let jitter = false
let r = 50;
let g = 50;
let b = 50;
let inverseR = 1;
let inverseG = 1;
let inverseB = 1;

function setup() {
 createCanvas(800, 800);
}
function mouseDragged() {
  bubble.push(new Bubble(mouseX, mouseY, 50));
}

function draw() {
  background(0, 0, 0);
  for(let i = 0; i < bubble.length; i++) {
    bubble[i].show();
    if(jitter == true) {
      bubble[i].move();
    }
  }

  //makes the color change in opposite direction once it reached 255
  if(r >= 255) {
    inverseR = -1;
  } else if(r <= 0) {
    inverseR = 1;
  } else if(g >= 255) {
    inverseG = -1;
  } else if(g <= 0) {
    inverseG = 1;
  } else if(b >= 255) {
    inverseB = -1;
  } else if(b <= 0) {
    inverseB = 1
  }
//detects keys to change color
  if(keyIsDown(LEFT_ARROW)) {
    r += 5 * inverseR;
    console.log(r);
  }
  if(keyIsDown(UP_ARROW)) {
    g += 5 * inverseG;
    console.log(g);
  }
  if(keyIsDown(RIGHT_ARROW)) {
    b += 5 * inverseB;
    console.log(b);
  }
}

function keyPressed() {
  if(key == 'j') {
    jitter = !jitter;
  }
}

class Bubble {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    noStroke();
    fill(r, g, b);
    ellipse(this.x, this.y, this.d);
  }
}
