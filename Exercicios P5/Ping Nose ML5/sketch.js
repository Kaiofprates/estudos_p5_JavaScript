let mov = 15;
let hit = false;
let hit2 = true; 
let flag = 0; 
let y = 200;
let video;
let poseNet;
let poses;
let eyeX  =  0; 
let eyeY = 0; 
function setup() {
   createCanvas(400, 400);
  video  = createCapture(VIDEO)
  video.hide()
 
  poseNet = ml5.poseNet(video, rodar);
  poseNet.on('pose', (results) => {
  poses = results;
  console.log(poses)
  eyeX = poses[0].pose.nose.x;
  eyeY = poses[0].pose.nose.y;  
});
}

function rodar(){
 console.log('rodando...');  
}

function draw() {
  //background("#F5DA81");
  image(video, 0, 0)
  fill(250,230,0);
  rect(eyeX, eyeY, 10,60);

  hit = collidePointRect(mov,200,380,10,380,380);
  hit2 = collidePointRect(mov,200,0,0,10,400);

  let colide = collidePointRect(mov,200,eyeX, eyeY,10,60);
  if(colide){
   flag-- 
  }
  
  fill(230);
  rect(390,0,390,400);
  rect(0,0,10,400);
  ellipse(mov,200,12);
  if(hit){
   mov=360;
   flag++;
   //y = random(800).toFixed() 
  }
  if(hit2){
    flag-- 
    // = random(400).toFixed() 
  }
  //console.log(hit);
  if(flag % 2 == 0){
      mov+=25 
  } else{
      mov-=25 
  }

}