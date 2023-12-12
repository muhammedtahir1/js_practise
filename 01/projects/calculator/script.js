let calculation = '';

function operator(value) {
  calculation += value;
  console.log(calculation);
}

function equals() {
  calculation = eval(calculation);
  console.log(calculation);
}

// Clear button not working!!!
function clear() {
  calculation = '';
  console.log(calculation);
}




