// object moreover

//  objects declarations in singleton or with constructor

// singleton object
// const tindobj = new Object()

// console.log(tindobj);  //  output:- empty object {}

const obj1 = {}   // non-singleton object

obj1.id ="0220sm";
obj1.name= "sukhman";
obj1.athome = false;

// console.log (obj1);

// Object within another Object :-

const anotherobj = {
     name: "sukhpreet",
     email: "sukhman0220@gmail.com",
     fullname: {                // obj within object
          Userfullname : {
            firstname: "Sukhpreet",
            lastname: "singh",
          }
     }
}

// accessing values of object nested in another object
// console.log(anotherobj.fullname);
// console.log(anotherobj.fullname.Userfullname);
// console.log(anotherobj.fullname.Userfullname.firstname);


const objone ={1:"a", 2: "b"}
const objtwo ={3:"c", 4: "d"}

// Merging 2 objects
// Object.assign() :- static method to copies all own properties 
// from one or more src objs to target obj. return Modified target Obj.

// const obj3 = Object.assign(objone,objtwo);

//************ NOTE:- 
// more guranateed way to declare it :-
// empty curly brkt is an optional parameter which guratanee 
// {} brkts is target object and remaining are src objecs 
// syntax:- const returntarget = object.assign(target, source);

// const obj4 = Object.assign({},objone,objtwo);
// console.log(obj3);
// console.log(obj4);


// *********   important box ********

// Most widely used  and I use:- 
const object1 = {...objone, ...objtwo};
// console.log(object1);


// values coming from Database :- 
// when users comes from DB then data comes 
//{ in form of array of objects  }


//this is how data comes from DB:-
const usersdata = [
       {
        id: 1,
        email: "sukh@gmail.com",
       },
       {

       },
       {

       },
]

// accessing the values of array like this 

// syntax:-  arrayname[index].valuename 
usersdata[1].email;
console.log(obj1);

// *********   important box ********

// *********   important box ********

// IMPORTANT NOTE:- 

// accessing only keys of an object which combine in single
//  array as an output. 

// console.log(Object.keys(obj1));  
// output: inform of array
//  ['id', 'name', 'athome']
// we can use these keys in many other areas of project 
// we can run loop on them and take in work many other ways

// Also we can take out the values only of object
 
// console.log(Object.values(obj1));
// Output: [ '0220sm', 'sukhman', false ]

// console.log(Object.entries(obj1));
// output syntax: [ key : value] 
//Output: [ [ 'id', '0220sm' ], [ 'name', 'sukhman' ], [ 'athome', false ] ]
// each key-value pair combine in one single array

//  ******** important box *********


// we can check object has property(key only) or not by using following:-

console.log(obj1.hasOwnProperty('athome'));
// output :true or false