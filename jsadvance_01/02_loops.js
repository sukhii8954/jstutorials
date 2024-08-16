// for loop in js 

for (let i = 0; i <= 10; i++) {
    //   if(i==4){
    //     console.log("it is 4")
    //   }
    // console.log(i);
}  // output :- 0 1 2 3 4 5 6  7 8 9 10


for(let i = 1; i<=10 ; i++){
    // console.log(`outer loop ${i}`);
    //  for (let j = 1; j <=10; j++) {
    //     //   console.log(`inner loop ${j} and inner loop ${i}`);
    //     console.log(i + '*' + j + '=' + i*j);
    //  }
}

let myarray = ["superman", "batman", "shaktiman", "spiderman"];

for (let i = 0; i < myarray.length; i++) {
    // const element = myarray[i];
    // console.log(element);
    
}


// ********** keywords related to loops in js  ***************
// Note:- break and continue

for (let i = 0; i <= 20; i++) {
    // if(i ==5){
    //     console.log(`5 detected`);
    //     break;
    // }
    
    // console.log(`value of i is: ${i}`);
    
}

for (let j = 0; j <= 20; j++) {
    // if(j==7){
    //     console.log(`7 detected`);
    //     continue;
    // }
    // console.log(`valye of index is : ${j}`);
    
}


// ************************************************************

// While and do while Loops:- 

// Syntax:-
//  while (condition) {
//      console.log("ok");
//  }

//  let i =0;
//  while(i<=10){
//     // console.log(`the value of index is ${i}`);
//     //   i =i+1;
//  }

 let myArray = ["superman", "batman", "spiderman", "shaktiman"]

//   let arr= 0;
//  while(arr< myArray.length){
     // console.log(`values of array is ${myArray[arr]}`);
     //     arr++;
    
//  }

 
// Do while loop

let value = 1;
// do {
//      console.log(`SCORE IS : ${value}`);
//      value++;
// } while (value<5);


// do while would run atleast one time before checking the condition:-
let score = 10

do {
    //  console.log(`SCORE IS : ${score}`);
    //  score++;
} while (score<9);
