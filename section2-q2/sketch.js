// チェッカー
function setup() {
  createCanvas(200, 200);
  background(255)
  let size = width / 8;
  noStroke()
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      let x= i*size;
      let y= j*size;
      if((i+j)%2===1){
        fill(122);
      rect(x,y,size,size);

      if(((i+j)%2===1)&&(j<3)){
        fill(255,0,0)
       ellipse(x+size/2,y+size/2,22); 
      }
      if(((i+j)%2===1)&&(4<j)){
        fill(0)
        ellipse(x+size/2,y+size/2,22)
      }
      }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
