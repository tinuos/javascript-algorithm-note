const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = fs.readFileSync('input.txt').toString().trim();
const year = parseInt(input);

// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때
// 윤년이면 1, 아니면 0 출력

if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
  console.log('1');
} else {
  console.log('0');
}
