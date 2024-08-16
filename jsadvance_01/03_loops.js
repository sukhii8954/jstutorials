// high order loops especially for arrays:-

// for of loop :-

// [ {}, {} , {}] // we can add objects in array

const arr = [2, 3, 4, 5, 6, 7, 8];

// Syntax:-
// for (const element of array) {

// }

// iterating on array
// Example:-
for (const value of arr) {
  //  console.log(` value of array is  ${value}`);
}

//  iterating on strings
const greetings = "hello code with chai";

for (const greet of greetings) {
  // if(greet==" "){  // to ignore space
  //     continue;
  // }
  //  console.log(` Each char is ${greet}`);
}

// Maps basic :- it print in order
const map = new Map();
map.set("Rampur", "uttar pradesh");
map.set("New Delhi", "Delhi");
map.set("New Delhi", "Delhi");
// map print unique values so it would not print the duplicate values
map.set("south delhi", "Delhi");

// console.log(map);

// iterating  loop on map  :-
//  we can print key and value individually of map

for (const [key, value] of map) {
  // console.log(key, '-' , value);
}

const myownobj = {
  game1: "takken",
  game2: "gta6",
};

// It gives EORROR!!! as objects are not iteratable
// for (const [key, value] of myownobj) {
//     //  console.log(key, ':' , value);
//     //gives error: not iteratable on objects
// }

// *******************************************************
// LOOP THAT CAN BE APPLY ON OBJECT :-
const anotherobject = {
  js: "javascript",
  cpp: "cpp",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in anotherobject) {
  //    console.log(key);  // it prints keys of object.
  //  console.log(anotherobject[key]); // it prints values of objects
  //  console.log(`${key} is used for ${anotherobject[key]}`);
}

// for understanding like in c++
// for (const i in anotherobject) {
// //   console.log(anotherobject[i]);
// }

// NOTE:- for in loop can also be implement on array
// but on doing console.log(key) it give 0 base indexing
// not values as we can do in "for in" loop

const tech = ["js", "cpp", "java", "ruby"];
for (const key in tech) {
  // we get 0 base indexing  key in console
  // console.log(key);
  // it will print values of keys.
  // console.log(tech[key]);
}

// Map is not iteratable by FOR IN  loop :-

// const map1 = new Map();

// map1.set('Rampur', "uttar pradesh")
// map1.set('New Delhi', "Delhi")
// // map print unique values so it would not print the duplicate values
// map1.set('south delhi', "Delhi")

//  for (const key in map1) {
// //    console.log(key);
//  }

// *********************************************************

// most useable loop in projects:-
// foreach loop is high order function

const arraylang = ["java", "c++", "python", "javascript"];

// arraylang.forEach( (item)=>{
//     console.log(item);
// })

// OR

// arraylang.forEach(function(val){
// console.log(val);
// })

// OR

// Passing function as parameter in FOR EACH loop:-

function printme(item) {
  console.log(item);
}

/*passing only ref of function not executing it
   arraylang.forEach(printme);

   NOTE:- we can pass multiple things in foreach syntax:-
    arraylang.forEach((item , index , arraycontent)=>{

    })  
*/

arraylang.forEach((item, indexvalue, arrlist) => {
//   console.log(indexvalue, item, arrlist);
});


//**********************************************************


// OBJECTS within ARRAY :- IMPORTANT!!!
const objcontent= [
     {
    lang: "javascript",
    langname: "js"
    },

     {
    lang: "ruby",
    langname: "rb"
    },

     {
    lang: "python",
    langname: "py"
    },

]

objcontent.forEach((item)=> {
    //we can target values within the object
    //  for example  we want property of object. 
  console.log(item.lang); 
//   console.log(item.langname);
})

// ********************************************************