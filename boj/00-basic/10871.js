const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n');

const N = Number(input[0].split(' ')[0]);
const X = Number(input[0].split(' ')[1]);

const numList = input[1].split(' ');

let result = '';

for (const num of numList) {
  if (num < X) {
    result += `${num} `;
  }
}

console.log(result);