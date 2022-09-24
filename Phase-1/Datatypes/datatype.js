// ****** 4. Datatypes in Javascript ******


// Numbers
var num1 = 455;
var num2 = 56.76;

// Strings
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects (KEY-VALUE PAIRS)
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
console.log(marks);
// NOTE : Javascript is a FORGIVING Language. It does not bother so much about you are giving semicolon or not.


// Booleans
var a = true;
var b = false;
console.log(a, b);

// Undefined 
/* 
(Wo chiz, jiske andar koi value hi nahi hain !): Even if, I do not define a variable while declaring it, i.e. just declare it, then also the value of the variable is considered to be undefined.
*/


var und = undefined; 
// Bataya hi nahi ki iske andar kya likna hain, bs banake chhod diya hain !
console.log(und);

/*
var und;
console.log(und); 

The above code will also give the same output as that of the first code.
*/

//NULL
/* 
Main khud keh raha hu, ki iske andar kuch mat rakho !
*/

var n = null;
console.log(n);


/*
At a very high level, there are two types of data types in Javascript :
1. Primitive Data Types : undefined, null, number, string, boolean, symbol

2. Reference Data Types : Arrays, Objects
*/

var arr = [1, 2, "bablu", 4, 5]; // NOTE : Indexing is "ZERO BASED"
console.log(arr);
