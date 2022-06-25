const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().split('\r\n');
const input = fs.readFileSync('input.txt').toString().split('\r\n');
const T = Number(input[0]);

let result = '';

for (let i = 1; i <= T; i++) {
  const numDataArr = input[i].split(' ');

  result += `${Number(numDataArr[0]) + Number(numDataArr[1])}\n`;
}

console.log(result);