const fs = require('fs');
const inputDataPath = (process.platform === "linux" ? "/dev/stdin" : "input.txt");

const input = fs.readFileSync(inputDataPath).toString().trim();
const N = Number(input);

let result = '';

for (let i = 1; i <= N; i++) {
  result += i + '\n';
}

console.log(result);