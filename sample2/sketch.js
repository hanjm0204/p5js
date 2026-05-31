function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(245, 230, 210);

  // 얼굴
  fill(255, 220, 190);
  ellipse(200, 250, 180, 220);

  // 머리
  fill(30);
  arc(200, 200, 200, 160, PI, TWO_PI);
  rect(100, 200, 200, 40);

  // 눈
  fill(255);
  ellipse(160, 250, 50, 30);
  ellipse(240, 250, 50, 30);

  fill(0);
  ellipse(160, 250, 15, 15);
  ellipse(240, 250, 15, 15);

  // 눈썹
  stroke(0);
  strokeWeight(3);
  line(135, 220, 185, 220);
  line(215, 220, 265, 220);

  noStroke();

  // 코
  fill(240, 180, 150);
  ellipse(200, 290, 20, 15);

  // 입
  fill(200, 80, 80);
  arc(200, 320, 60, 40, 0, PI);

  // 혀
  fill(255, 120, 130);
  ellipse(215, 330, 25, 15);

  // 상체
  fill(20);
  rect(100, 360, 200, 200, 20);

  // 티셔츠 (ai에게 도움 받은 부분)
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("bad", 200, 430);

  // 팔
  fill(255, 220, 190);
  rect(90, 380, 40, 120, 20);
  rect(270, 380, 40, 120, 20);

  // 커피 1
  fill(255);
  rect(80, 470, 50, 70, 10);
  fill(200, 150, 100);
  rect(80, 470, 50, 40, 10);

  // 커피 2
  fill(255);
  rect(270, 470, 50, 70, 10);
  fill(200, 150, 100);
  rect(270, 470, 50, 40, 10);

  // 빨대
  stroke(0);
  line(100, 460, 100, 430);
  line(290, 460, 290, 430);
}