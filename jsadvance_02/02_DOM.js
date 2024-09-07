//  create a new element in DOM --> relations 

// const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);  

// we get html collection which is type of array
// console.log(parent.children[1].innerHTML);

// for(let i =0 ; i <parent.children.length; i++){
//     console.log(parent.children[i].innerHTML);
// }

// parent.children[1].style.color = "aqua";
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);


// getting parent from child
// const dayOne =  document.querySelector('.day');
// console.log(dayOne);  
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling); 
// first child was monday next will be tuesday




// console.log("NODES: ",parent.childNodes);


// *******************************************************

// --> creating  elements in js

// const div = document.createElement('div')
// console.log(div);
// const heading = document.createElement('h1')
// console.log(heading);


// adding properties in this div element

// div.className = "main"
// div.id = Math.round(Math.random() *10+1) // unique no would be assign as ID


// custom attributes set aise krte h :-

// div.setAttribute("title", "chai aur code");
// div.style.backgroundColor="green";
// div.style.padding = "20px";

// NOTE:-
//  Attaching an element to DOM page to display:- 

// div.innerText = "chai aur code";

//  OR

//  const addText =document.createTextNode("chai our Code");
//  div.appendChild(addText);

//  document.body.appendChild(div);


//  we can wrap the above whole div in function and 
// can pass arguments in it 