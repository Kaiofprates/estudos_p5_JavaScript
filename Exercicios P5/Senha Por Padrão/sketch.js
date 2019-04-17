var p = []
var loc = {}
var lin = [5,7,8,4]
function setup() {
  createCanvas(200, 200);

  p[1] = cr(30,50)
  p[4]= cr(30,100)
  p[7]= cr(30,150)
  //
  p[2] = cr(100,50)
  p[5]= cr(100,100)
  p[8]= cr(100,150)
  //
  p[3] = cr(175,50)
  p[6]= cr(175,100)
  p[9]= cr(175,150)
  //
  for(var i = 1; i < p.length ; i++){
   textSize(15)
   fill("#F34")
   text(i,p[i].a - 4,p[i].b + 4)
  }

}

function draw() {
  lin = app.key
for(var i = 0 ; i < lin.length -1 ; i++){
 strokeWeight(10)
 stroke(255);
 line(p[lin[i]].a,p[lin[i]].b,p[lin[i+1]].a,p[lin[i+1]].b)
  }
}

function cr(a,b) {
  var x = []
  noStroke()
  fill(23,233,122)
  x.push(ellipse(a,b,40))
  fill("#f5ff4")
  x.push(ellipse(a,b,20))
  return {a,b}

}

function limpar() {
  lin = [];
}