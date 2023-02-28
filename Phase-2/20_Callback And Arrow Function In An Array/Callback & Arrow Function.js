// Q. Write a function to check wheather a given number is Even or Not.

/*

1. Simple Function

function isEven(element){
  if(element%2===0){
    return true;
  }
  return false;
}

console.log(isEven(2));



2. Simple Function_Return Statement

function isEven(element){
  return element%2===0;
}

console.log(isEven(2));



3. VARIABLE FUNCTION 

var isEven=function(element){
  if(element%2===0){
    return true;
  }
  return false;
}

console.log(isEven(2));



4. ARROW FUNCTION 
// An Arrow Function always requires the use of 'return' Keyword. If not, the value of the VARIABLE FUNCTION comes out to be undefined.

var isEven = (element) => {
  if (element % 2 === 0) {
    return true;
  }
  return false;
};

console.log(isEven(2));



5. ARROW FUNCTION_WITHOUT {}, WITHOUT return Keyword
// NOTE : Whenever we are using '{}', we will have to write the 'return' Keyword.

var isEven = (element) => element % 2 === 0;

console.log(isEven(2));

*/



var isEven = (element) => element % 2 === 0;

console.log(isEven(2));



// [2,4,6,8].every(isEven)   ----> PASSING A REFERENCE TO A FUNCTION
// [2,4,6,8].every(isEven()) ----> RUNNING A FUNCTION

// Looping an Array without using a Loop is done by 'every'.


var result = [2, 3, 6, 8].every(isEven);
console.log(result);



// CALLBACK FUNCTION

var result = [2, 4, 6, 8].every((e) => {
  return e % 2 === 0;
});

console.log(result);



// NOTE : Whenever we are using '{}', we will have to write the 'return' Keyword.

var result = [2, 3, 6, 8].every((e) => e % 2 === 0);
console.log(result);