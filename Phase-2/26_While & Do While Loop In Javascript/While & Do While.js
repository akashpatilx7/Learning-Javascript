const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];

// NOTE : AS SOON AS THE SCOPE IS OVER, 'let' IS FREED UP FROM THE MEMORY.

// let i=0;

// while(i<myStates.length){
//   console.log(myStates[i]);
//   i++;
// }



// There is NO PROBLEM in declaring the same variable again if we have declared it using 'let'.



let i = 0;

do {
  console.log(myStates[i]);
  i++;
} while (i < myStates.length);



// NOTE : The 'DO WHILE' Loop runs atleast for 1 Time !

let j = 20;

do {
  console.log(i);
  i++;
} while (i < 10);


// Confusing Case Of For Loop 

var k = 0;

for (;;) {
  if (k > 3) {
    break;
  }
  console.log(k);
  k++;
}