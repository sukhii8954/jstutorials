//  prototype in javascript

// function multiByFive(num) {
//   return num * 5;
// }

// multiByFive.power = 10;
// console.log(multiByFive(5)); // 25
// console.log(multiByFive.power); // 2
// console.log(multiByFive.prototype); // {} --> it refers to "this" by default context

// // function is a function also and also a object
// // properties inside func make it bahave like function also function behave as obj

// function create(username, score) {
//   this.username = username;
//   this.score = score;
// }

// function --> object --> null

// declaring function holding properties of object (which are in prototype of browser)

// create.prototype.increment = function () {
//   this.score++;
// };
// create.prototype.printMe = function () {
//   console.log(`price is: ${this.score}`);
// };

// const chai = new create("user", 25);
// const coffee = new create("coffee", 250);

// chai.increment();
// chai.printMe();

// console.log(chai)

/* now how the function which score have to be incremented ??

 whichever called it inscrease those score --> so use  "this.score"

new keyword :- what it does behind the scenes

 A new object is created , the new keyword initiates the creation 
of new js object.

A prototype is linked , the newly created object gets linked to the prototype
property of the constructor function. This means that it has access to 
properties and methods defined on the constructor's prototype */

// Note:-  js give constructor func through new keyword.
/* 
The constructor is called: The constructor function is called with
 the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function
 has been called, if it doesn't return a non-primitive value
(object, array, function, etc.), the newly created object is returned.

*/









// ************************************************************

// **************  Prototype **************


//array
let  myHeros = ['spidermon' , 'batmon'];



// // object
let heroPower = {
    spidermon: 'sling',
    batmon: 'flying',

      getSpiderPower: function(){
        console.log(`spidy power is ${this.spidermon}`);
      }
}


// injecting  own method in object properties :- 

Object.prototype.sukhman = function(){
    console.log(`sukhman is present in all objects`);
}


Array.prototype.heySukh = function(){
    console.log("sukhii says hello");
}
// functions---> object ---> null
// array--> object---> null


// heroPower.sukhman();


/* NOTE:
as array will also access to object methods this sukhman will also 
 work with array also */

// myHeros.sukhman();

// myHeros.heySukh();
// heroPower.heySukh();  // typerror:- as by default method given to array not passed to object hierarchy.




// *********** inheritance ****************

// const user = {
//     name: "sukhii",
//     email: "chai@google.com"
// }
// const teacher = {
//     namkeVideo: true
// }

// const assistant = {
//     isAvail: false
// }

// const TAsupport = {
//     makeAssignemnt: "js assigment",
//     fullTime: true,
//     __proto__: assistant   // refering or borrowing properties of assistant object
// }

// prototypal inheritance :- (it is out dated not used in todays syntac)


// teacher.__proto__ =  user   // ascessing properties of user object

// modern syntax:- 
// Object.setPrototypeOf(b, a);
// b --> in which we want to inherit
// a --> of which we want to pass the properties 

// Object.setPrototypeOf(assistant,teacher); // inherited properties of teacher in assistant

// let anotherUser ="chaiAurCode";


// // injecting method in string prototype methods 
// String.prototype.trueLength = function(){
//     console.log(`${this}`);  // reference to the actual thing in anotherUser
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUser.trueLength()

// example to test other strings length directly:- 

// "sukhman  ".trueLength();
// "iceCofeee   ".trueLength();