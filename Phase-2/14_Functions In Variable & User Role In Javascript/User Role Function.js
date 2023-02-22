/*

In majority of the functions, we do not do a console.log, instead we usually return a value.

Q. Define a function that can answer the role of an user. An user can be on the following roles :
   admin - with all access 
   subadmin - with access to create/ delete courses 
   testprep - with access to create/ delete tests
   user - consume all content 
   other - trial user

   Input : getUserRole(name, role);

*/



function getUserRole(name, role) {

  /* 
  
  # Using a variable to declare a function
  var getUserRole=function(name, role){

  }


  # Using an ARROW FUNCTION to declare a function
  var getUserRole = (name, role) => {

  }

  */


  switch (role) {
    case "admin":
      return `${name} is an admin with all access`;
      break; // This is not neccessary ! (After a RETURN STATEMENT, the rest of the code never executes. So)

    case "subadmin":
      return `${name} is a subadmin with access to create/ delete courses`;
      break;

    case "testprep":
      return `${name} is a testprep with access to create/ delete tests`;
      break;

    case "user":
      return `${name} is an user to consume content`;
      break;

    default:
      return `${name} is a trial user`;
      break;
  }
}



// getUserRole(name, role); ----> A function call just returns us with a value. It does not put anything on to the console.


console.log(getUserRole("Akash", "admin"));


// Using a Variable to print a Function
var getRole = getUserRole("Karan", "subadmin");
console.log(getRole);
