// strings in javascript 

// ***********************************************
// const name = "sukhii";
//  const dsacount = 200;


//  old way to write strings :-
//  console.log(name + dsacount + "problem solved");


// const name = "sukhii";
//  const dsacount = 200;

//  ******************************************

// modern way :- 
// more readable and more reliable 
// and this is called string interpolation 
// console.log(`hello my name is ${name} and my dsacount is ${dsacount}`);
// // we can make changes on the go in the string 
// console.log(`hello my name is ${name.toUpperCase()} and my dsacount is ${dsacount}`);

// console.log(value);

// console.log(typeof value) // shows object in output

// in console :- in browser
// String {'sukhman'}
// 0 :  "s"
// 1 :  "u"
// 2 :  "k"
// 3 :  "h"
// 4 :  "m"
// 5 :  "a"
// 6 :  "n"

// it is key,value pairs which is object not array ,so 
// here string is an object not an array , dont get confuse with the indexing number 


// ******************************************************


// how to access keys of a string 

// console.log(value[0]);
// console.log(value[3]);
// console.log(value[7]); // shows undefiend as there are 6 keys only in such string


// **********************************************

// another functions to access string char and play with it 


// console.log(value.__proto__) // its shows empty object but there are so many values in it if we see in browser console
// console.log(value.length);
// console.log(value.charAt(2)); // shows a char at index 2
// console.log(value.indexOf('m')); // shows a index pf m is 4 

// ******** substring and slice methods **********

// to make substring out of original string

// we cant give -ve value is subString , if we give 
// it would start printing char from 0 onwards.
// const newString = value.substring(4,9);
// console.log(newString);


 // we can give -ve value in slice function it starts 
// in reverse from starting of the string.
// const anotherString = value.slice(-9,4);  //0 to 4 chars print 
// console.log(anotherString)


// ************************************************

// trim and replace methods in string  
// trim() method simply remove the spaces entered in the string 

const newvalue = "sukhman";
// console.log(newvalue);
// console.log(newvalue.trim()); 
// removes the uncessary whitespace around the stirng 
// and also works on line terminators 


// as we write url so browser dont understand the 
// unprintable or special characters entered in the url 
// it replace it with % followed by hxadecinaml digits
//  that is url encoding mechanism.

 let url = "https://sukhman.com/sukhii%20singh"; 
// console.log(url);

//  here we use replace function 
// this we use in when we want whenever user enter 
// url and it consist of such% sign along with 
// hexadecimal numbers 

// console.log(url.replace('%20', '-'));

// we can also ask if it includes something in it or not
// by using includes function

// console.log(url.includes('sukhman')); //gives true if it has otherwise gives false 



// ********** convert string into array based on such condition**********

const value = new String('sukh-rythm-singh-kaur');
console.log(value.split('-')); 
console.log(value.split('-', 2)); 
console.log(value.split('k', 4)); // here it seprate the stirng on k  and not include the k word in it
// it gives array consist of strings seprated on the basis of '-';
// ********** 2  syntax of split method ****************
// split(separator) 
// split(separator , limit)