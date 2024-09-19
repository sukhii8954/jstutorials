//  Async code  js projects:- 

// functions of Async js

// 1)

// setTimeout(() => {
//     console.log("sukhman");
// }, 1000);
 

// //      OR

// const saySukh = () => {
//     console.log("sukhman")
// }
// setTimeout(saySukh,2000);



//  2) 

//  changing innerhtml of H1 after 2 seconds 

// const changeText = ()=> {
//     document.querySelector('h1').innerHTML = "best JS series"
// }

// const stopby = setTimeout(changeText, 2000); // changing h1 text after  2 seconds


// // If I want to stop the event before the assgined time 
// // we use  someevent  with clearTimeout() function

// // ***** this is how we can do that :-************

// document.querySelector('#stop').addEventListener('click', ()=>{
//     clearTimeout(stopby)
//     console.log("stopped");
// })






// 3)    small project to make start stop button work:- 

//   const sayDate = (str)=> {
//     console.log(str, Date.now())
//   }
 
// document.querySelector('#start').addEventListener('click', ()=> {
//   const intervalId =  setInterval(sayDate,2000 , "Hi how are you")
  
//   document.querySelector('#stop').addEventListener('click', ()=>{
//       clearInterval(intervalId);
//     })
// })


// 4)  // generate a random color project :- 

// const randomColor = () => {
//     const hexColor = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += hexColor[Math.floor(Math.random() * 16)];
//       // this generate random number and assigned with #  example -: #77B4FC
//     }
//     return color;
//   };
  
//   // console.log(randomColor())
  
//   // onclick start button color changes after every 1 sec
//   let intervalId;
//   const Start = () => {
//     const changeBgColor = () => {
//       document.body.style.backgroundColor = randomColor();
//     };
//     // setting time interval 1 sec to change color of body background
  
//     // and we are checking the value of id that it is not null then start the interval otherwise it would create the multiple instances of the setInterval which would change the background color much faster and the stop button would not be able to clear all intervals
//     if (!intervalId) {
//       intervalId = setInterval(changeBgColor, 1000);
//     }
//   };
  
//   const Stop = () => {
//     clearInterval(intervalId);
//     intervalId = null; // flushing out the value of this means stopping it to reintialize
//   };
  
//   document.querySelector('#start').addEventListener('click', Start);
  
//   document.querySelector('#stop').addEventListener('click', Stop);