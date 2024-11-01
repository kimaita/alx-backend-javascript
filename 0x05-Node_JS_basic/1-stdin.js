const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
process.stdout.write('Welcome to Holberton School, what is your name?');

rl.on('line', (answer) => {
  process.stdout.write(`Your name is: ${answer}`);
  rl.pause();
});
rl.on('close', () => {
  process.stdout.write('This important software is now closing');
});
