/*

* The "const" keyword is used to declare only such variables that once defined, need not to be changed or should not be changed accidentaly by the programmer. (Requirement of the system not to change the value of that variable, in some cases.)

* A variable that should not get its value changed by the programmer even accidentaly should always be declared with a "const" keyword instead of "var" or "let".

*/



const uid = "abc123";

var fullName = "Akash Patil";
var email = "akashpatilap876716@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;


// A Good Practice : To name the variables in an understandable way instead of just x, y, a, b,etc.
var isLoggedInFromGoogle=false;


// ********* Taking Input From The User *********

alert("An alert can be used to take input from the user.");

prompt("A prompt can also be used to take input from the user.");

fullName=prompt("Enter Your Name : ");
// While using the above method of taking input from the user and storing it in a specific variable, we need to link the Javascript File to a Web Page i.e an HTML File. (Which is pretty annoying !)


// ********* Displaying The Information To The User *********


console.log(uid);
console.log(fullName);
console.log("Full Name Is: " + fullName);
// Usually "+" is used more than "," as it gives you more flexibility
console.log("Full Name Is: ", fullName);
console.log(email);


// ********* A Better Way Of Displaying The Information To The User : INTERPOLATION *********


console.log(`
             With Unique ID: ${uid}
             User is: ${fullName}
             and his email is: ${email}
             and uses the password: ${password}
`);
