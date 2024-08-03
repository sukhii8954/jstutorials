// objects in js in depth

// when object is formed from constructor then it is singleton object
// Object.create (this is the how obj created with constructor)

// object Literals:- 

  const obj = {
    name: "Sukhman",   // key: name , value: sukhman
    age: 20,
     location: "Delhi",
     email: "sukhpreet8954@gmail.com",
     islogged: false,
    //  we also declare value as array also 
    lastlogged: ["tuesday", "thursday"]

  } 

//   ways to access values of object

// console.log(obj["email"]);
// console.log(obj.name);

const obj1 = {
    "full name" : "Sukhpreet",
    age: 23,
}

// to access value of obj1 name which is only be access by :-
// console.log(obj1["full name"])

// symbol with objects 

const symb = Symbol("key1");

// how to add symbol in keys  in object 

// syntax:-  [symb] : "myvalues"

// const myobj = {
//     name: "sukhman",
//     [symb]: "mykeysvalue",    // [symbolname] : value so the datatype remains symbol
//     age: 23,
//     email: "sukhman0220@gmail.com",
// }

// console.log(myobj[symb]);
// console.log(typeof symb); // datatype remains symbol 


//changing the value of oject by overwriting it :-

obj.email = "sukh9808@gmail.com" ;

// console.log(obj["email"]); // overwritten

// freeze(); method to lock the value of obj so that it could not change:-
Object.freeze(obj); // now no key values of obj cant be change


obj.email = "sukhpreet8954@gmail.com"; // no changes occur as 
// values are freezed or locked above so it can't be overwrite again


// console.log(obj);
// console.log(myobj);

const myobj = {
    name: "sukhman",
    [symb]: "mykeysvalue",    // [symbolname] : value so the datatype remains symbol
    age: 23,
    email: "sukhman0220@gmail.com",
}

// *************** adding function to object *************
 

myobj.greeting = function(){
    console.log("func added");
}
console.log(myobj.greeting()); // here function not executed uska ref ayega


// NOTE:- referencing the same object we use  "this." to access particular property of object

myobj.twogreeting = function(){
    console.log(`hello user, ${this.name}`);
}

console.log(myobj.twogreeting());