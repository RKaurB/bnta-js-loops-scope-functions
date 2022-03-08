// JS doesn't have same concept of encapsulation as Java
// So need to use scoping to mimic that behaviour

// Create array of numbers
numbers = [1, 2, 3, 4, 5];

// Create numberToPrint variable and initialise to zero
// Defined at same level as the for loop, below - so is in scope for everything within the for loop as well
// let numberToPrint = 0;
// Will throw a reference error, as not defined
// numberToPrint;
// However, this would work (a side effect of lexical scope)
// Declaring but not initialising the variable - able to do this, because have declared its scope at the same time (same as saying = null)
// let numberToPrint;
// Constant - can't reassign if declared a const
// const numberToPrint = 0;
const doubleNumbers = [];

// For of loop
// For each number in numbers array...
// (Note: numbers here is a placeholder for items in the array
// Don't need to access it outside of the loop)
// for (number of numbers) {
//     console.log(`The value of numbers inside the loop is ${number}`);
// }

// Keyword let restricts the variable scope
for (let number of numbers) {
// for (const number of numbers) {    
    // numberToPrint is assigned above, here we are reassigning it
    numberToPrint = number;
    // console.log(`The value of numbers inside the loop is ${number}`);
    // console.log(`The value of numberToPrint inside the loop is ${numberToPrint}`);
    doubleNumbers.push(number * 2);
}

// We don't want number to exist outside the loop
// Block scope = limited to the block in which something is defined
// Because variable above is now restricted (block scope), this will result in an error
// ('ReferenceError: number is not defined')
// console.log(`The value of number outside the loop is ${number}`);
// console.log(`The value of numberToPrint outside the loop is ${numberToPrint}`);
console.log(doubleNumbers);


// Note: Number isn't actually escaping from our loop, as the variable will still throw a reference error if we try to print it here
// console.log(number);
// But what this does mean is that we can declare a variable at some level, manipulate it lower down inside the loop (or inside an if statement if we need to, and we still have access to that variable).

// Lexical scope = once we declare a variable, it is in scope for everything that's at the same level, and everything that's at a lower level

// var (similar to let, but with slight difference - older)
// const
// let