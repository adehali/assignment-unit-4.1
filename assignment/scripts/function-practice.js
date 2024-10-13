console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return;
}

function helloName(name) {
  return (`Hello, ${name}!`);
}

console.log('Personalized name:', helloName('Stacy')); 
// Remember to call the function to test



// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('Add two number:', addNumbers(5, 9)); 

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log('Multiply three numbers:', multiplyThree(2, 5, 3)); 

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true; 
  }
  return false;
}
console.log('I number positive?:', isPositive(8));
console.log('Number greater than zero?:', isPositive(3));
console.log('Is number positive?:', isPositive(-4));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if(array.length === 0){
    return undefined; 
}
  return array[array.length -1];
}


console.log('Last item of empty array:', getLast([]));
console.log('Last item of ["Prime", "Teacher", "Student"]:', getLast(["Prime", "Teacher", "Student"]));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(array, value) {
  for (let i = 0; i < array.length; i++){ 
    if (array[i] === value) {
      return true;
    }
  }
  return false; 
  
}

let names = ['Prime', 'Abdi', 'Aden', 'Hassan'];
console.log('Is "Aden" in the Array?: ', find(names, 'Aden'));

let number = [1, 3, 5, 7, 9];
console.log('Is "10" in the Array?: ', find(number, 10));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

  let i = 0; 
  while(i < string.length){
    return string[i] === letter

}

return false; 
}

console.log('Is "a" first letter of "aden"?: ', isFirstLetter('a', 'aden'));
console.log('Is "n" first letter of "aden"?: ', isFirstLetter('n', 'aden'));



// 9. Function to return the sum of all numbers in an array
let myArray = [2, 4, 6, 8, 10];
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
    for (let i = 0; i < array.length; i++){

    sum += array[i];
  }
    // TODO: return the sum
    return sum; 
  }
  

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(array) {
  let positives = []; 
  for (let number of array){
if (number > 0){
  positives.push(number)
}
  }
return positives; 

}

let numbers = [-9, 7, -4, 3, 0, 2, -8, 1, 5];
console.log(allPositive(numbers));

let nonPositives = [-9, -4, -8, 0];
console.log(allPositive(nonPositives));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

/* Create a function that takes a "base number" as an argument. 
This function should return another function which takes a new argument,
and returns the sum of the "base number" and the new argument */


function makePlusFunction(baseNum) {
	// This returns a function that adds the baseNum to its argument
	 return function(newNum) {
    return baseNum + newNum;
  };
}

// This creates a variable that  adds a number with a base number of 5
let addFive = makePlusFunction(5);

// Call the function to add your numbers to 5
console.log(addFive(9));
console.log(addFive(6));




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
