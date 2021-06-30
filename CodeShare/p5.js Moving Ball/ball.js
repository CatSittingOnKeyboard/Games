class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = r;
    this.dir = 0;
  }
  update() {
    this.acc.x = Math.cos(this.dir) * 0.2;
    this.acc.y = Math.sin(this.dir) * 0.2;
    stroke(0, 255, 0, 150);
    noFill();
    strokeWeight(4);
    line(this.pos.x, this.pos.y, this.acc.x * 150 + this.pos.x, this.acc.y * 150 + this.pos.y);

    this.vel.add(this.acc).limit(10);
    this.pos.add(this.vel);

    this.acc.mult(0);
  }
  applyForce(f) {
    this.acc.add(f);
  }
  display() {
    noFill();
    stroke(255, 0, 0, 150);
    strokeWeight(2);
    line(this.pos.x, this.pos.y, this.vel.x * 10 + this.pos.x, this.vel.y * 10 + this.pos.y);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
  edges() {
    if(this.pos.x + this.r + this.vel.x > width) {
      this.vel.x *= -1;
      this.pos.x = width - this.vel.x - this.r;
    }
    if(this.pos.x - this.r - this.vel.x < 0) {
      this.vel.x *= -1;
      this.pos.x = 0 + this.vel.x + this.r;
    }
    if(this.pos.y + this.r + this.vel.y > height) {
      this.vel.y *= -1;
      this.pos.y = height - this.vel.y - this.r;
    }
    if(this.pos.y - this.r - this.vel.y < 0) {
      this.vel.y *= -1;
      this.pos.y = 0 + this.vel.y + this.r;
    }
  }
}
