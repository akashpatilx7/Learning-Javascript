// The Information sent to the Developer by the Database is mostly in one or other form of the array.



/*

() ----> Parenthesis
[] ----> Brackets
{} ----> Braces


Array Methods help us in iterating through the array.

*/



var countries = ["India", "USA", "Japan", "Russia"];

var states = ["Rajasthan", "Delhi", "Maharashtra", "Assam"];


// Accessing a particular Array Element
console.log(states[1]);


// Calculating the length of the Array
console.log(states.length);


// Replacing a particular Array Element
states[0] = "Punjab";
console.log(states);



var user = ["hitesh", "hitesh@lco.dev", 3, 34, true];
console.log(user);


// Deleting an Element from the Array End
user.pop();
console.log(user);



// SHIFTING & UNSHIFTING THE ARRAY ELEMENTS

// While UNSHIFTING, we have to give the value to be added at the front
user.unshift("NEW VALUE");
console.log(user);

// While SHIFTING, no need to give any value, all the elements are adjusted by themselves
user.shift();
console.log(user);



// To obtain the INDEX of a particular Array Element
console.log(user.indexOf(3));

console.log(user.indexOf("newy")); // CAN BE USED TO SHOW MESSAGE TO THE USER IF SOMETHING IS NOT PRESENT IN THE ARRAY


// To Convert a given string into an Array
console.log(Array.from("hitesh"));