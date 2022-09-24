// ****** Dates in Javascript ****** 


// NOTE : The various methods for Dates can be used from the internet resources. So, no need to remember that.

let myDate = new Date(); //NOTE : "new" keyword is used to create a new date. 
console.log(myDate);


// getTime : gives the time by converting it to SECONDS 
console.log(myDate.getTime());


// getFullYear : gives only the current year 
console.log(myDate.getFullYear());


// getDay :  gives a value from 0 to 6 for respective Days Of Week STARTING FROM SUNDAY. 
console.log(myDate.getDay());

/*
SUNDAY - 0
MONDAY - 1 
TUESDAY - 2
WEDNESDAY - 3
THURSDAY - 4
FRIDAY - 5 
SATURDAY - 6 
*/

console.log(myDate.getMinutes());
console.log(myDate.getHours());
