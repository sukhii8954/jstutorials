

// ******************* MAP **********************


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// i want to add 10 in every number of this array

let newvals =  myNums.map((num)=>{
  return  num+10;
})

// console.log(newvals);

// We can also do this using Foreach loop

const newarr = [];
myNums.forEach((num)=> {
     newarr.push(num+10);

})
// console.log(newarr);


// CHAINING -: 


// chaining of map over map and we can chain filter over it and can do many times

const newNums = myNums
.map((num) => num *10 )             // here each num in array becomes [10,20,30,40,50,60,70,80,90,100]
.map((num) =>num+1)  
.filter((num)=> num>=40)              // here num be updated value and we can do further operation on it

// console.log(newNums);


// NOTES-:  with using map all the updated values would return 
//  but filter is like a condition of true or false and return especific values 



// ******************  REDUCE ******************* :- 

const newVals = [1, 2, 3];

const sumVal = newVals.reduce( function(acc,currval){
    // console.log(`accumulator value: ${acc}`) // shows updated value after every sum
    return acc +currval;
},0)

/*
 NOTE:-value passed 0  to acc written after function scope. 
It perfrom operation on each value of array and
after every sum acc value is equal to that sum */

// console.log(sumVal)

// Reduce Using Arrow function
const newVal = [1, 2, 3];
const sumNew = newVal.reduce( (acc,currval)=> acc+currval,0);
// Output:- 6

console.log(sumNew);

// ********  Real product based Example:- ***********

const shoppingCart = [
    {
         itemName: "js course",
         price: 4999
    },
    {
         itemName: "AI course",
         price: 4999
    },
    {
         itemName: "mobile developement course",
         price: 5999
    },
    {
         itemName: "fullstack developer course",
         price: 3999
    },
]

// Ques:- Add all the prices of all the courses:

const Totalprice =shoppingCart.reduce((acc,item) => acc + item.price ,0);

console.log(Totalprice);  // totalbill to pay 