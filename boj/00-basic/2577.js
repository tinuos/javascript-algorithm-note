const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n').map(function(currentValue) {return parseInt(currentValue)});

const multiplyResult = (input[0] * input[1] * input[2]).toString().split('').map(function(currentValue) {return parseInt(currentValue)});
const countArr = new Array(10).fill(0);

for (const num of multiplyResult) {
  countArr[num] += 1;
}

console.log(countArr.join('\n'));