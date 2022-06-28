const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n');

const N = Number(input[0])
const numList = input[1].split(' ').map(function(el) {return parseInt(el);});

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
  if (numList[i] < min) {
    min = numList[i];
  }
  if (numList[i] > max) {
    max = numList[i];
  }
}

console.log(min, max);

// spread operator
// console.log(Math.min(...numList), Math.max(...numList));