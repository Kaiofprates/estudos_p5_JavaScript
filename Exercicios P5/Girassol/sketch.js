var n = 0;
var c = 5;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(2);

}

function draw() {
  //logic
  var a = n * 137.5;
  var r = c * sqrt(n);
  var x = r * cos(a) + width / 2;
  var y = r * sin(a + (0.1)) + height / 2;
  //draw
  strokeWeight(0.6)
  fill(200,255,2,n);
  //noStroke();
  ellipse(x,y,20)
  
  n++;
 
}