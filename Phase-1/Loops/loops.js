// ****** Loops in Javascript ******  

// 1. For Loop 

var arr = [1, 2, 3, 4, 5, 6, 7];

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}


// 2. For Each Loop (REMEMBER SYNTAX)

arr.forEach(function (element) {
     console.log(element);
})


/*   *** LET *** 

NOTE : It is preferrable to use "let" rather than "var" as using var for variable was a standard which was used in Old Javascript. Also, let is a keyword which has "BLOCK-LEVEL Scope". This helps to write more efficient code.


     *** CONST *** 

// CONST : Assignment to constant variable. 

// NOTE : CONST is used to declare such variables that you are almost sure about not to change afterwards. Even if you are going to change it, the console will throw you an error immediately after the line of code. If you have a fear of overriding a particular variable after declaring it, use CONST to declare such variables. 
*/

const ac = 0;
// ac++;
// ac+=1;
// ac=ac+1;


// 3. While Loop 

let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}


// 4. Do While Loop (NOTE : Executes Minimumly for 1 Time)

do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);
