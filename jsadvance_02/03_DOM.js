//      adding list item in ul by wrapping up in function
//  so that we can call and pass value to it as many 
//  time as we want.

function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  const ul = document.querySelector(".language");
  ul.appendChild(li);
}

addLanguage("c++");
addLanguage("python");
addLanguage("Typescript");


// optimal way to append 

const newfunc = (langName)=> {
   const li = document.createElement("li");
   li.appendChild(document.createTextNode(langName));
   const ul = document.querySelector(".language").appendChild(li);
} 
newfunc("golang"); 
newfunc("R"); 


//**************    Editing value in DOM  **************
// //selected 2nd language python here from list means taking a reference:-

const secondlang =document.querySelector("li:nth-child(2)")  

//  creating new list element to add
const newli = document.createElement('li')

// newli.appendChild() // ANTOHER way to add,
// OR:- 

newli.textContent = "Mojo"
//we added new list text now we replacing with python list item with method replaceWith
secondlang.replaceWith(newli);


// Edit another way :- 

const firstlang = document.querySelector("li:first-child")
firstlang.outerHTML= '<li>TypeScript</li>';




// ********** removing element in html ***********8

const lastlang = document.querySelector('li:last-child')
// lastlang.remove()  // R would remove 

const randomlang = document.querySelector('li:nth-child(3)');
// randomlang.remove()  // python would remove