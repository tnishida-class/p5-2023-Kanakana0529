let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(160, 192, 255);

  // 雪の生成
  if (frameCount % 20 === 0) {
    const b = {
      x: random(width),
      y: 0,
      size: random(10, 50),
      vx: random(-2, 2),
      vy: random(0, 3)
    };
    balls.push(b);
  }

  // 雪の描画と移動
  for (let i = 0; i < balls.length; i++) {
    let b1 = balls[i];
    noStroke();
    fill(255)
    ellipse(b1.x, b1.y, b1.size);
    b1.x += b1.vx;
    b1.y += b1.vy;

    // ボールが画面外に出たら削除
    if (b1.x < 0 || b1.x > width || b1.y < 0 || b1.y > height) {
      balls.splice(i, 1);
      i--;
    }
  }

  
  fill(139, 69, 19); // 茶色
  rect(180, 400, 40, 100);

  // 木の葉（手動で描画）
  fill(34, 139, 34); // 緑
  beginShape();
  vertex(200, 150); // 上部中央
  vertex(250, 300); // 右上
  vertex(225, 300); // 右中
  vertex(250, 400); //　右下
  vertex(150, 400); //　左下
  vertex(175, 300); // 左中
  vertex(150, 300); // 左上
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
