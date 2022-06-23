const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('input.txt').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

const firstResult = (a + b) % c;
const secondResult = ((a % c) + (b % c)) % c;
const thirdResult = (a * b) % c;
const forthResult = ((a % c) * (b % c)) % c;

const result = `${firstResult}\n${secondResult}\n${thirdResult}\n${forthResult}`;

console.log(result);