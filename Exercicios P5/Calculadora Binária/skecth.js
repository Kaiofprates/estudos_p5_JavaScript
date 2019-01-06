var but ;
var botao; 
function setup() {
  createCanvas(200, 100);
  background("#BF00FF");
  but = createInput();
  but.position(10,10)
  botao = createButton('calcule');
  botao.position(10,40)
  botao.mousePressed()

}

function draw() {


}
function binaryToDec(val){
  return parseInt(val,2)
}
function mousePressed(){
  background("#BF00FF");
  noStroke()
  fill('')
  textSize(20)
  text(binaryToDec(but.value()),100,60)
  }