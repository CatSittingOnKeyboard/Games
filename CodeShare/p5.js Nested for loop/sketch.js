function setup() {
  createCanvas(800, 800);
}
var distance = 1;
function draw() {

  let loading = true;
  console.log(loading);
  if(loading) {
    fill(50)
    text("loading", 400, 400);
  }
//loops for creating pixels
 for(let x = 0; x <= width; x += distance) {
   for(let y = 0; y <= height; y += distance) {
   //mapping
   let alpha = map(y, 0, width, 0, 255);
   let colR = map(x, 0, width, 0, 255);
   let colG = map(y, 0, width, 0, 255);
   let colB = map(y, 0, width, 0, 255);
   //pixels
   noStroke();
   fill(colR, colG, colB);
   rect(x, y, distance, distance);
   if(x >= width && y >= height) {
     loading = false;
     noLoop();
     console.log(loading);
  }
}
    }
}
