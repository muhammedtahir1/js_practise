// Its not working, everything is correct I checked it in console.
// document.querySelector('.btn9').innerHTML = '9b done!';


// const txt = document.querySelector('p')
// let txt = document.getElementById('dummytxt');

// function tap(value) {
//   txt.innerText = `You chose: ${value}`;
// }

const inputBox = document.querySelector('input');
const txt = document.querySelector('p')

// function namez() {
//   if (event.key === 'Enter') {

//     txt.innerText = `Your name is : ${inputBox.value}`
//   }
// }

function copy() {
  txt.innerText = inputBox.value;
}