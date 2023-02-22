/*

* Reserving some space in the memory is done by declaring "Variables".

** 3 KEYWORDS : var, let and const

* In Javascript, you do not have to include any Libraries, Header Files, etc to run your code. You can just simply start writing your code in the .js File.


********* Naming Conventions For Variables *********

Q. How to name Variables in Javascript ?

1. fullName (CamelCase) (Much more READABLE, hence preferred more)
2. full-name 
3. full_name (SnakeCase)
4. FullName (These type of Definition Names are used while defining Classes & Some Other Great Things, hence not generally used for the Naming Convention of Variables.)

# Generally, a variable name is not started with an UPPERCASE LETTER. (Convention)

# SHORTCUT TO COMMENT OUT A LINE/ MORE THAN ONE LINES : (CTRL + /)



********* Reserved Keywords *********

Some words readily available in Javascript which cannot be used as Variable Names 
eg : if

*/

var fullName="Akash Patil";
var courseName="Javascript Course";
// String Variables/ String Data Type 


var isLoggedIn=true; 
var isLoggedIn=false;
// Boolean Variables/ Boolean Data Types : Specific Reserved Keywords with Specific Syntax Only used for "Switching Flip & On"


var loggedCount=34;
// Integer Variables/ Integer Data Type 
var loggedCount="34";
// String Variables

console.log(loggedCount); 
// Displaying the value stored in the loggedCount Variable
console.log("loggedCount");
// Displaying the word "loggedCount" as it is (as a string)


// There is no need to Reserve Memory in the System again & again, once reserved, just use it for the next time.
var paymentMode;
console.log(paymentMode);
// UNDEFINED Data Type
// OUTPUT : undefined

paymentMode="Credit Card";
console.log(paymentMode);
// OUTPUT : Credit Card 


var if=23;
