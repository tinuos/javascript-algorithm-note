const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('input.txt').toString().split('\r\n');

const firstNum = parseInt(input[0]);

// 세자리 수 일 경우에만 동작
/*
const secondNum = input[1];
console.log(firstNum * secondNum[2]);
console.log(firstNum * secondNum[1]);
console.log(firstNum * secondNum[0]);
console.log(firstNum * secondNum);
*/

// 세자리 수 관계 없이
const secondNum = input[1];
const secondNumReverse = secondNum.split('').reverse().join('');

for (const num of secondNumReverse) {
  console.log(firstNum * num);
}

console.log(firstNum * secondNum);