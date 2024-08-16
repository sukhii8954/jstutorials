// control flow or logic flow
//  1) If and else statement

//  if(true){
//     // when condition is true then code inside if executes
//  }

// Ex :-

// checking conditions :-
// < , > , <= , >=, == , != , ===

// here triple equal also checks the data type of the value

// if(3!=2){  // the condition is true as 3 is not equal to 2

// }
// *********** strict value check in condtions *********

// if(2 === "2"){  // here is data type is also checked so else executed
//     console.log("successful");
// } else{
//     console.log("unsuccessful");
// }

// scope related  concept

const value = 300;

if (value > 200) {
  const power = "swim";
  // console.log(`user power: ${power}`);
}
// console.log(power);
/* due to scope block of const DT power is not accessible outside the scope 
so it would give error :power is not def.*/

// Shorthand notation  :-

const bal = 1000;
//  if(bal>600) console.log("test"); // implicit scope (maan liya h ki scope h)

//  Nesting in if else statments :-

// if(bal < 500){
//     console.log(" less than 500");
// } else if(bal< 750){
//      console.log(" less than 750");

// } else if(bal <900){
//    console.log("less than 900");
// } else {
//     console.log("less than 1100");
// }

// Real life example

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const FromEmail = true;

if (userLoggedIn && debitCard) {
  // &&-: both condition should be true to execute
  // console.log("allow to buy coures");
} else {
  // console.log("You won't have enough resources");
}

if (loggedInFromGoogle || FromEmail || guestUser) {
  // either one should be true
  // console.log("user logged In");
}

// ************************************************************

// Switch case statment to handle mulitple condtions :-

// const month =  "march"
// switch(month){
//     case "january":
//      console.log("It is january");
//      break;

//     case "feburary":
//      console.log("It is Feburary");
//      break;

//     case "march":
//      console.log("It is march");
//      break;

//     case "april":
//      console.log("It is april");
//      break;

//      default:
//         console.log("default case match");
//         break;

// }

// truthy and falsy value  :-

// const userEmail = "sukh@gmail.com"

// if(userEmail){  // considered that string is truthy statment here
//    console.log("got the mail");
// }else{
//   console.log("don't have the email");
// }

// const userEmail2 = ""
// // if string is empty means not having value  then it is considered as falsy statement
// if (userEmail2) {
//     console.log("got the mail");
// } else {
//     console.log("Don't have the mail");
// }

//  NOTE Theory :-

/* falsy values:- 
     false , 0 , -0 BigInt 0n, "" , null , undefined , NaN 

     else all others are true value 

Truthy value that may surprise :-
( value in the string are truthy values)
 "0" , 'false' , " ", [], {} , function (){} //empty func is also a truthy value
     */

// const userval = []  // array is truthy value

// if (userval.length=== 0) { // means checking the array length
//     console.log("array is empty");
// } else {
//     console.log("non empty");
// }

const obj = {};

// Object.keys()  --> get converted in array of keys of object
if (Object.keys(obj).length === 0) {
//   console.log("obj is empty");
} else {
//   console.log("not empty");
}

// ***************     NCO  **********************

// NCO Nullish Coaescing Operator (??): null undefined

let val1;

/* when we get data from db two response from it so chances are
 that  we get null response or undefiend or nothing we get so
then it check with this ?? operator  */

val1 = 5 ?? 10; // here it get 5 value means first value

val1 = null ?? 30;

/* here it get second value as if it get the null or undefined
value it do the  safety check means that if it get value 
from db then it assigns 2nd value after ?? if it not get then
null or if there is no value then undef  is assigned */

//  here it get assigned  20  as same reason as for null value
val1 = undefined ?? 20


// the first value it gets that assigned to it
val1 = null ?? 100 ?? 30  

// console.log(val1);


// terniary operator 

// condition ? true : false // it is completely diff from NCO opr.

const icetea =50
icetea >= 80 ? console.log("yes it is") : console.log("No it is not");