const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n');

const N = Number(input[0]);
const scoreArr = input[1].split(' ').map(function(score) {return Number(score)});
const maxScore = Math.max(...scoreArr);

const newScoreArr = scoreArr.map(function(score) {
  return score / maxScore * 100;
})

const newAverage = newScoreArr.reduce(function(acc, newScore) {return acc + newScore}, 0) / N;

console.log(newAverage);