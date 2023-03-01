// Objects can be defined by using either var, let or const.

var user = {
  // firstName="Hitesh", ----> 1 Equation & 2 = Signs
  firstName: "Hitesh",
  lastName: "Choudhary",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
};


// Accesing & Changing the different Methods of the Object
// The '.' Feature is used to access an Object.
console.log(user.firstName);
console.log(user.lastName);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);


// Printing the Object (The Methods of the Object appear ALPHABETICALLY, while appearing in the console.)
console.log(user);

// Printing the Object, using TABLE
console.table(user);



// Q. Create an Object for an I-Phone stating its specifications.

var iPhone = {
  name: "IPHONE 13 PRO MAX",
  model: "ASDF",
  manufacturingYear: "2022",
  price: "1,23,456",
  RAM: "16 GB",
};

console.log(iPhone);
console.table(iPhone);