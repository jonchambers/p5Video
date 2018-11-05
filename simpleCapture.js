var capture;
var canvas;
function setup() {
 
  capture = createCapture(VIDEO);
  capture.size(1920, 1080);
  capture.hide();
  canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  image(capture, 0, 0);
  filter(GRAY);
}