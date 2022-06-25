const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n');

const T = Number(input[0]);

let result = '';

for (let i = 1; i <= T; i++) {
  const numArr = input[i].split(' ');
  const A = Number(numArr[0]);
  const B = Number(numArr[1]);
  const template = `Case #${i}: ${A} + ${B} = ${A + B}\n`;
  result += template;
}

console.log(result);