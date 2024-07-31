// data types preview as per interview prepration
//   premitive data types and non- primitve data types

// primitive :- (call by value)

//  string , number , boolean , null , undefined , symbol , BigInt

// Reference ( Non premitive ):-  are those whose memory
//  ref are directly allocated to another vale

// Array , objects ,functions 
 

// primitive :- 
//  js is dynamically typed lang,such that we dont have to write data type 
// type checking occurs at runtime, and variables do not have a fixed type 
// that is enforced by the compiler.  we can declare a variable without 
// specifying its type, and it will be assigned a type based on the value
//  assigned to it.

// both int and float values includes in number 
// const score = 100; 
// const val = 100.4; 

// const logornot = false; // boolean type 
// const temp =null; 
    
// let userEmail ;  // undefined value 


// // if we pass the same value in 2 different symbol we get different results 
// const  ids = Symbol('sukhii');
// const anotherId = Symbol('sukhii');

// console.log(ids===anotherId);  // gives false 


// const bignumber = 2030400201011023n;

// console.log(typeof(bignumber)); 
 // by putting n with the above number it becomes too large number
//   and gives datatype bigint 



// array

//  const DC = ["soanpari", "shaktimaan", "power rangers"];

//  objects 

// const objs = {
//     name: "sukhman",
//     age: 20, 
//     enrolnum: 1181,
//     isloggedin: true,
// }

// functions 

// const ismyfunc = function(){
//  console.log("value");
// }

// ismyfunc();

// console.log(typeof (DC))


// stack ( primitive  types) 
// :- means whenver stack memory is used then  the variable we  declared we get the copy of it.

//  and heap memory  (non - primitve types)
// :- when heap memory got used means we got the reference to the original declared , so the changes are done in reference also get changes in original value

 
// stack memory example :-
let myytname = "sukhiiyt"; // this goes in stack memory
 
let anotheryt = myytname;  // here copy is created in stack not original value ref is passed 
anotheryt = "pythonyt";

console.log(anotheryt);
console.log(myytname);


// heap memory 

let user1 = {
     email: "sukh8954@google.com",
     upiId : "89547@pytes",
}


// user1 get direct ref to the data defined in the 
// object which is stored in heap memory. 

let user2 = user1; // variable declared in stack but
// value it get it from the reference of og values of user1

// now whatever changes done in user2 will reflect in user1

user2.email = "sukhpreet9808@gmail.com";

console.log(user1.email);
console.log(user2.email);


















