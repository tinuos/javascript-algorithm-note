const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().trim().split(' ');

if (input[0] === '') {
  console.log(0);
} else {
  console.log(input.length);
}