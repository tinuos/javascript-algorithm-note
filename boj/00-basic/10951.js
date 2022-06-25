const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  let result = '';

  for (const strNumData of input) {
    const A = Number(strNumData.split(' ')[0]);
    const B = Number(strNumData.split(' ')[1]);

    
    result += (A + B).toString() + '\n';
  }

  console.log(result);
  process.exit();
});

