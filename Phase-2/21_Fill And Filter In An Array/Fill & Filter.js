var testArray = [2, 4, 6, 3, 1, 5, 9, 8];


// In most of the Programming Languages, the starting range is INCLUSIVE while the ending range is EXCLUSIVE.
console.log(testArray.fill("h", 2, 5));



const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];

// After using 'filter', we get a totally new array !

/* NOTE : 

FILTER is used while deleting a particular element from the array i.e. sorting out particular element from the array.

FILTER always uses the syntax of a CALLBACK FUNCTION, ARROW FUNCTION.

*/


// const result=myNumber.filter((num)=>(num!=55));

const result = myNumber.filter((num) => num < 55);

console.log(result);