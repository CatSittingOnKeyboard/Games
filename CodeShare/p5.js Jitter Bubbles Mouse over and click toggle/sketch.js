let bubbles = [];
let toggledOn = false;

function setup() {
  createCanvas(800, 800);
  for(let i = 0; i < 10; i++) {
    bubbles[i] = new Bubble();
  }
}

function mousePressed() {
  for(let i = 0; i < bubbles.length; i++) {
    if(bubbles[i].isMouseOver() == true) {
      bubbles[i].toggledOn = !bubbles[i].toggledOn;
    }
  }
}

function draw() {
  background(0)

  for(let i = 0; i < bubbles.length; i++) {

    /*if(bubbles[i].isOverlapping(bubbles[i]) == true) {
      background(200, 0, 100);
    }*/

      if(bubbles[i].isMouseOver() == true) {
        bubbles[i].brightness = 255;
      } else if(bubbles[i].toggledOn == false){
        bubbles[i].brightness = 0;
      }

    bubbles[i].show();
    bubbles[i].jitter();
  }
}


class Bubble {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(25, 50);
    this.brightness = 0
    this.toggledOn = false
  }
  jitter() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    if(toggledOn == false) {
      fill(this.brightness, 100);
    } else {
      fill(255, 100);
    }
    ellipse(this.x, this.y, this.r * 2);
  }
  isOverlapping(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return(d < this.r + other.r);
  }
  isMouseOver() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    return(d < this.r);
  }
}
