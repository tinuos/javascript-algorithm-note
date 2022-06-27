const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().split('\r\n');

const N = Number(input[0]);
let count = N;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const checkList = new Array(26).fill(false);
  
  for (let j = 0; j < word.length - 1; j++) {
    const currentLetter = word[j];
    const nextLetter = word[j + 1]; // aaaba

    if (currentLetter === nextLetter) {
      continue;
    } else {
      if (checkList[nextLetter.charCodeAt() - 97]) {
        count -= 1;
        break;
      }
      checkList[currentLetter.charCodeAt() - 97] = true;
    }
  }
  
}

console.log(count);