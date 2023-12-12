function greet(name) {
  if (!name) {
    console.log("Hi there stranger");
  } else {
    console.log(`Hello ${name}!`);
  }
}

// greet('mehwish');

function convertToFahrenheit(celsius) {
  let fahrenheit = (`${celsius}` * 9 / 5) + 32;
  console.log(fahrenheit + 'F');
}
// convertToFahrenheit(25);

function convertToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  console.log(celsius + 'C');
}
// convertToCelsius(86);

function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    convertToFahrenheit(degrees);
  } else {
    convertToCelsius(degrees);
  }
}

// convertTemperature(86, 'F');
// convertTemperature(25, 'C');