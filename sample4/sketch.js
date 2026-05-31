let plateSize = 500; // 접시 크기 
let pepR = 200;      // 페퍼로니 색상

function setup() {
  // 1. 캔버스 크기 설정
  createCanvas(600, 400);
}

function draw() {
  background(255, 240, 200);

  
  //  [크기 변화]
  if (frameCount % 150 < 50) {
    plateSize = 500;
  } else if (frameCount % 150 < 100) {
    plateSize = 520;
  } else {
    plateSize = 540;
  }

  noFill();
  stroke(220);
  strokeWeight(5);
  ellipse(300, 210, plateSize, plateSize * 0.7);

  // 2. 피자 도우
  stroke(200, 150, 50); // 테두리 색상
  strokeWeight(2);
  fill(255, 200, 0);    // 맛있는 치즈색
  triangle(150, 120, 450, 120, 300, 350);

  // 3. 치즈 크러스트
  stroke(210, 140, 60); // 노릇노릇한 빵 색상
  strokeWeight(25);     // 선의 두께를 25로 키워서 맛있어보이는 크러스트로
  line(150, 120, 450, 120);

  // 4. 토핑 - 페퍼로니 (원) 
  if (frameCount % 150 < 50) {
    pepR = 200;
  } else if (frameCount % 150 < 100) {
    pepR = 130;
  } else {
    pepR = 60;
  }

  noStroke();
  fill(pepR, 50, 50); 
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
  
  // -----------------------------------------------------------------
  fill(255, 240, 200); // 가리개
  noStroke();

  // [단계 1] 끝부분 베어 물기
  if (frameCount % 150 > 35) {
    ellipse(300, 320, 100, 100); 
  }
  
  // [단계 2] 중간 영역까지 베어 물기
  if (frameCount % 150 > 70) {
    ellipse(240, 240, 130, 130); 
    ellipse(360, 240, 130, 130); 
    ellipse(300, 200, 150, 150); 
  }
  
  // [단계 3] 삐져나온 양쪽 크러스트 끝자락까지 해치우기
  if (frameCount % 150 > 105) {
    rect(100, 90, 400, 280); 
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('추상화 (시간에 따른 변화 추가) 20212052 한정민', 2.5); 
  }
}