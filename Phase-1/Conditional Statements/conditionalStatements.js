// ****** Conditionals in Javascript ******


// Single If Statement 
 
var age = 11;
if (age > 18) {
    console.log('You can drink Rasna Water.')
}


// If-Else Statement
var age=11;
if(age>18){
    console.log('You can drink Rasna Water.')
}

else{
    console.log('You cannot drink Rasna Water.')
}


// Else-If Ladder 
var age=41;

if(age>32){
    console.log('You are an adult.')
}

else if(age>26){
    console.log('You are between a kid and an adult.')
}

else if(age>18){
    console.log('You are just an adult.')
}

else{
    console.log('You are a kid.')
}

console.log('End Of Ladder')


// Q. Write a Function to tell wheather a person is Adult or kid from its age. 

function adultOrKid(age){
    if(age>32){
        console.log('You are an adult.')
    }
    
    else if(age>26){
        console.log('You are between a kid and an adult.')
    }
    
    else if(age>18){
        console.log('You are just an adult.')
    }
    
    else{
        console.log('You are a kid.')
    }
}

adultOrKid(22);
