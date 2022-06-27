const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n');

const N = Number(input[0]);
const strTotalNums = input[1];
let result = 0;

if (N === strTotalNums.length) {
  for (let num of strTotalNums) {
    result += Number(num);
  }
};

console.log(result);