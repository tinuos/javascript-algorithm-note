const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n');

// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

const T = Number(input[0]);
let answer = '';

for (let i = 1; i < T + 1; i++) {
  const testCaseArr = input[i].split(' ').map(function(data) {return Number(data)});
  const N = testCaseArr[0];
  const scores = testCaseArr.splice(1);

  const scoreAverage = scores.reduce(function(acc, score) {return acc + score}, 0) / N;

  const passAverage = scores.filter(function(score) {return score > scoreAverage;}).length / N * 100;
  answer += passAverage.toFixed(3) + '%\n';
}

console.log(answer);