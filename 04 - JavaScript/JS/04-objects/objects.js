const student = {
  name: "Ali",
  age: 13,
  cgpa: 3.44,
  city: "Lahore",
};

const students = [
  {
    name: "Ali",
    age: 13,
    cgpa: 3.44,
    city: "Lahore",
  },
  {
    name: "Umair",
    age: 24,
    cgpa: 2.44,
    city: "Lahore",
  },
  {
    name: "Talha",
    age: 22,
    cgpa: 1.44,
    city: "Lahore",
  },
];

const umtStudent = {
  name: "Ali",
  age: 22,
  hobbies: ["Traveling", "Music", "Book Reading"],
  examMarks: {
    mid: 77,
    final: 86,
  },
};

//Shoping Cart Example

const address = {
  city: "Lahore",
  degree: "BSCS",
};

//spread operator
const studentInfo = { ...student, ...address };

// console.log(studentInfo);

//object destructring

const { city, degree } = address;

// console.log(degree);

// https://api.github.com/users/abdul194

// https://randomuser.me/















// ==========================================================
// =====                 Guess Time                   =======
// ==========================================================


// const arr1 = [1,2];
// const arr2 = [3,4];
// const merged = [...arr1, ...arr2];
// console.log(merged);


// const fruits = ["apple", "banana", "cherry"];
// const [first, , third] = fruits;
// console.log(first, third);

// const user = {name: "Ali", age: 20};
// const {age, name} = user;
// console.log(name, age);



// const obj1 = {name: "Ali", age: 20};
// const obj2 = {age: 25, city: "Lahore"};
// const merged = {...obj1, ...obj2};
// console.log(merged);

















// ==========================================================
// =====                  Todo Time                   =======
// ==========================================================


// You are combining two teams for a school project:
// const teamA = ["Ali", "Sara", "Hassan"];
// const teamB = ["Zara", "Bilal"];

// Task:

// Merge both teams into a new team array using the spread operator.

// Add two more students directly while merging.

// Print the final team.






// You have a list of students’ scores:
// const scores = [95, 87, 78, 64];
// const student = {name: "Ali", age: 20, city: "Lahore"};

// Task:

// Destructure the first and last score into variables topScore and lastScore.

// Destructure name and city from the student object.

// Print all destructured variables.
