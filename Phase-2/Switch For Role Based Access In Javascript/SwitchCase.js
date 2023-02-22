/*

If we have MULTIPLE things to checkout & provide certain Specific Messages based on them, we use SWITCH CASE instead of IF_ELSE.


switch (key (VALUE THAT NEEDS TO BE EVALUATED)){
  case value:
    break;
  
  default:
    break;
}


Q. Create an application with the following roles : 
   admin : gets full access
   subadmin : gets access to create/ delete courses 
   testprep : gets access to create/ delete tests
   user : gets access to consume content 
   
*/

var user = "testprep";

// Concept of "FALLTHROUGH" 
switch(user){
  case "admin":
    console.log("gets full access");
    break;
  
  case "subadmin":
    console.log("gets access to create/ delete courses");
    break;

  case "testprep":
    console.log("gets access to create/ delete tests");
    break;

  case "user":
    console.log("gets access to consume content");
    break;

  default:
    console.log("Trial User");
    break;
}

// break in the case of default is OPTIONAL !

