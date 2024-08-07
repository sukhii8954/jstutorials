// this keyword and arrow functions

// this keyword tells about current context.

// for example:-

const user = {
//   username: "sukhpreet",
//   price: 1100,

//   mywelcome: function () {
//     console.log(`${this.username}, welcome to the fitness website `);
    // console.log(this);
     /* here this refer to current context 
                        which is the whole object here so the
                       whole object would be console log in output
                       with the current context it has */    
//   },
};

// user.mywelcome();
// user.username = "sukhman";

/* here we had change the context to this 
 would refer to now curr changed context.
 So after that this would refer to new changed current 
 context in object and console log whole object is we do console.log(this);
  */

// user.mywelcome();

// console.log(this);
 //here it will give {} empty object as we running in node enviroment 
//  in brower window is the global object so it refers to that in console of browser.



/* if we run this in a function it refers to various values
like global values when run in node enviroment . */


// function chaiaurcode(){
    //     let username = "sukhii"
    //     console.log(this);
    //     console.log(this.username);
    //     /* this we cant use in function to refer the value it
    //      works only in object to refer the current context.
    //      */
    
    // }
    // chaiaurcode();




    // ******************** ARROW FUNCTION ******************************
    // Arrow function :- 
    
    // one way to declare the function is shown below:-

    // const chai1 = function(){
    //     let user = "sukhman";
    //     console.log(this);
    // }
    // // chai1();
   
    //     // function() --> ()=>  // here just replace this only to make arrow function
    //  const chai = ()=> {
    //      let username = "sukhman";

    //     //   console.log(this.username);  // gives undefined as this cant work in function 
    //       console.log(this); 
    //  }
    //  chai();

    //  NOTE:- {difference between work of this keyword
    //  in normal function and arrow function}

    // here in arrow function this works differently is 
    // we want to console.log(this) it does not print various values of 
    // global obect in node enviroment instead!! it print empty
    // object.


    // PURE ARROW FUNCTION :- 

    //  1) way :-
    //     // const addnum =(num1, num2)=> {
    //     return num1+num2;
    // }
    // console.log(addnum(2,3));
         
    /*   another way to write arrow function is to write as
        implicit return. Here implicit means it consider 
        that function would return something so we dont have 
         to write return keyword for it. 
    */

    //   2) way:-
        // const addnums = (num1, num2)=> num1+num2;

    //  console.log(addnums(1,2));  // o/p: 3

        // const addnums2 = (num1,num2) => (num1+num2); 

    // NOTE:-  
    /* if we {} curly braces we have to write return keyword
     to return the value, otherwise we can () parenthesis to
      return the value without using the return keyword. */
     

    /* we use () paranthesis because  if we want to return
     the object then we cant return without capturing it
      within () */
    //without () it would show undefined for object in return
      
    //   3) way  for example :-
     
    // const values = (num3,num4) => ({username: "sukhii"});
    // console.log(values(1,2));


    // arrow functions with many other things like loops:-

    // for example: - 

    //  const arr = [2,4,5,6,7];
    // //  arr.forEach( function (){}) // normal function 
    //  arr.forEach(()=> {})  //or
    //  arr.forEach((index)=> (console.log(index*index))) // 4 16 25 36 49
     
//    *********************  IIFE ************************
//   Immediately Invoked Function Expression (IIFE) 

 /* to write IIFE function we can wrap the whole function within
  the () and execute with () write after it , many times function
  get problem with global scope so we use IIFE  to remove 
  the pollution of global scope like  variable declared at glope scope 
  */

    // IIFE  function


  (function tea(){
     //named IIFE
    console.log(`db connected`);
  })();   
  /* immediately invoked ; semicolon is imp here
      as IIFE function  dont know when to stop. */

//   we can also use arrow function to me it IIFE:-

((name)=>{
    //unnamed IIFE
    console.log(`db of sql connected ${name}`);
})('sukhman')

// ******************** END ****************************
