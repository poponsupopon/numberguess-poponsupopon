
const { uuid } = require('uuid');
const { v1 } = require('insertion-sort-poponsupopon');
const { v2 } = require('fibonacci-sequence-poponsupopon');

// numberGuess.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

rl.on('line', input => {
    const guess = parseInt(input);
    attempts++;
    if (guess === secretNumber) {
        console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
        rl.close();
    } else if (guess < secretNumber) {
        console.log('Too low! Try again.');
    } else {
        console.log('Too high! Try again.');
    }
});
function printBoard() {
    console.log(board.map(row => row.join(' | ')).join('\n---------\n'));
}
console.log('Guess a number between 1 and 100:');


module.exports = { printBoard };
