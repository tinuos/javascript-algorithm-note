const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('input.txt').toString().trim().split(' ');

// (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 
// H : M
// 24시간 표현
// - 0:0  ~  23:59
// 출력은 입력과 같은 형태로

let H = parseInt(input[0]);
let M = parseInt(input[1]);

// 45분전 예시
// 10시 10분 -> 9시 25분
// 분(M)이 45이하일 경우 : 60 - (45 - M)
//   - 시간(H) 처리 :
//      - 0시 일 경우에만 : 23
//      - 나머지 : H - 1;

if (M < 45) {
  M = 60 - (45 - M);
  if (H === 0) {
    H = 23;
  } else {
    H -= 1;
  }
} else  {
  M = M - 45;
}

console.log(H, M);