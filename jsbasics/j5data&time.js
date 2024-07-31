// date and time in depth 
 
let newdate = new Date();
// Tue Jul 30 2024 17:14:10 GMT+0530 (India Standard Time)
// console.log(newdate.toString()); // readable form of date and current time
// console.log(newdate.toJSON());

 //display current date only not time :-Tue Jul 30 2024
// console.log(newdate.toDateString()); 

 // date and time in proper readable form  :-30/7/2024, 5:14:10 pm
// console.log(newdate.toLocaleString()); 
// 17:15:59 GMT+0530 (India Standard Time) display time only
// console.log(newdate.toTimeString()); 

// 5:16:42 pm
// console.log(newdate.toLocaleTimeString()); 


// date is an object 
// console.log(typeof newdate);

// to declare specific data 
//day it automatically calculating , month in js starts from 0 to 11
// let particularDate = new Date(2024, 2 ,20); 
//with time 
// let particularDate = new Date(2024, 2 ,20,5,3);   
// let particularDate = new Date("2024-01-30");   
let particularDate = new Date("02-02-2024");   
// console.log(particularDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); //from 1 jan 1970 to till now time in msec

// we can get time from that 1970 to till particular date like
// console.log(particularDate.getTime());

// to convert msec into sec
// converted msec into sec since 1 jan 1970
// console.log(Math.floor(Date.now()/1000)); 


let newDate =new Date();
// to get month , hour ,day we can use method along with it 
// console.log(newDate.getTime()) // total time in msec since 1970
// console.log(newDate.getDate())  // today's date 
// console.log(newDate.getMonth()+1)  // current month starting from 0
// console.log(newDate.getHours())  // total hrs passed today
// console.log(newDate.getTimezoneOffset())   // ?
// console.log(newDate.getFullYear())   // current year
// console.log(newDate.getDay())   // current day in numbers
// console.log(newDate.toLocaleTimeString())


// using string intropolation to declare full date and time 

// console.log(`${newDate.getDay()} and the time is ${newDate.toLocaleTimeString()}`);


//  display weekday in character type not in number format 
  
// *******************************************

console.log(newDate.toLocaleString('default',{
    weekday:"long",  // tuesday
}))

// ********************************************
console.log(newDate.toLocaleString('en-IN','default',{
   dateStyle:"long",  // 30 july 2024
   timeZone:'tzString'  // 6:18:46 pm
}))