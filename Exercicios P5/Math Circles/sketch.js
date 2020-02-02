let angle  =  0;
let slides; 

function setup() {
  createCanvas(420, 460);
  angleMode(DEGREES);
  slides = createSlider(0.1,10,0.1,0.1);
  slides.position(160,430)
}

function draw() {
  background("#252927");
  noFill()
  translate(210,210);
  strokeWeight(2)
  stroke(200)
  let  x = 30 * cos(angle); 
  let  y = 30 * sin(angle);
  fill(3)
  let x1 = x + 20 * cos(angle * 2);
  let y1 = y + 20 * sin(angle * 2);
  let x2 = x1 + 30 * cos(angle * 3) ;
  let y2 = y1 + 30 * sin(angle * 3) ; 
  let x3 = x2 + 40 * cos(angle  * 4); 
  let y3 = y2 + 40 * sin(angle  * 4) ; 
  let x4 = x3 + 50 * cos(angle * 5);
  let y4 = y3 + 50 * sin(angle * 5);
  let x5 = x4 + 20 * cos(angle * 6);
  let y5 = y4 + 20 * sin(angle * 6);
  
  ellipse(0,0,400);
  fill(x)
  ellipse(x,y,340);
  fill(x1)
  ellipse(x1,y1,300);
  fill(x2)
  ellipse(x2,y2,240);
  fill(x3)
  ellipse(x3,y3,160);
  fill( x4 )
  ellipse(x4,y4,60);
  fill(x5)
  ellipse(x5,y5,20)
  angle+=slides.value()
  textSize(30)
  text(slides.value(),100,240)


}