const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().trim().split(' ');

const reverseA = Number(input[0].split("").reverse().join(""));
const reverseB = Number(input[1].split("").reverse().join(""));

if (reverseA > reverseB) {
  console.log(reverseA);
} else {
  console.log(reverseB);
}