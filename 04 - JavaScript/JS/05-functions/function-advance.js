//Passing functions to other functions as parameters
//called Higher Order Functions

// function laught() {
//   console.log("Ha ha ha");
// }

// function myFunction(value) {
//   value();
//   value();
// }

// myFunction(laught);

// ====================================================================================================================

//Function Expression

// let greet = function () {
//   console.log("Good Morning!");
// };

// greet();

// ====================================================================================================================

// A function that returns another function
//called Higher Order Functions

// function createMultiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// // Call the createMultiplier function and assign the returned function to a variable
// let double = createMultiplier(2);

// // Use the returned function to perform a calculation
// console.log(double(6)); // Output: 12

// ====================================================================================================================

//Arrow Functions ES6
// const addTwoNumbers = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwoNumbers(5, 4));

// ====================================================================================================================

//Arrow Functions ES6
//Implicit return

// const addTwoNumbers = (num1, num2) => num1 + num2;

// console.log(addTwoNumbers(5, 4));

// ====================================================================================================================

//Arrow Functions ES6
//One parameter Syntex

// const makeTwice = num => num;
// const makeTwice = (num) => num * num;

// console.log(makeTwice(6));















// ==========================================================
// =====                 Guess Time                   =======
// ==========================================================

// function laugh() { console.log("Ha ha ha"); }
// function callTwice(func) { func(); func(); }
// callTwice(laugh);


// function sumAll(...nums) {
//     console.log(nums);
// }
// sumAll(2, 3, 4, 5);


// function sumTwoFirst(a, b, ...rest) {
//     console.log(a, b, rest);
// }
// sumTwoFirst(1,2,3,4,5);















// ==========================================================
// =====                  Todo Time                   =======
// ==========================================================

// You are creating a notification system.

// Create a function notify that prints "Notification sent".

// Create another function sendTwice that accepts a function and calls it twice.

// Task:

// Pass notify to sendTwice and see the output.

// Write an arrow function to calculate discounted price given price and discountPercentage. 
// Print the discounted price for 500 with 10% discount.









// You are designing a shopping cart checkout. The cart can have any number of items.
// Each item has a price.

// Task:

// Write a function calculateTotal(...prices) that sums all items.

// Test with 200, 350, 150, 400.

// Modify the function to also print the most expensive item in the cart.










// You are creating a user profile:

// const personalInfo = {name: "Ali", age: 20};
// const contactInfo = {email: "ali@gmail.com", age: 21};

// Task:

// Merge both objects into a single profile using the spread operator.

// Explain which age is retained and why.

// Add a new field city while merging.