// arrays 
 

// in js array size can be change and can contain mix of differ datatypes
 let myarr = [1,2,3,4,5];
//  console.log(myarr);

//  to access array elements 
//  console.log(myarr[2]);   // syntax:- arrayname[indexno];

//  in js array copy operations creates shallow copies :- 
// shallow copy of an obj is a copy whose prop. share the same ref
// as those of the src obj from which the copy was made.

// another way to declare array and having different datatypes 

let anotherarr = ["helloo", "hello2"];
let arr = new Array(0,12,3,4,5);
// console.log(arr);
// console.log(anotherarr);

// array methods

// arr.push(6); // length can change in js 
// arr.pop(); // remove the last element means from the end of array

// arr.unshift(2); // insert at start of array which shifts all other values of array 
// arr.shift(); // pops out the element from the starting point 

// Questions we can ask in array :- 
// console.log(arr.includes(13));  // gives ans in true or false 
// console.log(arr.indexOf(4)); // tells the index of element if it is present otherwise returns -1


// **** more other methods of ARRAY ********

const newar = arr.join();
// join binds up an array into another but changes its datatype to string
// console.log(typeof newar);  // string data type but data remains same of arr
// console.log(arr);

// slice , splice :- 

console.log("A", arr);
const newarr1 = arr.slice(1,4); // includes 1 but it exclude last index

console.log( newarr1);  // [12,3,4]
console.log("B", arr);
 const newarr2 = arr.splice(1,3); // includes both first and last index
console.log(newarr2);

// imp NOTE:-  
// splice method take the ref of orignial data of array not creates copy
//after  using splice  , those elements which are inlcudes in splice 
// get removed from original array
console.log(arr); 

