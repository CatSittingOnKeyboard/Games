let ball;
let f;
let aPressed = false;
let dPressed = false;

function setup() {
  createCanvas(800, 800);
  ball = new Ball(width/2, height/2, 50);
  f = createVector(0.2, 0);
}

function draw() {
  background(0);

  ball.display();
  ball.update();
  ball.edges();
  ball.applyForce(f);

  if(aPressed) ball.dir -= 0.1; //a
  if(dPressed) ball.dir += 0.1; //d
}

function keyPressed() {
  if(keyCode == 65) aPressed = true;
  if(keyCode == 68) dPressed = true;
}
function keyReleased() {
  if(keyCode == 65) aPressed = false;
  if(keyCode == 68) dPressed = false;
}
