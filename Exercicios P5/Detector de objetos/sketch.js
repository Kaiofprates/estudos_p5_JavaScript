let video;
let featureExtractor;
let knn;
let started = false; 
let ice,entry,start; 
let resultado; 

function modelReady(){
 console.log('model ready'); 
}

function setup(){
 createCanvas(500,300);
  //input
  entry = createInput('Objeto')
  entry.size(150,30)
  entry.position(10,400)
  
  //buttons
  ice = createButton('treinar')
  ice.position(190,400)
  ice.mousePressed(Training);
  start = createButton('start')
  start.position(300, 400)
  start.mousePressed(infoLog);
  //features
  
  video = createCapture(VIDEO);
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  knn = ml5.KNNClassifier();
  video.size(500,300);
  video.hide();
  
  resultado = createP(' resultado ');
  resultado.style('font-size','32pt');
  resultado.style('color', 'white')

}
function Training(){
 let logits = featureExtractor.infer(video);
 knn.addExample(logits, entry.value());
 print(entry.value() + " add ")
}

function infoLog(){
  let logits = featureExtractor.infer(video);
  if(knn.getNumLabels() !== 0 && !started){
   started = true; 
    knn.classify(logits, gotResult); 
  }
}

function gotResult(error, results){
if(error){
  console.error(error); 
}else{
  console.log(results.label)
  resultado.html(results.label)
 let logits = featureExtractor.infer(video);
 knn.classify(logits, gotResult); 

}
  
}


function draw(){
  
 background(220);

  image(video,0,0);
  
  
}
