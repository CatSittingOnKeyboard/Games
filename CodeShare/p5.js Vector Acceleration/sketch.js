let ball;
let mouse;
let gravity;
let wind;

function setup() {
  createCanvas(1080, 1080);
  ball = new Ball();
  position = createVector(20, 20);
  velocity = createVector(0,0);
  acceleration = createVector(0,0);
  gravity = createVector(0, 1);
  wind = createVector(0.5 , 0)
}

function draw() {
  background(0);
  mouse = createVector(mouseX, mouseY);
  ball.display();
  ball.update();
  ball.edges();
  ball.applyForce(gravity);
  ball.applyForce(wind);
  //ball.applyForce(mouse.sub(position).normalize()) //tracks mouse
  fill(255, 0, 0)
}

class Ball {
  constructor(x, y) {
    this.r = 25;
  }
  display() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(position.x, position.y, this.r);
  }
  update() {
    velocity.add(acceleration);
    position.add(velocity);
    acceleration.mult(0);
  }
  applyForce(f) {
    acceleration.add(f);
  }
  edges() {
    if(position.x > width) {
      position.x = width - acceleration.x;
      velocity.x *= -0.9;
    }
    if(position.x < 0) {
      position.x = 0 + acceleration.x;
      velocity.x *= -0.9;
    }
    if(position.y > height) {
      position.y = height; - acceleration.y;
      velocity.y *= -0.9;
    }
    if(position.y < 0) {
      position.y = 0 + acceleration.y;
      velocity.y *= -0.9;
    }
  }
}
