/*

There are 2 types of CONTEXTS : GLOBAL & EXECUTION

Global Context collects the Information about each and everything while the Execution Context is created at the time of Execution of Code.

Execution Context keeps on coming & stacking one over the other as the Execution proceeds. After the particular execution is over, the Execution Context gets destroyed.

Execution Context is created for each & every line of code & not just functions.

*/



var num = 2; // Global Context in Operation

function sayMe() {
  console.log("Say me");
} // Global Context in Operation

sayMe(); // Execution Context comes in Operation (As soon as you want to run some code)



tipper("80");

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

// The below code will run perfectly fine.
// bigTipper("200");

// function bigTipper(a){
//   var bill=parseInt(a);
//   console.log(bill+15)
// }



// The below code will NOT run !
bigTipper("80");

var bigTipper = function (a) {
  // The variable 'bigTipper' is currently UNDEFINED. So, the global context does not know about it. This concept is called as HOISTING.

  var bill = parseInt(a);
  console.log(bill + a);
};



console.log(name);
var name = "Akash"; // The variable name will be stored in the Global Context but as UNDEFINED.

// UNDEFINED is totally different from an error. 



// NOTE : The Execution Stack which is at the TOP is the only stack which my program knows about ! The Program cannot dig deep into the Execution Stack and find the inner ones.

function sayName(){
  var name="MR. A";
  console.log(name);
}

sayName(); // Here, another Execution Context got loaded up on top of 'name="Akash"'

console.log(name); // behaves according to Global Context 