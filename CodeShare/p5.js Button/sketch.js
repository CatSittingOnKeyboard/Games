function setup() {
  createCanvas(800, 800);
  }
  //var ball = {
    //x: 400,
    //y: 400,
    //Width: 50,
    //Height: 50,
//}
var on = false;
var col = {
  r: 0,
  g:255,
  b:0,
}
var backgroundCol = {
  r:0,
  g:0,
  b:0
}
var mouseOnButton = false

function draw() {
  background(backgroundCol.r, backgroundCol.g, backgroundCol.b);
  //creating button
  stroke(255, 0, 0);
  strokeWeight(5);
  fill(col.r, col.g, col.b);
  rectMode(CENTER);
  rect(400, 400, 100, 100);

//testing if mouse is on button
console.log(mouseOnButton)
    if(mouseX > 350 && mouseX < 450 && mouseY > 350 && mouseY < 450) {
      col.r = 255;
      col.g = 0;
      mouseOnButton = true;
    } else {
      mouseOnButton = false;
      col.r = 0;
      col.g = 255;
    }
    //button press
    if(on) {
      backgroundCol.b = 255;
    } else if(!on) {
      backgroundCol.b = 0;
    }
}
//end of draw loop

//mouse button press
function mousePressed() {
  if(mouseOnButton) {
    on = !on
  }
}
