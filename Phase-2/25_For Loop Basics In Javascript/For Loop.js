// In a For Loop, the value that is taking your Loop forward should be incremented, No matter at which position in the loop.



// for(let i=0;i<=10;i++){
//   console.log(i);
// }



// Using a FOR LOOP on an Array
const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];

for (let i = 0; i < myStates.length; i++) {
  console.log(myStates[i]);
}



console.log("******----******");



// Use of BREAK & CONTINUE in a For Loop

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] !== "string") {
    continue;
  }
  console.log(myStates[i]);
}



console.log("******----******");



for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] !== "string") {
    break;
  }
  console.log(myStates[i]);
}