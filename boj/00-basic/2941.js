const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().trim();

const specialAlphaList = [ 'c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=' ];
let word = input;
let count = 0;


for (let alpha of specialAlphaList) {
  let index = word.indexOf(alpha);
  
  while (index !== -1) {
    count += 1;
    word = word.replace(alpha, '*');
    index = word.indexOf(alpha);
  }
}

for (let char of word) {

  if (char !== '*') {
    count += 1;
  }
}

console.log(count);