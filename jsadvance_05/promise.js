//  promises in depth

// how to make promises before consuming it
//  Note:-  promise is an object representation

// with "new" keyword we get instance of object , just like we get instance of class as object

const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  // Db calls , crytography , network calls

  setTimeout(() => {
    //   console.log('Async task is complete');
    resolve(); // connecting resolve with then
  }, 1000);
});

//   .then connection is with resolve
promiseOne.then(() => {
  // automatically  recieves an argument and whatever work happened in promise that value return here
  //   console.log("promise consumed")
});

// *****************************************************

new Promise((resolve, reject) => {
  setTimeout(() => {
    //    console.log("async task two")
    resolve();
  }, 1000);
}).then(() => {
  // console.log("task 2 resolved")
});

// *********************************************************

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "sukhman", email: "sukhpreet8954@gmail.com" });
//     // can pass data in resolve as argument
//   }, 1000);
// }).then((user) => {
//   // console.log(user)
// });

// ************************************************************

// const promoiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       // if there is no error
//       resolve({ username: "Hitesh", password: "1234" });
//     } else {
//       reject("ERROR: Something went wrong"); // connecting with catch()
//     }
//   }, 1000);
// });

// promoiseFour
//   .then((user) => {
//     // console.log(user);
//     return user.username; // this return val can pass in chaining  .then argument
//   })
//   .then((myname) => {
//     console.log(myname);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(()=>{   // it will always run default hai yhe
// console.log("The promise either resolved or rejected")
//   })

//   **********************************************************

//  let promiseFive = new Promise((resolve , reject)=>{
//    setTimeout(() => {
//         let  err = true;
//           if(!err){
//             resolve({username: 'javascript', password: "123"})
//           }else {
//             reject('ERROR : JS went wrong')
//           }
//       }, 1000);
//  })

//  async await is same as then and catch
// it wait there for completion of work then move forward otherwise gives error there only

// async function consumePromFive() {
// --> this would say error originated either by throwing err inside async func without catch block.

// const response = await promiseFive; // promise is an object
// console.log(response);

// ************    OR  **************

// handling error in catch to get the error print in console
//   try{
//          const response = await promiseFive
//          console.log(response)
//   } catch(error) {
//       console.log(error)
//   }

// }
// consumePromFive();

// **********************************************************

// async function getAllUsers() {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/users"); // network request

//   //  data getting in string now converting in json
//   //  const data = resp.json()  // converting also takes time so we use await here also so that promise not stuck into pending state

//   const data = await resp.json();

//   console.log(data); // all data printed in console as object form
// }
// getAllUsers();

//********** */  same function  using  .THEN  AND .CATCH   *************

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // when doing return we use anthoer then to get that value
    console.log(data);
  })
  .catch((error) => console.log(error));

/*-->
 fetch is the exiciting feature in Node.js 
 Fetch is the global fetch method/function -: fetch()
 It is a n/w based request , returning a promise 

 interview question:-
  if a request is made with promise and 
  get the error code 404 then where you get that in resolve or 
  reject ??

  ANS:-  it always get in response 
  like  .then() check in response.ok() and/or response.status()
  properties.

 
  *********** if we send other data in fetch like user id , password *****

     Example:-   
      
     const headers = {
     'content-Type': 'Text/xml',
     'Breaking-Bad': '<3',
    };

    fetch('https//:example.com/', {headers});

    
    ******* sending whole body and type of method with fetch() ************

    fetch('https//:example.com/' ,{
      method: 'GET',
      body: new FormData(),

    });
  
  ****** when fetch is implement  then it do work in 2 parts:-
     first part :- It do handle node/browser request 
      2nd part :-  It do reserve space in memory namely--> Data

         onfulfield[] --->  resolve()
         onrejection[] --->  reject() 

         web browser/node --> provide rscs to do a n/w request 
         then its response (if req is made or not) get into always
         onfulfield[] or if rejected then in get in onrejection[]
    

       {  onfulfield[]   onRejection[] } --> consist of func()
          which fulfill Data that fulfill the response 

          :---->  
                    Diagram :---
          response = fetch('somehting')    <------      Web browser/Node --> n/w request


             ^ 
             |
             |
            Data:- onfulfield[fn]
                   onRejection[fn]

   
      
         Global memory :
         Response: 

 
 */

         
