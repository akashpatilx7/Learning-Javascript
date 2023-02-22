/*

Coercion is the Awkward Behaviour of Javascript when it does not really know the Specific Datatype of a Particular Variable.

# Javascript does not know how to add a NUMBER & a STRING. So, sometimes it assumes the datatypes of some variables on its own.

*/

console.log(2 + "2");



var user = "2";

if (user === 2) {
  
  // === strictly checks the Datatypes on the either side of it !
  // == loosely checks the Datatypes on the either side of it ! (COERCION)

  // == 2 means just a loosely 2, either a STRING 2 or a NUMBER 2 !
  // === 2 means STRICTLY a NUMBER 2 !

  console.log("Condition Is True");
}
