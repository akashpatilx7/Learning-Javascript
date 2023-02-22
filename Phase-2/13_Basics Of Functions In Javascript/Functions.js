/*

Javascript supports Functional Programming.

DEFINITION : A Function is a block of code which is separated out so as to reuse it again & again.

*/


function sayHello(name){
  console.log("Hello there, Akash");
  // console.log("Hello there, ", name);

  console.log(`Hello there, ${name}. How are you?`);
  // The `` Syntax for using a variable in a line of code is more INJECTING FRIENDLY !

  // The above defined variable "name" is undefined as its value is never passed to the function. It is similar to a variable being defined but never being used.
}


sayHello("akash");
sayHello("Sammy");
// Calling a Function 

// sayHello;
// Referencing a Function


// Console Logging & Returning are 2 very very different things ! 

function namastey(){
  return "Hello In India";
}

// namastey(); ----> Nothing In Output
console.log(namastey());


var greetings = namastey(); 
console.log(greetings);