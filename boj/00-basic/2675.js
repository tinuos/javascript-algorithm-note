const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n');

const T = Number(input[0]);

let result = '';

for (let i = 1; i <= T; i++) {
  const R = Number(input[i].split(' ')[0]);
  const S = input[i].split(' ')[1];

  for (const char of S) {
    for (let j = 1; j <= R; j++) {
      result += char;
    }
  }
  result += '\n';
}

console.log(result);