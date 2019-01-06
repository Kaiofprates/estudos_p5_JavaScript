var percent;

function setup() {
  
  createCanvas(300, 300);
  percent = createSlider(0,100,1);
  percent.position(100, 250);
  percent.style('width', '100px');

}

function draw() {
background("#FE2E64");
var x = percent.value();
fill('');  
textSize(20);
text( x+'%',47,265);
stroke(220,10,12);
fill('');
arc(150, 150, 100, 100, 0, (x/100) * (2 * 3.14) , PIE);

}