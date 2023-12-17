// console.log(random);
// let result = '';

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




// 

const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
};

function choose(value) {
  let randomNo = Math.random();
  const result = randomNo < 0.5 ? 'heads' : 'tails';
  guess = value;
  console.log(guess === result ? 'You Win!' : 'You Lose!');

  if (guess === result) {
    score.wins++;
  }
  else {
    score.losses++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  console.log(score);

}




