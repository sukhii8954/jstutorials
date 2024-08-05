// "use strict"; // treat all the js code as newer version 

// // alert(3+3)// we are using nodejs not browser

// // console.log(3+3)
// // console.log("sukhman")


// // types of data types in js
// //  number => 2 to pow 53 
// // bigint: for very large numbers for ex in trading
// // String : ""
// // boolean : true/false
// // null : it is standalone value 
// // undefined: value has not assigned for ex: let state; so state has undefined value
// // symbol: (used in react to find uniqueness)


// //  object:- 

// // console.log(typeof null); => shows object 
// // console.log(typeof undefined); => shows undefined


// //************ */ datatypes conversion ****************

// // d3javascripts :- 
  
// // let num ="22da"
  
// // console.log(typeof num)

// // let intonumber =Number(num)
// // console.log(intonumber)   // NaN not a number  it is also a special type 
// // // indeed it will get converted n number but its value is not a pure number
// // console.log(typeof intonumber)

// // "22" -> 22
// // 22dc -> NAN
// //  true -> 1 , false -> 0  
// // null -> 0 

// let  st = "sukhman"; 
//   let num = Boolean(st);
// //   console.log(num)

// // let str = "sukhman";

// // let val = 0;
// // let v2 =1; 
// // let value= Boolean(v2);
// // console.log(num)  
 
// //  0-> false 
// //    1 -> true
// // "" -> false 
// //   "sukhman" : non empty string -> true
 
// let somnum =220;
  
// let converttostring = String(somnum);

// // it shows value same but yes it got converted into string
// console.log(converttostring)  // 220 
//  console.log(typeof converttostring)   //string 
 

// **************** operations *******************

  
// let str = "sukii"; 
// let str1  = "man"

// let str2 = str+str1 ; // concating the string 


// let x = 2 
//  let y = x++ 
//  // prefix opr first use the value then increase it 
// //  console.log(`x:${x}, y:${y}`)   

//  let a = 2 
//  let b = ++a 
// // postfix first increase the value then use it or print it 
//   console.log(`a :${a}, b: ${b}`);

// let val = Number("0x11") 
// // it converts by hexadecimnal conversion   1* 16^1 +  1*16^0  =17 0x indicates its a decimal no
// console.log(val)


// ******************** comp of datatypes in js *****************
  
  // comparison and equality check are different in js 
  // ex:- 
   
  // console.log(null==0);
  // console.log(null>=0);  // it convert null = 0 here 


  // strict check  we use ===
    
  console.log("2"===2) ;// here it strictly check the value and its datatype also
  console.log("2"==2); // here it convert string into int and gives true 


 
