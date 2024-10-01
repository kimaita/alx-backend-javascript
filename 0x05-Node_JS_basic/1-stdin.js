const readline = require('readline');

// eslint-disable-next-line no-unused-vars
const { stdin: input, stdout: output } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('close', () => {
  console.log('This important software is now closing');
});
rl.question('Welcome to Holberton School, what is your name? ', (answer) => {
  console.log(`Your name is: ${answer}`);
});
