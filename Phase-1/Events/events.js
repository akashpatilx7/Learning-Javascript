// ****** Events In Javascript ******

function clicked(){
    console.log('The button was clicked.');
}
// NOTE : THE EVENT CALLED "CLICKED" WAS LISTENED HERE.


window.onload=function(){
    console.log('The document was loaded');
}


// Click 
firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked</b>"
    console.log('Clicked On Container');
})


// MouseOver 
firstContainer.addEventListener('mouseover', function(){
    console.log('Mouse On Container');
})


// MouseOut
firstContainer.addEventListener('mouseout', function(){
    console.log('Mouse out of Container');
})
 

let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
// Mouse Up 
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML=prevHTML;
    console.log('Mouse Up when clicked Container')
})


// Mouse Down 
firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked</b>"
    console.log('Mouse down when clicked on Container')
})
