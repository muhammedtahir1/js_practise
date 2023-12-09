let calculation = '';

function btn1() {
  calculation += '1';
  console.log(calculation);
}

function btn2() {
  calculation += '2';
  console.log(calculation);
}

function btn3() {
  calculation += '3';
  console.log(calculation);
}

function add() {
  calculation += ' + '
  console.log(calculation);
}

function equals() {
  calculation = eval(calculation);
  console.log(calculation);
}


