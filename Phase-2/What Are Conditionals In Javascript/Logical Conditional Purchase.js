/* 

A User is allowed to make a purchase for a Particular Course only when he is : 

logged in 
email verified 
cardinfo - valid 

If any one of the above field is missing, stop the purchase of a Particular Course for a user.

*/

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

// if(isLoggedIn){
//   console.log("Logged In Successfully");
//   if(isEmailVerified){
//     console.log("Email Verified Successfully");
//     if(cardInfo){
//       console.log("You can do purchase for a Particular Course");
//     }
//   }
// }



if(isLoggedIn && isEmailVerified && cardInfo){
  console.log("You can do purchase for a Particular Course");
}

else{
  console.log("You CANNOT do purchase for a Particular Course");
}