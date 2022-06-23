const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('input.txt').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

// 출력
const result = `${a + b}\n${a - b}\n${a * b}\n${parseInt(a / b)}\n${a % b}\n`;

console.log(result);

