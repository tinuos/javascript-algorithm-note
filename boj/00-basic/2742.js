const fs = require('fs');
const inputDataPath = (process.platform === "linux" ? "/dev/stdin" : "input.txt");

const input = fs.readFileSync(inputDataPath).toString().trim();
const N = Number(input);

let result = '';

for (let i = N; i > 0; i--) {
  result += i + '\n';
}

console.log(result);