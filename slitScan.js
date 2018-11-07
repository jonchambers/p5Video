var video;
var x = 0;
function setup() {
  createCanvas(800, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  //capture.hide();
}

function draw() {
//  background(0);
  video.loadPixels();
  //image(video, 0, 0);
  var w = video.width;
  var h = video.height;

  copy(video, w/2, 0, 1, h, x, 0, 1, h);
  x= x+1;
  if(x > width){
  	x=0;
  }
}