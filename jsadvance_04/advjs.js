// events listeners

// best approach 


// attachevent 
// jQuery - onEventlistener

//  events to work on :- 
// type , timeStamp , defaultprevented 
// targt , toElement , srcElement, currentTarget
// clientX , clientY , screenX ,screenY , offset, altKey ,
//  ctrlKey , shiftKey , keyCode


// document.getElementById('imgs').addEventListener('click',(e)=>{
//     console.log("clicked inside ul");
// },false) // third parameter is by default is false


// document.getElementById('owl').addEventListener('click', (el)=> {
//     console.log("owl clicked");
// }, false) 

// Event propagation:-  
// moving from inside element to outside element :-

//  ********* bubbling mode *********

//  if we write false or nothing bydefault 3rd parameter would be false so,
// on clicking owl img output would be :- 
// owl clicked 
// clicked inside ul 

// moving from outside to inside the element :- 

//  ********* capturing mode  **************

// if we write true :- 
// output :- 
// clicked inside ul
//  owl clicked


// if we want inner element separate from outside element on performing event
// we can use stopPropagation(); 



//  *** outer element

// document.getElementById('imgs').addEventListener('click',(e)=>{
//     console.log("clicked inside ul");
// },false) // third parameter is by default is false


//  *** inner element

// document.getElementById('owl').addEventListener('click', (el)=> {
//     console.log("owl clicked");
//     el.stopPropagation();
// }, false) 


//  preventing default behaviour on clicking :- 

document.getElementById('google').addEventListener('click', (e)=> {
    // console.log("google clicked")
    // e.stopPropagation();
    e.preventDefault();   // using this to open google 
})



// ******* small project related to these images ******

document.querySelector('#imgs').addEventListener( 'click' , (e)=> {
    // 1st approach :-

     // here removeimg got the li acess inside the ul
    // console.log(e.target)
     // getting parent elememt by clicking on it
     //  we dont want to remove whole ul by clicking on li 
    //   applying strict check here to only remove img 

     if(e.target.tagName === 'IMG'){
         let removeimg = e.target.parentNode
         removeimg.remove();
     }
     

    // 2nd approach :-

   // getting ul from li  by writingn this down below:- 
    //  getting removeimg ka parent node which is  ul 
    // removeimg.parentNode.removeChild(removeimg);
})

// ***************************************************
// THE END