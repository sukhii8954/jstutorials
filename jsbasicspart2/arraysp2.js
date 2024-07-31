//   concat , spread operator, flat() ,  isarray(), from() and of()

const newheroes = ["thor", "ironman", "batman"];
const fewheroes = ["superman", "flash", "spiderman"];

// how we merge to 2 arrays 

const newarr = newheroes.concat(fewheroes);
console.log(newarr);  // both arrays got merged, concat return new array

// another way to merge by using spread operator
// spread operator makes the Elements of array spread means makes them individual 

// most  and widely used spread operator :-
const allheroes =  [...newheroes,...fewheroes];
// console.log(allheroes);

const morearr = [1,2,3,[4,5,6],7,[2,3,6,9,[0,1]]];

// NOTE:-
// flat() returns new array with all sub array elements

// default it gives upto 1 depth only ,
// to get all elements individual in one array we ca nuse infinity
// const mynoarray = morearr.flat(Infinity);
const mynoarray = morearr.flat(2);
// console.log(mynoarray);


// when we doing Data scrapping  and we want to get data in form array:-

// asking if it is array or not  ".isArray()"

// console.log(Array.isArray("sukhman")); 

// { converting it to array  ".from()" }

// console.log(Array.from("Sukhman"));
// if we give string as shown below then we have to specify that  if we 
// want to make array of key or value.
console.log(Array.from({name:"Sukhman"})); // empty array if it does not form into array


// Converting multiple variables or multiple array into one array
//  using ".of()" :- returns a new array from a set of elements

let s1 = 100
let s2 =300 
let s3 = 500

console.log(Array.of(s1,s2,s3));  // [100 , 300 , 500] new array 