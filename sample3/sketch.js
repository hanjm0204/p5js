/*********************************************
  1. mouse:
		- 마우스 포인터의 위치에 따라 캐릭터의 시선(눈동자)이 좌우로 움직임
		- 마우스 버튼 클릭 시 입 모양이 벌어지고 티셔츠 문구가 "YES!"로 변경됨
	2. keyboard:
		- 왼쪽/오른쪽 방향키를 누르면 캐릭터가 화면 내에서 좌우로 이동함
***********************************************/

let x = 300;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(245, 230, 210);

  // --- [KEYBOARD] 캐릭터 좌우 이동 ---
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) x -= 5;
    if (keyCode === RIGHT_ARROW) x += 5;
  }
  x = constrain(x, 100, 500);

  // --- 캐릭터 그리기 ---
  
  // 얼굴
  noStroke();
  fill(255, 220, 190);
  ellipse(x, 180, 150, 180);

  // 머리
  fill(30);
  arc(x, 140, 170, 130, PI, TWO_PI);
  rect(x - 85, 140, 170, 30);

  // 눈 (흰자)
  fill(255);
  ellipse(x - 35, 180, 45, 25);
  ellipse(x + 35, 180, 45, 25);

  // --- [MOUSE] 시선 처리 ---
  fill(0);
  if (mouseX < x) {
    ellipse(x - 40, 180, 12, 12); // 왼쪽 시선
    ellipse(x + 30, 180, 12, 12);
  } else {
    ellipse(x - 30, 180, 12, 12); // 오른쪽 시선
    ellipse(x + 40, 180, 12, 12);
  }

  // 눈썹
  stroke(0);
  strokeWeight(2);
  line(x - 55, 155, x - 15, 155);
  line(x + 15, 155, x + 55, 155);
  noStroke();

  // 코/입 (클릭 반응 포함)
  fill(240, 180, 150);
  ellipse(x, 210, 15, 10);

  if (mouseIsPressed) {
    fill(255, 100, 100);
    ellipse(x, 240, 30, 30); // 마우스 클릭 시 입 벌림
  } else {
    fill(200, 80, 80);
    arc(x, 235, 50, 30, 0, PI); // 평소 입
  }

  // 상체 및 티셔츠
  fill(20);
  rect(x - 80, 270, 160, 130, 20);

  fill(255);
  textSize(24);
  textAlign(CENTER);
  if (mouseIsPressed) {
    text("YES!", x, 320); // 마우스 클릭 시 문구 변경
  } else {
    text("bad", x, 320);
  }

  // 팔과 커피
  fill(255, 220, 190);
  rect(x - 95, 280, 30, 100, 15);
  rect(x + 65, 280, 30, 100, 15);

  fill(255);
  rect(x - 105, 340, 40, 50, 5); // 커피 잔
  rect(x + 65, 340, 40, 50, 5);
  
  fill(200, 150, 100);
  rect(x - 105, 340, 40, 25, 5); // 커피 내용물
  rect(x + 65, 340, 40, 25, 5);
}

// --- [GIF 저장 기능] ---
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('myCharacter.gif', 3);
  }
}