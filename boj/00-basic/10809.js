const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().trim();

let result = '';

for (let i = 97; i <= 122; i++) {
  const alphabet = String.fromCharCode(i);

  result += input.indexOf(alphabet) + ' ';
}

console.log(result);