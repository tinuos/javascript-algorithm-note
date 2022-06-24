const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('input.txt').toString().trim().split(' ');

const diceA = parseInt(input[0]);
const diceB = parseInt(input[1]);
const diceC = parseInt(input[2]);

/*
ooo
oox
xox
xoo
abc
*/

if (diceA === diceB) {
  if (diceB === diceC) {                      // ooo
    console.log(10000 + (diceA * 1000)); 
  } else {                                    // oox
    console.log(1000 + (diceA * 100)); 
  }
} else { // diceA !== diceB
  if (diceA === diceC) {                      // xox
    console.log(1000 + (diceA * 100));
  } else if (diceB === diceC) {                    // xoo
    console.log(1000 + (diceB * 100));
  } else {
    console.log(Math.max(diceA, diceB, diceC) * 100); // abc
  }
}