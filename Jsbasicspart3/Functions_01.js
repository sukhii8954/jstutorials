/* NOTE:- (topics discuss below)

functions in javascript:- 
functions with js memory mamnagement 
arguments and parameters passing in function 
returning value from function in different ways
checking condition before printing the statement from function
passing default value to function to avoid undef condition

*/


// function definiton

function myfirstfunc(){
        // console.log("first");
        // console.log("second");
        // console.log("third");
        // console.log("fourth");
}

// function reference :- myfirstfunc      { without parantheses}

// function execution :- 
myfirstfunc();

function addnum(num1,num2){
    // console.log(num1+num2) ;
}
addnum();  // NaN without arguement 
addnum(2,4);

// if we dont assgin data type with name js consider itself a data type
// addnum(3,"4"); // here js consider 3 also a string and joined it with 4

// Note:- so we have to do check if we only want to add only 
// or to perform any specific condition only.


// NOTE:- // by default anything after return in function
//  does not execute in javascript

function mysecfunc (number1, number2){
    let res = number1+number2 ;
    return res;
    //  console.log("hello");  
}

//   OR 

function mysecfunc (number1, number2){
    return number1+number2;
    //  console.log("hello");  
}

let result = mysecfunc(3,5);
// console.log(result);

// different ways to take value in a function:- 

// by using string intopolation we can pass any value
//  dynamically as an argument in func to print it.

// function loginUserMsg(username){
   
//     return `${username} just got online!`;
// }


// console.log(loginUserMsg("Sukhman"));
// console.log(loginUserMsg()); // undefined just got online!


// *****************************************************

// NOTE:-  using check statement so that it wont print
//  undefined if nul value pass in function argument.
function loginUserMsg(username){
    if(username===undefined){
        // console.log("pls enter username");
        // return;
      }
    return `${username} just got online!`;
}

// loginUserMsg("sukhpreet"); // function only execute not print here   
// console.log(loginUserMsg()); 

// OR  in professional way :- 

function loginUserMsg1(username){
    if(!username){
        // console.log("pls enter username");
        // return;
      }
    return `${username} just got online!`;
}

// console.log(loginUserMsg1());


function loginUserMsg2 (username = "sukhman"){
    if(!username){
        //  console.log("pls enter username");
        // return;
    }
    return `${username} just got online!`;
}

// console.log(loginUserMsg2()); // no value passed but default value used by func

// ***********************************************************************************************
// ***********************************************************************************************
/* NOTE:- (topics discuss below)
 "Rest" operator in function (to take n number of parameters)
 passing object in function in different ways
 passing array in function in different ways
*/


/*making function to take n number of parameters dynamically 
entered by the user :- 

/// USED IN SHOPPING CART EXAMPLE:- 
Here "spread" operator is also used as "Rest" operator 
the operator is same but its working in different condition is different.
*/

function addamount(...amount){   // ... "rest" operator pack all the input in one packet
   return amount;

}
// get output is array form in which i can apply loop and add amount
// console.log(addamount(240,400,500,300, 2020,5000));

// logical reason behind its name "rest" operator:- 

function addprice(var1,var2, ...amount1){
    return amount1;
}
// console.log(addprice(200,300,400,500));

/* output:- [400,500]
var1 and var2 takes single value each and remaining values goes in
amount1 thats why we called it a "rest" operator as rest of the 
values goes in it */

// **************************************************************************

const user1= {
     username: "sukh",
     price: 100,
}

// PASSING OBJECT IN FUNCTION AS PARAMETER:- 

/* to do a strict check we can check the datatype 
of parameter is object or not. in typscript is check automatically 
but in js we have to apply if else condition to check 
*/
function handleobj(anyobj){ // object taken as parameter name can be any.
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
    //using `` to take access to the value of object.

}

// handleobj(user1); // object passed as an argument
//  OR 

// handleobj({
//     username: "sukh",
//     price: 100,
// })

// ***************************************************************************

// PASSING ARRAY IN FUNCTION :-

const newarr= [200,300,500,600];

function takesanarray(getarray){
     return getarray[3];
}

// console.log(takesanarray(newarr));
// OR
// console.log(takesanarray( [200,300,500,600]));