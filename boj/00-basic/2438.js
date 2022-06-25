const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().trim();

const N = Number(input);

let result = '';

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i + 1; j++) {
    result += '*';
  };
  result += '\n';
}

console.log(result);
