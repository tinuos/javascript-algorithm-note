const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = fs.readFileSync('input.txt').toString().trim();
const n = parseInt(input);

// 구구단 N단 출력
let result = '';

for (let i = 1; i <= 9; i++) {
  if (i !== 9) {
    result += `${n} * ${i} = ${n*i}\n`;
  } else {
    result += `${n} * ${i} = ${n*i}`;
  }
}

console.log(result);