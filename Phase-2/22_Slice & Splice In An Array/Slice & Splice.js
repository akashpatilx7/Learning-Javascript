var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

// In most of the Programming Languages, the starting range is INCLUSIVE while the ending range is EXCLUSIVE.

console.log(users.slice(1));
console.log(users.slice(1, 5));



// The BIGGEST DIFFERENCE between SLICE & SPLICE methods is SLICE takes a Range i.e. (Starting Point, Ending Point) while SPLICE takes a (Starting Point, Count, Replacable_Entity1, Replacable_Entity2,....)

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
users.splice(1, 3, "Hitesh", "Akash");

console.log(users);