// テキスト「リサイズするプログラムを作る」
  function setup(){
   createCanvas(windowWidth, windowHeight);
 }
 
 function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
 }       //ここまでは雛形やったと思います
  let size=50//sizeは別に50である必要は全くありません、ここをいじれば円の大きさが変わるってだけです(多分)
  let count=0//進行度合い？（やと思った）
  let cycle=100//変化の周期
  let increment=1//増加割合

 function draw(){
   background(160, 192, 255);
   count=(count+increment)% cycle;//countを0-100での範囲で増加させる関数です
   if(keyIsPressed){//レベル2の条件を満たすものです。レベル１がレベル2はできればこれはここを足すだけです、ちなみに、（）内をいじればいろんな条件つけれると思います、特にこのキーを押したら早くなる・・・とか
    increment=2;
   } else{
    increment=1;
   }//条件によってincrement(鼓動の速さの増加割合)の値を変えています
     if (count<cycle/2){
    size=count+50 ;
   }else{
    size=(cycle-count)+50;
   }//変数であるcountが周期の半分未満のときは円を大きく、半分より大きいときは小さくするという意味です
   for(let i = 0; i < 10; i++){
     ellipse(width * i / 10, height * (10 - i) / 10, size);
   }
   text("center!", width * 0.5, height * 0.5);//雛形ですここも
 }
