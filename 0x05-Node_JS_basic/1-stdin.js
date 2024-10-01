const readline = require('readline');

// eslint-disable-next-line no-unused-vars
const { stdin: input, stdout: output } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (answer) => {
  console.log(`Your name is: ${answer}`);
  rl.pause();
});
rl.on('close', () => {
  console.log('This important software is now closing');
});
