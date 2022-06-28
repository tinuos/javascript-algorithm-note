const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n').map(function(currentValue) {return parseInt(currentValue)});

/* 최대값  */

// 반복문
let maxValue = Number.MIN_SAFE_INTEGER;
let maxIndex = null;

/*
for (let i = 0; i < input.length; i++) {
  if (input[i] > maxValue) {
    maxValue = input[i];
    maxIndex = i + 1;
  }
}
*/

// Arr.forEach()

input.forEach(function(currentValue, currentIndex) {
  if (currentValue > maxValue) {
    maxValue = currentValue;
    maxIndex = currentIndex + 1;
  }
})

console.log(maxValue + '\n' + maxIndex);