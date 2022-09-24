// ****** DOM MANIPULATION (IMP) ****** 
/* 

DOM stands for DOCUMENT OBJECT MODEL. 

DOM can be used to access the elements of our HTML Page.

DOM is any visible web page OR any visible web page is DOM. (IN LAYMAN TERMS)

There are some DOM Methods which we can use manipulate our HTML or to show it dynamically. 

Javascript can be dynamically used to change the content of our page. 

In simple terms, the HTML written for a specific website is its DOM. 

*/


// METHOD 1 : document.getElementById

let elem=document.getElementById("click");
console.log(elem);


// METHOD 2 : document.getElementByClassName

let elemClass=document.getElementsByClassName("container");


// METHOD 3 : .style 

elemClass[0].style.background="yellow"; 


// METHOD 4 : .classList.add & .classList.remove

elemClass[0].classList.add("bg-primary");

elemClass[0].classList.add("text-success");

elemClass[0].classList.remove("text-success");


// METHOD 5 : .innerHTML 

console.log(elem.innerHTML);


// METHOD 6 : .innerText 

console.log(elem.innerText);


console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);


// METHOD 7 : .getElementsByTagName

tn=document.getElementsByTagName('div');
console.log(tn);


// METHOD 8 : .appendChild()

createdElement=document.createElement('p');
createdElement.innerText="This is a created para";

tn[0].appendChild(createdElement); // tn[0] here is the first div.


// METHOD 9 : .replaceChild()

createdElement2=document.createElement('b');
createdElement2.innerText="This is a created bold";

tn[0].replaceChild(createdElement2, createdElement);


// METHOD 10 : removeChild(element); ----> removes an element  


// METHOD 11 : document.location;


// METHOD 12 : document.title;


// METHOD 13 : document.URL;


// METHOD 14 : document.scripts;


// METHOD 15 : document.forms;


// METHOD 16 : document.links;


// METHOD 17 : document.images;


// METHOD 18 : document.domain;

// METHOD 19 : Selecting Using Query

// querySelector ----> selects only one element 
sel=document.querySelector('.container');
console.log(sel);

// querySelectorAll ----> selects all elements present in the document 
sel=document.querySelectorAll('.container');
console.log(sel);
