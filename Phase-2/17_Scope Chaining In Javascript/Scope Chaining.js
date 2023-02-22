/*

function abc(){
  // This is considered as an ACTUAL SCOPE in Javascript.
}

if(condition){
  // This is NOT considered as a Scope in Javascript.
}

# Loosely saying, {} represent Scope.

*/



var name="Hitesh";
console.log("Line Number 17", name);



function sayName1(){
  var name="Mr. H";
  console.log("Line Number 22", name);

  function sayName2(){
    var name="Mr. HC";
    console.log("Line Number 26", name);
  }

  sayName2();
}

sayName1();
