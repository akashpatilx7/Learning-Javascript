/*

********** ASSIGNMENT **********


Q. CREATE A SIGNUP FORM FOR THE LEARNCODEONLINE WEBSITE FOR AN USER HAVING THE FOLLOWING INPUT FIELDS :
firstName, 
lastName,
email,
password,
stateName,
countryName,
courseCount, 
isLoggedInFromGoogle,
isLoggedInFromFacebook

USING THE INTERPOLATION (BACKTICKS) METHOD.


*/


var firstName="Akash";
var lastName="Patil";
var email="akashpatilap876716@gmail.com";
var password="1234567";
var stateName="Maharashtra";
var countryName="India";
var courseCount=0;
var isLoggedInFromGoogle=true;
var isLoggedInFromFacebook=false;

// ********* INTERPOLATION METHOD *********

console.log(`
             The firstName of the user is: ${firstName}.
             The lastName of the user is: ${lastName}.
             The email of the user is: ${email}.
             The password of the user is: ${password}.
             The user belongs to the state: ${stateName}
             & the country: ${countryName}.
             The user has purchased ${courseCount} Courses till now.
             The user is logged in from Google is: ${isLoggedInFromGoogle}
             while logged in from Facebook is: ${isLoggedInFromFacebook}.
`);