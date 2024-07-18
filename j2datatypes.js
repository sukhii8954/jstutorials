"use strict"; // treat all the js code as newer version 

// alert(3+3)// we are using nodejs not browser

// console.log(3+3)
// console.log("sukhman")


// types of data types in js
//  number => 2 to pow 53 
// bigint: for very large numbers for ex in trading
// String : ""
// boolean : true/false
// null : it is standalone value 
// undefined: value has not assigned for ex: let state; so state has undefined value
// symbol: (used in react to find uniqueness)


//  object:- 

// console.log(typeof null); => shows object 
// console.log(typeof undefined); => shows undefined


//************ */ datatypes conversion ****************

// d3javascripts :- 
  
// let num ="22da"
  
// console.log(typeof num)

// let intonumber =Number(num)
// console.log(intonumber)   // NaN not a number  it is also a special type 
// // indeed it oul get converted n number but its value is not a pure number
// console.log(typeof intonumber)

// "22" -> 22
// 22dc -> NAN
//  true -> 1 , false -> 0  
// null -> 0 

let  st = "sukhman"; 
  let num = Boolean(st);
//   console.log(num)

// let str = "sukhman";

// let val = 0;
// let v2 =1; 
// let value= Boolean(v2);
// console.log(num)  
 
//  0-> false 
//    1 -> true
// "" -> false 
//   "sukhman" : non empty string -> true
 
let somnum =220;
  
let converttostring = String(somnum);

// it shows value same but yes it got converted into string
console.log(converttostring)  // 220 
 console.log(typeof converttostring)   //string 
 