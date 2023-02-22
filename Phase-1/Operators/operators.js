// ****** 5. Operators in Javascript ******


// Arithmetic Operators 
var a = 100;
var b = 10;

console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);

// Assignment Operators : Used to assign a value to an another value

var c = b;
/*
c+=2;  c=c+2;
c-=2;  c=c-2;
c*=2;  c=c*2;
c/=2;  c=c/2;
*/

console.log(c);

// Comparison Operators 

var x = 34;
var y = 56;

console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// Logical Operators 

// 1. Logical AND 
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// 2. Logical OR

console.log(true || true);  // 2 Dande ----> LOGICAL OR 
console.log(true || false); // 1 Danda ----> BITWISE OR
console.log(false || true);
console.log(false || false);

// NOTE : To create MULTIPLE CURSORS ----> ALT + Click (on the position where you want to create Multiple Cursors)


// 3. Logical NOT 
console.log(!false);
console.log(!true);

// OPERATORS : Gets applied on OPERANDS 