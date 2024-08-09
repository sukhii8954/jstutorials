// code Execution and call stack  //
  
/* whenever the javasript code runs 3 phase executes :-
--> Global execution phase  ( execute once only) whenever the code runs 
-->  memory execution ( all the variables and methods defined there)
--> executution phase  ( in this phase all variables get there values assigned and all operations and calculations are done in this phase ) .
--> and if there is any function created then its separate another execution phase would created.(new variable enviroment + execution thread).
   after the work is done of function the newly created execution context gets deleted.

*/

// call stack :- 
  
// function one(){
// console.log("one"); 
// two();
// }
// function  two(){
//    console.log("two");
//    three();
//   } 
// function  three(){
//    console.log("three");
//   } 

// one()
// two()
// three()


// --> first one() function called and put in stack , the two() is called and put in stack above one() and as three() was called within two() so it would 
// be put on the top of two ()
  /*
 |          |  
 | three()  | 
 |   two()  |   
 |  one()   |
   Global EC     
 |__________|
 */