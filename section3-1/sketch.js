// テキスト「リサイズするプログラムを作る」
  function setup(){
   createCanvas(windowWidth, windowHeight);
 }
 
 function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
 }       //ここまでは雛形やったと思います
  let size=50
  let count=0
  let cycle=100
  let increment=1

 function draw(){
   background(160, 192, 255);
   count=(count+increment)% cycle;
   if(keyIsPressed){
    increment=2;
   } else{
    increment=1;
   }
     if (count<cycle/2){
    size=count+50 ;
   }else{
    size=(cycle-count)+50;
   }
   for(let i = 0; i < 10; i++){
     ellipse(width * i / 10, height * (10 - i) / 10, size);
   }
   text("center!", width * 0.5, height * 0.5);
 }
