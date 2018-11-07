var capture;
var canvas;
var blurSlider;
var gammaSlider;

var hueSlider;
var satSlider;

function setup() { 
  canvas = createCanvas(640, 480, WEBGL);
  canvas.id('canvas');
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  background(51);

  // blurSlider = createSlider(0,1,.5,0.01);
  // blurSlider.id('blurSlider');

  // gammaSlider = createSlider(0,4,.5,0.01);
  // gammaSlider.id('gammaSlider');
 
  hueSlider = createSlider(-1, 1, .4, .01);
  hueSlider.id('hueSlider');
  satSlider = createSlider(-1, 1, 0, .01);
  satSlider.id('satSlider');


  capture.id('webcam');
  var seriously = new Seriously();

  var src = seriously.source('#webcam');
  var target = seriously.target('#canvas');
  
  // var blur = seriously.effect('blur');
  // blur.amount = '#blurSlider';
  // blur.blendGamma = '#gammaSlider';
  // blur.source = src;
  // target.source = blur;

  var hueSat = seriously.effect('hue-saturation');
  hueSat.hue = '#hueSlider'; 
  hueSat.saturation = '#satSlider';
  hueSat.source = src;
  target.source = hueSat;

  seriously.go(); 
}

function draw() {
  
}