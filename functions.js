// Similar to methods, but...
// Functions do not necessarily need to be tied to an object

// 1. NAMED FUNCTIONS
// Needs function keyword - indicates whatever comes next is a function
// Also need to give a name if want a named function
// Unlike Java, don't need to specify return type...

// A function that prints out a message "Good morning!"
function greet() {
    console.log("Good morning!");
}
// Call/invoke the function (execute the code defined inside greet function)
greet();

console.log("\n");

// A function that prints out a greeting based on time of day
function greetTime(timeOfDay) {
    console.log(`Good ${timeOfDay}!`);
}
// Call/invoke the function
// Pass in argument (time of day)
greetTime("morning");
greetTime("afternoon");

console.log("\n");

// A function that prints out a personal greeting based on time of day
function greetTimeName(timeOfDay, name) {
    console.log(`Good ${timeOfDay}, ${name}!`);
}
// Call/invoke the function
// Pass in arguments (time of day and name)
// If pass in extra arguments, it will just ignore
// If any arguments omitted, that argument will be 'undefined'
greetTimeName("morning", "Bob");
greetTimeName("afternoon", "Emma");

console.log("\n");

// Using return
function greet(timeOfDay, name) {
    return `Good ${timeOfDay}, ${name}!`;
}
// When call the function, it gets stored in a variable
const greeting = greet("morning", "Bob");
// Then gets printed out using console.log
console.log(greeting);

// **********************************************************************

// NOTES

// Named functions

// Name, parameters, body...

// We can call the function before we've actually defined it
// Concept of 'hoisting' when JS interpreter runs
// Reads through file and hoists all of the function names - these get brought to the top of the file - one scan through to read, and another scan through to execute
// So any named function can be accessed before it's declared, in that way
// Hoisting can also be applied to variables - but only those with the var keyword

// Named functions are actually not that common
// Another 2 ways of writing out functions which are more common

// **********************************************************************

// 2. ANONYMOUS FUNCTIONS

// Strings, booleans, etc - first order objects, can be passed as arguments
// Functions are also first order objects in JS - so things we can do to string, number, boolean, can also be done with functions

// Declaration of an anon function is same as with named function - but one significant difference...
// Instead of naming the function, we're storing the function in a variable
// Is better, as allows us to control the scope of our function!

// This function has no name - i.e. anonymous
// Have no way by which we can refer to it yet
// function(number1, number2) {
//     return number1 + number2;
// }
// But because a function is a first order object, it can be stored in a variable
const sum = function(number1, number2) {
    return number1 + number2;
}
// So now this function is stored in sum variable
console.log(sum);  // Tells us it's a function...
// So we can call it and pass arguments
console.log(sum(5, 4));  // Prints out 9 (i.e. 5 + 4)

// Note that hoisting no longer works here!

// In JS, we can pass a function into another function...
// (e.g. dark mode button on assessment centre website)


// **********************************************************************

// 3. ARROW FUNCTIONS
// Introduced with ES6 (2015) spec

// Defined in similar way to anon functions but with another signif difference
// Still stored in variables
// But instead of function keyword, goes straight to params and replace function keyword with arrow => then return whatever we want to return...
const multiply = (number1, number2) => {
    return number1 * number2;
}
// Return in the same way as anon function
console.log(multiply(5, 5));

// Arrow function - implicit return - i.e. allows us to take out function keyword and brackets, and put onto just the one line - neater!
// Can only use for simple expressions - if more complex, will still need multiline block
const multiplyOneLiner = (number1, number2) => number1 * number2;
console.log(multiply(5, 4));
