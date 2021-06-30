let bubble;
let wall;

function setup() {
  createCanvas(800, 800);
  bubble = new Bubble(200, 200, 50, 5, 5);
  wall = new Wall(600, 200, 600, 800);
}

function draw() {
  background(0);

  bubble.show();
  bubble.bounce(wall);
  bubble.move();

  wall.show();
}

class Bubble {
  constructor(x, y, d, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  show() {
    noFill();
    stroke(255);
    strokeWeight(4);
    ellipse(this.x, this.y, this.d);
  }
  move() {

    this.x += this.speedX;
    this.y += this.speedY;
  }

  bounce(obstacle) {
    //bounce off canvas sides
    if(this.x + this.d / 2 > width) {
      this.speedX = this.speedX * -1;
      this.x = width - this.d / 2;
    } else if(this.x - this.d / 2 < 0) {
      this.speedX = this.speedX * -1;
      this.x = 0 + this.d / 2;
    }
    if(this.y + this.d / 2 > height) {
      this.speedY = this.speedY * -1;
      this.y = height - this.d / 2;
    } else if(this.y - this.d / 2 < 0) {
      this.speedY = this.speedY * -1;
      this.y = 0 + this.d / 2;
    }
    //bounce off walls

    let obstacleLength = dist(obstacle.x1, obstacle.y1, obstacle.x2, obstacle.y2);

    console.log(obstacleLength);

    if(this.x == obstacleLength && this.y == obstacleLength) {
      this.speedX = this.speedX * -1;
    }
  }
}

class Wall {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  show() {
    stroke(255);
    strokeWeight(4);
    line(this.x1, this.y1, this.x2, this.y2);
  }
}
