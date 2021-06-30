let speedCap = 200;
let backgroundCol = 230;
let speedChange = 1;
let canvas;
let sliderX;
let sliderY;

let ball = {
  x:500,
  y:500,
  speedX:0,
  speedY:0,
};
function setup() {
  canvas = createCanvas(1000, 1000);
  frameRate(500);
  background(backgroundCol);
  sliderX = createSlider(-5, 5, 0);
  sliderY = createSlider(-5, 5, 0);
}
function draw() {
//background(backgroundCol);
                    //limiting to speedCap..
  if(ball.speedX > speedCap) {
    ball.speedX = speedCap;
  } else if(ball.speedY > speedCap) {
    ball.speedY = speedCap;
  }

  ball.speedX = sliderX.value();
  ball.speedY = sliderY.value();
  //movingBallWithMouse();
  boundaries();

  ball.x += ball.speedX;
  ball.y += ball.speedY;
  noStroke();
  ellipse(ball.x, ball.y, 50, 50);

}
                     //move ball with mouse
function movingBallWithMouse() {
                     //creating variable for mouse movement speed
  let mouseSpeedX = mouseX - pmouseX;
  let mouseSpeedY = mouseY - pmouseY;
                     //setting speed cap
                     //on influence of the mouse on ball speed
  if(mouseIsPressed) {
    if(mouseSpeedX > speedCap) {
       mouseSpeedX = speedCap;
       //console.log("Mouse speed X over cap");
    } else if(mouseSpeedX < speedCap * -1) {
       mouseSpeedX = speedCap * -1;
       //console.log("Mouse speed X over cap");
    }
      if(mouseSpeedY > speedCap) {
       mouseSpeedY = speedCap;
       //console.log("Mouse speed Y over cap");
    } else if(mouseSpeedY < speedCap * -1) {
       mouseSpeedY = speedCap * -1;
       //console.log("Mouse speed Y over cap");
    }
    ball.speedX = mouseSpeedX;
    ball.speedY = mouseSpeedY;
  }
}
                     //bouncing off boundaries
function boundaries() {
  //checking boundaries
  if(ball.x > width) {
    ball.x = width;
    ball.speedX = ball.speedX * -1;

    fill(random(255), random(255), random(255));
  } else if(ball.x < 0) {
    ball.x = 0;
    ball.speedX = ball.speedX * -1;

    fill(random(255), random(255), random(255));
  } else if(ball.y > height) {
    ball.y = height;
    ball.speedY = ball.speedY * -1;

    fill(random(255), random(255), random(255));
  } else if (ball.y < 0) {
    ball.y = 0;
    ball.speedY = ball.speedY * -1;
    fill(random(255), random(255), random(255));
  }
}

                     //reset button
function keyPressed() {
  if(keyCode == 103) {
    speedChange += 1;
    console.log(speedChange);
  } else if(keyCode == 97) {
    speedChange -= 1;
    console.log(speedChange);
  }

  if(keyCode == 100) {
    ball.speedX += speedChange;;
    //console.log("changed X velocity by 1")
  }
  if(keyCode == 102) {
    ball.speedX -= speedChange;;
    //console.log("changed X velocity by 1")
  }
  if(keyCode == 98) {
    ball.speedY += speedChange;
    //console.log("changed Y velocity by 1");
  }
  if(keyCode == 104) {
    ball.speedY -= speedChange;
    //console.log("changed Y velocity by 1");
  }
  if(key == "r"){
    background(backgroundCol);
    fill(backgroundCol);
    ball.x = width / 2;
    ball.y = height / 2;
    ball.speedX = 0;
    ball.speedY = 0;
  }
}
