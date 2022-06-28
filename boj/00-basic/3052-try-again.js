const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n').map(function(currentValue) {return parseInt(currentValue);});

const REST_NUM = 42;

// 나머지 중 서로 다른 값이 몇 개 있는지
// - 입력 개수는 10으로 제한되어 있음

// Set 객체 활용
const restSet = new Set(input.map(function (currentValue) {
  return currentValue % REST_NUM;
}));

console.log(restSet.size);

// 반복 활용 - filter
// const restArr = input.map(function (currentValue) {
//   return currentValue % REST_NUM;
// });

// const restFilterArr = restArr.filter(function (currentValue, currentIndex) {
//   return restArr.indexOf(currentValue) === currentIndex;
// });

// console.log(restFilterArr.length);