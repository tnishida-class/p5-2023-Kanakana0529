// チェッカー
function setup() {
  createCanvas(200, 200);
  background(255)
  let size = width / 8;
  noStroke()
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){//i=行　j=列のことです
      let x= i*size;//rectのx座標
      let y= j*size;//rectのy座標
      if((i+j)%2===1){//たとえば1行2列目とかが当てはまります
        fill(122);//ハイイロ
      rect(x,y,size,size);

      if(((i+j)%2===1)&&(j<3)){//j=行が3より小さいとき、i+jの最大値は3　なので3行めまで円が描画されます
        fill(255,0,0)
       ellipse(x+size/2,y+size/2,22); //円の半径22はテキトーです、フィットしそうな数値入れました
      }
      if(((i+j)%2===1)&&(4<j)){//j=行が4より大きいということは、i+jの最小値は6 なので6行目から円が描画されます
        fill(0)//くろ
        ellipse(x+size/2,y+size/2,22)
      }
      }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
