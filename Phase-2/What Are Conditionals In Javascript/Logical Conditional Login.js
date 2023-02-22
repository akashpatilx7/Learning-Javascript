/*

Allow the User to access the course if he is: 

logged in from email
logged in from facebook
logged in from google

*/


var email;
var facebook;
var google;

// if(email){
//   console.log("Logged In Email");
// }

// if(facebook){
//   console.log("Logged In Facebook");
// }

// if(google){
//   console.log("Logged In Google");
// }

if(email || facebook || google){
  console.log("Logged In Successfully");
}