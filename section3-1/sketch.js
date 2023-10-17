// テキスト「リサイズするプログラムを作る」
  function setup(){
   createCanvas(windowWidth, windowHeight);
 }
 
 function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
 }
  let size=1
  let x=0
  let y=100
  let z=1

 function draw(){
   background(160, 192, 255);
   x=(x+z)% y;
   if(keyIsPressed){
    z=2;
   } else{
    z=1;
   }
     if (x<y/2){
    size=x+50 ;
   }else{
    size=(y-x)+50;
   }
   for(let i = 0; i < 10; i++){
     ellipse(width * i / 10, height * (10 - i) / 10, size);
   }
   text("center!", width * 0.5, height * 0.5);
 }
