shoppingList = ["milk", "hummus", "bread", "apples", "coffee", "biscuits"];

// Print first item in shopping list array
// console.log(shoppingList[0]);
// Print second item in shopping list array
// console.log(shoppingList[1]);


// FOR LOOPS

// For everything that's in this list, loop through and print to terminal...
// Two ways we can write a for loop
// 1. Classic for loop
for (i = 0; i < shoppingList.length; i++) {
    // console.log(shoppingList[i]);
}
// 2. For of loop
// Note: item here is a placeholder
for (item of shoppingList) {
    // console.log(item);
    console.log(item.toUpperCase());
}

// Demonstrate problem re scope
// ie. variable scope = scope/range of a variable
// A variable's scope determines where it can be accessed or reassigned from, or even if it can be reassigned at all.
// E.g. shoppingList is a global variable - can be used from anywhere else in the programme.
// 