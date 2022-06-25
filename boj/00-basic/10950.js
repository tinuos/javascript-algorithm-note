const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().split('\r\n');
const input = fs.readFileSync('input.txt').toString().split('\r\n');

for (let i = 1; i <= Number(input[0]); i++) {
  const numDataArr = input[i].split(' ');
  const a = Number(numDataArr[0]);
  const b = Number(numDataArr[1]);

  console.log(a + b);
}
