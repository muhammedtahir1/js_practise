let random = Math.random();
// console.log(random);
// let result = '';
let guess = 'heads';

/*
if (random < 0.5) {
  result = 'heads';
} else {
  result = 'tails';
}

if (guess === result) {
  console.log('You Win!');
} else {
  console.log('You Lose!');
}
*/

// OR
// Ternary operators (condition ? A : B)

let result = random < 0.5 ? 'heads' : 'tails'

console.log(guess === result ? 'You Win!' : 'You Lose!');
