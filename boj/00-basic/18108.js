const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('input.txt').toString().trim();
const bulgi = parseInt(input);

console.log(bulgi - 543);