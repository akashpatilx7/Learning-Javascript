// ****** Set Timeout & Set Interval ******


// *** Arrow Functions *** (Just a DIFFERENT WAY to write FUNCTIONS)

function sum1(a,b){
    return a+b;
}

sum1=(a,b)=>{
    return a+b;
}

// Both the above written functions are exactly same, just having different ways/ syntaxes of writing.



logkaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> Set Timeout Fired </b>"
    console.log("I am your log")
}


setTimeout(logkaro, 2000);
// First Argument ----> Function to be executed.
// Second Argument ----> Time after which the Function is to be executed.


/*
NOTE : 
          SET TIMEOUT     ----> TO SCHEDULE A TASK 
          SET INTERVAL    ----> TO SCHEDULE A TASK REPEATEDLY  
*/


clr=setInterval(logkaro,2000);
// Note : Here, clr is an ID in which a setInterval Function is put which can be passed to clearInterval() to clear the previously Set Interval.

clr=setTimeout(logkaro,5000);
// Note : By passing this clr to clearTimeout(), we can clear the previously set Timeout.


// SYNTAX : clearTimeout/clearInterval ke PARAMETERS main woh pass krna padta hain jo setTimeout/ setInterval return kr rha hain !

