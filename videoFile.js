
var T1000;



function setup() {
  // canvas = createCanvas(windowWidth, windowHeight);
  // canvas.style('z-index', '-1');
  T1000 = createVideo(['videos/mercuryT10002.mp4']);
  
  
}

function draw(){
 
if(mouseIsPressed == true){
  T1000.play();
T1000.loop();
}else{
  T1000.pause();
}

}





