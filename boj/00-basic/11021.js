const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n');

const T = Number(input[0]);

let result = '';

for (let i = 1; i <= T; i++) {
  const numArr = input[i].split(' ');
  const template = `Case #${i}: ${Number(numArr[0]) + Number(numArr[1])}\n`;
  result += template;
}

console.log(result);