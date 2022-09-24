
// ****** Array Methods ******

// NOTE : Array Methods are simply Functions that can be applied on the array to make our work simple. 

let myArr = ["Fan", "Camera", 34, null, true];

// Length : CALCULATES & RETURNS THE LENGTH OF THE ARRAY 
console.log(myArr.length);

// Push : PUSHES THE GIVEN ELEMENT IN THE ARRAY AT LAST POSITION
myArr.push("Akash");

// Pop : POPS OUT THE LAST ELEMENT IN THE ARRAY 
myArr.pop();

// Shift : REMOVES FIRST ELEMENT OF THE ARRAY ()
myArr.shift;

// Unshift : PUTS THE LAST ELEMENT OF THE ARRAY AT THE FIRST POSITION OF THE ARRAY 
myArr.unshift;

// console.log(Arrayname.unshift); : RETURNS THE LENGTH OF THE NEW ARRAY WHICH IS 1 MORE THAN THE ORIGINAL ARRAY AS WE ARE PERFORMING "UNSHIFT OPERATION".
console.log(myArr.unshift);

// toString(); : CONVERTS THE WHOLE ARRAY ELEMENTS INTO A SINGLE STRING 
myArr.toString();

// sort() : SORTS THE ARRAY ELEMENTS IF THE ARRAY ELEMENTS ARE NUMBERS BY FIRST CONVERTING ALL OF THEM INTO STRINGS AT FIRST & THEN CHECKING THEIR ORDER ACCORDING TO DICTIONARY. 
myArr.sort();
