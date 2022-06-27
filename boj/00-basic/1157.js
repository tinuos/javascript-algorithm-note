const fs = require('fs');
const inputDataPath = (process.platform === 'linux' ? '/dev/stdin' : 'input.txt');
const input = fs.readFileSync(inputDataPath).toString().trim();

const inputUpperCase = input.toUpperCase();

const countObj = {};
let maxCount = 0;
let answer = '';

for (const char of inputUpperCase) {

  if (char in countObj) {
    countObj[char] += 1;
  } else {
    countObj[char] = 1;
  }
}

for (const key in countObj) {
  if (countObj[key] > maxCount) {
    maxCount = countObj[key];
    answer = key;
  } else if (countObj[key] === maxCount) {
    answer = '?';
  }
}

console.log(answer);




// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input;

// rl.on('line', function(line) {
//   input = line;

//   rl.close();
// }).on("close", function() {

  

//   const inputUpperCase = input.toUpperCase();

//   const countObj = {};
//   let maxCount = 0;
//   let answer = '';
  
//   for (const char of inputUpperCase) {
  
//     if (char in countObj) {
//       countObj[char] += 1;
//     } else {
//       countObj[char] = 1;
//     }
//   }
  
//   for (const key in countObj) {
//     if (countObj[key] > maxCount) {
//       maxCount = countObj[key];
//       answer = key;
//     } else if (countObj[key] === maxCount) {
//       answer = '?';
//     }
//   }
  
//   console.log(answer);

//   process.exit();
// });