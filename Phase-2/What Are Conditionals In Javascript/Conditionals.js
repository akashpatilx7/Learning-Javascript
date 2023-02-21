/* 

Conditionals are used to Display Messages to the Users based on some Events.

Each & everything inside the "()" should be evaluated to Boolean Values i.e to TRUE & FALSE, in order to execute the Conditionals.

{
  An Empty Block Of Code
}

*/

var temparature;

temparature=20;

if(temparature < 20){
  console.log("It's very cold outside.");
}

if(temparature === 20){
  console.log("It's OK outside.");
}
if(temparature < 30){
  console.log("It's moderate outside.");
}

else{
  console.log("It's really hot outside");
}