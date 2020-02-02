let kaio; 
let fresno;
function preload(){
 kaio = loadImage('./poe.jpg');
 fresno = loadImage('./bel.jpg'); 
}
function setup() {
  createCanvas(windowWidth,windowHeight)
  background("#272327");
  fresno.resize(windowWidth / 2,windowHeight /2)
}
function draw() {
  noFill()
 for ( let i  = 0; i < 50; i++){ 
 let x = random(windowWidth);
 let y = random(windowHeight); 
 let p = kaio.get(x,y)
 tint(p) 
 image(fresno,x,y,20,20)
 }
}