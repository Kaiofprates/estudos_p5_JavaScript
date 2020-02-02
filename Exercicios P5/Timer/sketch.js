/// mapeamento dos números

let display = 
    ["1101111", "0001001","1011110",
     "1011011","0111001","1110011",
    "1110111","1001001","1111111","1111011"];



function setup() {
  createCanvas(600, 200);
}

function draw() {
  background("#202223" );
  translate(10,20);
  let tempo  = new Date(Date.now());
  tempo = tempo.toString().split(" ")[4].replace(/:/g,""); 
  showDisplay(display[tempo[0]],50)
  showDisplay(display[tempo[1]],140)
  showDisplay(display[tempo[2]],230)
  showDisplay(display[tempo[3]],320)
  showDisplay(display[tempo[4]],410)
  showDisplay(display[tempo[5]],500)
}




function showDisplay(n,dis){
 strokeWeight(12);
 stroke(parseInt(n[0]) ? 200 : "#272729"); 
  line(dis + 20,30,dis + 60,30);
stroke(parseInt(n[1]) ? 200 : "#272729"); 
  line(dis + 10,40,dis + 10,70); 
stroke(parseInt(n[2]) ? 200 : "#272729"); 
  line(dis + 20,80,dis + 60,80); 
 stroke(parseInt(n[3]) ? 200 : "#272729");   
  line(dis + 70,40,dis + 70,70);
  stroke(parseInt(n[4]) ? 200 : "#272729"); 
  line(dis + 10,90,dis + 10,120); 
  stroke(parseInt(n[5]) ? 200 :"#272729"); 
  line(dis + 20,130,dis + 60,130);
  stroke(parseInt(n[6]) ? 200 : "#272729"); 
  line(dis + 70,90,dis + 70,120);
}


