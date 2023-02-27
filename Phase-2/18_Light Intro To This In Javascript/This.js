// THIS keyword shows what the Global Context holds & what properties are inside it, currently.

console.log(this); // This line of code will return an "Empty Scope ({})" in a NODE ENGINE whereas a Global COntext i.e. WINDOW in the BROWSER

// NOTE : Global Context differs according to the situation.


var game = "basketball";

function sayName() {
  var name = "Hitesh";
  console.log(this);
}

sayName();