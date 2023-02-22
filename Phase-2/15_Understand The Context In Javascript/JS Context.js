/*

Javascript has a Bigger Context in which everything resides. In case of a window.variable_name, the Bigger Context is Window.

NOTE : The Global Context differs a bit while we execute the code in a Browser & in a Node Environment. But still, the Global Context is always present there.

IMP : In a Javascript Engine, there always needs to be a context ! 

All the declared things in Javascript are being registered inside that context. 

IMP : We call the Global Context by different names in different engines.

Local Storage is a BROWSER RELATED CONCEPT. While using the local storage, we always check for the availability of the window in the browser.

*/



sayHello();

function sayHello() {
  console.log("Hello");
}



var myName = "Akash";

if (myName === myName) {
  console.log("This is a true statement");
}

if (myName === window.myName) {
  console.log("This is again a true statement");
}