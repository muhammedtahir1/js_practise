const textBox = document.querySelector('.calc-display');

let calculation = localStorage.getItem('calc') || '';
displayCalculation();

function operator(value) {
  calculation += value;
  console.log(calculation);
  storing();
}

function equals() {
  calculation = eval(calculation);
  console.log(calculation);
  storing();
}

// Clear button not working!!!
function clearbtn() {
  calculation = '';
  console.log(calculation);
  storing();
}

function storing() {
  localStorage.setItem('calc', calculation);
  displayCalculation();
}

function displayCalculation() {
  textBox.innerText = calculation;

}

