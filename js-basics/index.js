// This is logging to the console
console.log("Hello world");
// Variables
let name = 'Mosh'; // String literal
console.log(name);

// Variables cannot be a reserved keyword
// Should be meaningful
// Cannot contain a reserved keyword
// Cannot contain hyphens

// Constant
const interestRate = 0.3; // Number Literal
console.log(interestRate);

//Primitives

// Boolean
let isApproved = true;

//Null/Undefined
let firstName = undefined;
let selectedColor = null;

// JS is a dynamic languages = values can change in run time

// Objects

let person = {
    name: 'Mosh',
    age: 30
};
//Dot Notation
person.name = "John"
//Bracket notation
let selection = 'name';
person[selection] = 'Mary';
console.log(person.name)


//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);

//Functions

function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

greet("John", "Smith"); //--> Learn Template literals

// Performing  a task
function square(number) {
    return number * number;
}

let number = square(2); //--> also works

// Calculating a value
console.log(square(2));

// Another function call
console.log('Hello');


