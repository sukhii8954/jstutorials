// Global scope and local scope in function:- ***IMPORTANT!!


// global scope:
let a =10;
const b =20;

/* var c = 40;  will not use at it is not blocked scope datatype 
// can be overwritten if declared with same name in the block scope.
*/


if(true){  //block scope:
   let a = 200;
   const b =400; 
//    console.log("inner: ",a);
}
// console.log(a);

// scope level and mini hoisting in js :-
// nested scope:function ke andr function 
// closure 



function one(){
      const val1 = "one";

     function two(){
          const val2 = "two";
        //   console.log(val1);
     }
    //  console.log(val2);
      /* it gives error as val2 is of const type
                           which is limited to two() func only.
                          */
    //  two();
}

// one();

// nested scope in if else

if(true){
    const username = "sukh";
    if(username==="sukh"){
        const secondname = "man";
        // console.log(username+secondname); 
        // username for child scope is accessible 
    }
    // console.log(secondname);
     /* 2ndname is scope blocked in if child 
        if scope so it gives error here
        */
}
// console.log(username); 
 // gives error as it is accessing out of if scope

//  +++++++++++++++++  Interesting ++++++++++++++++++++++


// mini hoisting of variable and function example:-
 

addone(5); 
  console.log(addone(5)); /* here it works fine as we are not storing declaration 
              of function in any other variable so due to hoisting
              here works fine
            */

function addone(num){
    return num+1;
}

// addtwo(5);
// console.log(addtwo(5));

 /* here it gives error as we are holding function
 in a variable which cant be access before initialization
 */
const addtwo = function(num){
    return num+2;
}
