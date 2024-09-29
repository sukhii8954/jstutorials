//  javascript and classes 
//  it is note that js is  primarly a prototype based language.

 /* 
  ************** OBJECT  *****************
collection of properties and methods
 toLowerCase , uppercase , date , promise  are objects .

  

 ******** why use OOP  ***************
 ---> constructor function 
 ---> prototypes
 ---> classes
 ---> Instances ( new , this)
 */


//  4 pillars

/*
 Abstraction -: focuses on the essential features of an object

 Encapsulation -: wraping up the data and methods that operate on that 
 data within a single object or single unit, protects the data from externa
 access and modification , ensuring and intigrity.

 Inheritance :- mechanism where one class (subclass/derived) acq the prop & methods
 of another class(base/super class) this makes reusability  & creates a hierarchical 
 relatinshoip b/w classes.

 Polymorphism-: it means objs of diff classes can be treated 
 as if they were of the same type.It allows to write code that can work
 with diff objs of different type in a uniform way.
 */


//**********   object lieral   ******************

// const user = {
//     //   --> properties 
//     username: "sukhman",
//     loginCount: 5,
//     signedIn : true,



//     methods 
    
// getUserDetails: function(){
    // console.log("got user details form Db");
    // console.log(`username: ${this.username}`)   // this keyword()
    // console.log(this);
// }
    
// }

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this)  // --> {}    refers to global context


// ******* if want to create a struct in Db then we use constructor ********


// ****** constructor function *********

// const promiseOne = new Promise()


// new keyword -> is a constructor function()
//  from one object lierals we can create multiple instance


function userOne(username , loginCnt , isLoggedIn) {
//  -->variable
   this.username = username   //   <-- refering to argument of function
   this.loginCnt = loginCnt
   this.isLoggedIn = isLoggedIn

   this.grretings = function(){  // this is a constructor ref to the class userone 
    console.log(`welcome ${this.username}`);
   }


    //  return this // passon the object 
}

const userTwo = new userOne("histesh", 12 , true )
const userThree = new userOne("sukhman", 10 , false)


console.log(userTwo.constructor);
// console.log(userThree);


// --> instanceof operator ************





// ***** high order func ******

function add(a,b , cb) {  // it is a high order function as it accepting function (cb) as argument 
    let result = a+b; 
    cb(result);
}

add(2,4 , function(el){
 console.log(el);
});

// callback func is used to read the value , and when task taking time then we  use callback function


