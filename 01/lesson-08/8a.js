let product1 = {
  name: 'football',
  price: 4050
};
// product1.price += 500;  -> to change object value
// product1['delivery-time'] = '3days';   -> to add another pair to an object

let product2 = {
  name: 'football',
  price: 4050
};

function comparePrice(p1, p2) {
  console.log(product1.price < product2.price ? 'basketball is cheap' : 'football is cheap')
}

// comparePrice(product1, product2);

// console.log(product1, product2);

function isSameProduct(product1, product2) {
  // if(product1.name === product2.name &&
  //     product1.price === product2.price){
  //   return true;
  // } else{
  //   return false;
  // }

  console.log(product1.name === product2.name &&
    product1.price === product2.price ? true : false);
}

// isSameProduct(product1, product2);
// console.log(isSameProduct(product1,product2));

// to convert a string to lowercase
// console.log("Good MORNING SUNSHINE".toLowerCase());

// to repeat a text multiple times
let text = "test";
let result = text.repeat(4);
// console.log(result, 'Hello Love'.repeat(5));


// Local Storage
// let key = prompt("enter a key to store");
// let value = prompt("enter a value to be stored");

// localStorage.setItem(key, value);

localStorage.setItem('name', 'KingTahir');

// console.log(localStorage.getItem(rich));