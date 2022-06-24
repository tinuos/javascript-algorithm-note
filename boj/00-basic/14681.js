// 14681 사분면 문제
// - fs 모둘 사용 시 EACCES 에러 발생 (접근 권한 문제)
// - readline 활용 (주석 아래 코드 참고)
/*
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\r\n');
const input = fs.readFileSync('input.txt').toString().trim().split('\r\n');

const x = parseInt(input[0]);
const y = parseInt(input[1]);

// 조건. "x, y 둘 다 0을 가지지 않는다" 확인.

if (x > 0 && y > 0) {
  console.log('1');
} else if (x < 0 && y > 0) {
  console.log('2');
} else if (x < 0 && y < 0) {
  console.log('3');
} else if (x > 0 && y < 0) {
  console.log('4');
}
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    const x = parseInt(input[0]);
    const y = parseInt(input[1]);
    
    // 조건. "x, y 둘 다 0을 가지지 않는다" 확인.
    
    if (x > 0 && y > 0) {
      console.log('1');
    } else if (x < 0 && y > 0) {
      console.log('2');
    } else if (x < 0 && y < 0) {
      console.log('3');
    } else if (x > 0 && y < 0) {
      console.log('4');
    }

  process.exit();
});
