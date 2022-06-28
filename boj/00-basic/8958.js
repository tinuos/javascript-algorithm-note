const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n');

const T = Number(input[0]);

let answer = '';

for (let i = 1; i < T + 1; i++) {
  const arrOXResult = input[i].split('');

  let totalScore = 0;
  let count =  0;
  
  for (let j = 0; j < arrOXResult.length; j++) {
    if (arrOXResult[j] === 'O') {
      count += 1;
    } else {
      count = 0;
    }
    totalScore += count;
  }
  answer += totalScore.toString() + '\n';
}

console.log(answer);