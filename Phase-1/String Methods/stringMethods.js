// ****** String Methods in Javascript ******

let myLovelyString = "Harry is a good boy, also Harry is a good student.";

// Length
console.log(myLovelyString.length);

// indexOf
console.log(myLovelyString.indexOf("good"));
// NOTE : "indexOf" Method returns the FIRST OCCURENCE INDEX of a particular string.

// lastOccurenceOf
console.log(myLovelyString.lastIndexOf("good"));
// NOTE : "lastIndexOf" Method returns the LAST OCCURENCE INDEX of a particular string. 

// slice : returns a substring starting from a to b-1 if (a,b) is passed as an argument.
myLovelyString.slice(0, 3);

// replace : replaces a particular substring 
// NOTE : REPLACES ONLY THE FIRST OCCURENCE IN A PARTICULAR STATEMENT.
d = myLovelyString.replace("Harry", "Rohan");
d = d.replace("good", "bad");
console.log(d, myLovelyString);
