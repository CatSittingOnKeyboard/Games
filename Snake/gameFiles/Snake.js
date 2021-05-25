class Snake {
  constructor(x, y, width, height, color, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velX = 0;
    this.velY = 0;
    this.SPEED = speed;
    this.history = [];
  }

  reset(spawnX, spawnY) {
    this.history = [];
    this.x = spawnX;
    this.y = spawnY;
  }

  updatePos() {
    const prevPos = {
      x: this.x,
      y: this.y,
    };
    this.history.push(prevPos);

    this.x = this.x + this.velX;
    this.y = this.y + this.velY;
  }

  checkCollisions() {
    for (let i = 0; i < this.history.length; i++) {
      if (this.x === this.history[i].x && this.y === this.history[i].y) {
        return true;
      }
    }
    return false;
  }

  changeDir(xDir, yDir) {
    if (this.velX === 0) {
      this.velX = math.abs(this.SPEED);
      this.velX = this.velX * xDir;
    }

    if (this.velY === 0) {
      this.velY = math.abs(this.SPEED);
      this.velY = this.velY * yDir;
    }
  }
}
