// const accId = 1220 ;
// let acceMail ="sukhpreet8954@gmail.com";
// var accPass ="0220";
// let accstate;
// /* prefer not to use var
// because of issue in block scope and functional scope
// */
// accCity ="delhi";

// // accId =2201;   // not allowed as const value cant be change
// console.log(accId);
// acceMail ="sukhman@gmail.com"
// accPass= "1111"
// accCity ="bangalore"
// console.log([accId,acceMail,accPass,accCity, accstate])  //display in form of array

//    events
// addEventListner : have so many events which can be of keyboard , mouse
//  types of keyboard events , or mouse
// timestamp : at which time that event excuted
//  defaultPrevented: we can stop default befaviour of any tag or we stop navigation also
// target: on which we are applying the event konsi img ya id se a rha h
// srcelement :
// toelement :
// offset :

// event propagation:
//    2 context lies in this event propagation :
// event bubbling {bottom to top execute hota h
//  jha event handler perform hua h then uske baad
// parent component pe perform hota hua jata h
// }  (default se use hota h)

// .stoppropagation(): yhe stop krdega event ko
// progagate hone se jisse ki voh jha event fire hua
//  h vha toh perform hoga voh bubble hokr uske upr
//  vale event pe jane se roklega .

// preventdefault(): voh event to fire hoga lakin joh
// event ki vjh se kya change ayega voh prevent hojyega
// for ex: we applied click event to navigate to
// another page ,jisse click toh hoga lakin doosre
// page pe navigate joh krna tha voh prevent hojyega

// event capturing : (top to bottom execute
//  hote h from parent to the child where the
//  event handler is actually happend on UI)

// iske liye  hm eventlistner mai value true pass krte h

// ex:-  document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault();
//     console.log("event done");

// },true);  // yhe true krne se capturing hogi
//  :-top to bottom propagate honge event ya fir hm
// e.stopPropagation() function bhi use krke defualt
//  rok sakte h bubbling vala

//  execution context

// (this varaible isme rakha jata h )
// this ki value -> window object ati h browser EC

// 2 types of EC:-
// global execution context:-
// function execution context:-

// memory creation phase :-  memory allocate hoti h joh bhi variables,
// functions declare kre h unko sirf memory declare hoti h iss phase mai

// Execution phase :-

// Example:-
// let val1 = 10;
// let val2 = 5;
// function addsum(num1, num2) {
//   let tot = num1 + num2;
//   return tot;
// }

// let ans1 = addsum(val1, val2);
// let ans2 = addsum(10, 3);

//1) first phase Global execution :-  firstly this execute and this
//  ke andr allocate krta h code ko.

// 2) memory phase:- all variables are declared in this and all assigned
// with undefined value

//   in above example:- val1 and val2 gets value - undefined
    //   then function ko memory milti h and usme defiention jati h 
    // joh function ke andr ka code hota h 
  
    //  ans1 and ans2 -: undefined value assgin hogi 

    // 3) Execution phase :- all declared variables ko value assign hogi isme 
        //  when function addsum invoke hoga :- it creates its own 
        //  execution context:-(new var enviroment + execution thread)
        //  function jitni baar invoke utni baar var enviroment bnega
        // or 2 phase bnege usme ek memory phase and execution phase  
        //  AFTER the exectution phase of functions that box separately
        // joh create hua tha voh delete hojata h
// ----------------------------------------------------------------------
//     call stack:-  
    //   1: global exectution 
        //  2: func declare hota h voh stack ke andr jyega then execute 
        //   hone ke baad stack se bhar nikal jayega  


// lecture : 30 , 31 chai aur code


// when we need to read a file from prgram:-
// context-> curnel(it takes or reads from the file and gives to the proggram)
  
// async js tutortial :- 

// settimeout runs only once after spesific time assigned in it 
// setTimeout(function(){
// console.log("sukhman")
// },2000)

    // OR  :- we can declare function before and pass the ref in settimeout
     
    //   const func = function(){
    //     console.log("sukhman")
    //     }

    //     setTimeout(func, 5000);

    // cleartimeout () :- we pass ref of particular settimeout to clear it
    // after some execution 

    //    we clearTimeout at some event happen :- example:
    //   document.querySelector('#stop').addEventListener('click',function(){
    //     clearTimeout(func)

    //    :- so it will stop to let that event happen 
    // which is set in settimeout
    //   })


    //   setInterval:- a particular event execute at particular time 
    // here after every 1s the event execute and console log print again and again
    // setInterval( function(){
    // console.log("sukhman")
    // },1000)

    //   setInterval(datefunc , 1000, "hello") :- we can also pass the
    // parameter and take parameter in func
      
    // const datefunc = function(value){
    //      console.log(value,Date.now());
    // }
    // setInterval(datefunc, 1000, "hello");


    // to stop such event :- we use clearinterval()
    // we can apply 