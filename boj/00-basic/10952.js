const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n');

let result = '';

for (const strNumData of input) {
  const A = Number(strNumData.split(' ')[0]);
  const B = Number(strNumData.split(' ')[1]);

  if (A !== 0 && B !== 0) {
    result += (A + B).toString() + '\n';
  }
}

console.log(result);