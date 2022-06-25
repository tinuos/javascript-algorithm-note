const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().trim();

//  0 <= N <= 99

/* 주어진 수 또는 연산 결과값이 10보다 작은 경우
- 주어진 수 : 초기에 `0`을 붙여 문자화
- 결과값 : 문자열의 length 속성을 활용하여 제일 마지막 자리의 숫자만 추출
*/

const startNum = input.length < 2 ? '0' + input : input;

let testNum = startNum;
let count = 0;

while (true) {
  const firstNum = Number(testNum[0]);
  const secondNum = Number(testNum[1]);
  const sumResult = (firstNum + secondNum).toString();

  testNum = `${secondNum}${sumResult[sumResult.length - 1]}`  
  count ++;

  if (testNum === startNum) {
    break;
  }
}

console.log(count);

// const test = '0000000000001';

// console.log(test[test.length - 1]);