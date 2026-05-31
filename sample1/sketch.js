function setup() {
  // 1. 캔버스 크기 설정
  createCanvas(600, 400);
  background(255, 240, 200);

  // 2. 피자 도우
  stroke(200, 150, 50); // 테두리 색상
  strokeWeight(2);
  fill(255, 200, 0);    //  치즈색
  triangle(150, 120, 450, 120, 300, 350);

  // 3. 치즈 크러스트
  stroke(210, 140, 60); // 노릇노릇한 빵 색상
  strokeWeight(25);     // 통통한 크러스트
  line(150, 120, 450, 120);

  // 4. 토핑 - 페퍼로니
  noStroke();
  fill(200, 50, 50);
  ellipse(300, 170, 40, 40);
  ellipse(250, 210, 35, 35);
  ellipse(350, 210, 35, 35);

  // 5. 토핑 - 피망 
  fill(50, 150, 50);
  rect(280, 240, 15, 15);
  rect(330, 140, 12, 12);
  rect(220, 160, 12, 12);

  // 6. 토핑 - 올리브
  fill(30);
  ellipse(280, 190, 10, 10);
  ellipse(320, 250, 10, 10);
  
  // 7. 접시
  noFill();
  stroke(220);
  strokeWeight(5);
  ellipse(300, 210, 500, 350);
}

function draw() {
}