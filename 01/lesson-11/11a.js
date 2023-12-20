// ARRAY
let nums = [10, 20, 30];

// nums[2] = 99;
// console.log(nums);

// 1. to get the last value of an array
function getLastValue(arr) {
  let lastIndex = arr.length - 1;
  // console.log(arr[lastIndex]);
}

getLastValue([1, 20, 22, 24, 5]);


// 2. to swap the 1st & last array element
function arraySwitch(arr) {
  let a, b;
  a = arr[0];
  b = arr[arr.length - 1];

  arr[0] = b;
  arr[arr.length - 1] = a;

  // console.log(arr);
}

arraySwitch([1, 2, 3, 4, 5]);


// 3. function to add an array and increase each element by 1
function addOne(arr) {
  result = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    result.push(arr[i] + 1);
  }
  // console.log(result);
}

addOne([10, 20, 30]);


// 4. function to add an array an increase each element by NUM

function addNum(arr, num) {
  result = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    result.push(arr[i] + num)
  }
  // console.log(result);
}

addNum([1, 2, 3], 100);


// 5. function to add 2 different arrays
function addArrays(arr1, arr2) {
  result = [];

  for (let i = 0; i <= arr1.length - 1; i++) {
    result.push(arr1[i] + arr2[i])
  }
  // console.log(result);
}

addArrays([1, 2, 3], [1, 2, 3]);

// 6. how many numbers of an array are greater than 0
function countPositive(nums) {
  let result = 0;

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] > 0) {
      result++;
    }
  }
  // console.log(result);

}
countPositive([1, -2, -5, 10, -8]);


// 7. Object with min & max element of an array
function minMax(nums) {
  let obj = {
    min: null,
    max: null
  };

  for (let i = 0; i <= nums.length - 1; i++) {
    const value = nums[i];
    if (obj.min === null || value < obj.min) {
      obj.min = value;
    }
    if (obj.max === null || value > obj.max) {
      obj.max = value;
    }
  }
  // console.log(obj);

}
minMax([-5, 3, -2, 70, 100])
minMax([])
minMax([3])

// 8. How many times each string appered in an array

function countWords(words) {
  const obj = {};

  for (let i = 0; i <= words.length - 1; i++) {
    const value = words[i];

    if (!obj[value]) {
      obj[value] = 1;
    } else {
      obj[value]++;
    }
  }
  // console.log(obj);
}

countWords(['apple', 'apple', 'grape', 'apple', 'orange'])

// 9. to check if a string is inside an array or not
// and to display its index value, if the string is repeated multiple times, console the first appearence

let str = ['hola', 'love', 'search', 'beautiful', 'search'];
let index = -1;
for (let i = 0; i <= str.length - 1; i++) {
  if (str[i] === 'search') {
    index = i;
    break;
  }
}
// console.log(index);

/*
10. create a function that takes 2 parameters, an array & a word.
Search the given word in the array. Display the first appearenc 
with its index value.
*/

function findIndex(arr, word) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      index = i;
      break;
    }

  }
  // console.log(index);
}

findIndex(['black', 'green', 'white', 'blue', 'green'], 'green');

// 11. To remove a particular string in an array (egg)
//    to prevent modifying the original array, we need to create
//       a copy of the original array using .slice() 
function removeEgg(food) {
  let result = [];
  let count = 0;

  // let copyFood = food.slice();
  // let reverseFood = copyFood.reverse();  (Or) 
  let reverseFood = food.slice().reverse();

  for (let i = 0; i < reverseFood.length; i++) {

    if (reverseFood[i] === 'egg' && count < 2) {
      count++;
      continue;  //it ends the current iteration, & goes to next iteration 
    }
    result.push(reverseFood[i]);

  }
  // console.log(result.reverse());  //to reverse the array -> .reverse()
  // console.log(food);
  // console.log(copyFood);
  // console.log(reverseFood);
}

removeEgg(['egg', 'apple', 'egg', 'egg', 'orange']);


// 12. FizzBuzz problem -> NICE

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    // console.log('Fizz');
  }
  else if (i % 5 === 0) {
    // console.log('Buzz');
  }
  else {
    // console.log(i);
  }
}

// 11W


