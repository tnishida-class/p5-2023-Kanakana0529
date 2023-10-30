// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count=0;
let cycle=100;
let size=50


function setup(){
  createCanvas(200, 200);
}           

function draw(){
  background(160, 192, 255);
count=(count+1)% cycle;
  if(keyIsPressed){
  count=(count+2)% cycle;
  } else{
    count=(count+1)% cycle;
  }
    if(count<cycle/2){
    size=count+50 ;
  }else{
    size=(cycle-count)+50;
  }
  // BLANK[1]
  ellipse(width/2, height/2, size);
 }