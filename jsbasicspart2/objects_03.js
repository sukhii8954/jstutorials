//  destructering of object:- 

 const course = {
     courename: "javascript tutorial",
     amount: 999,
     courseInstructor: "chai aur code",
 }

//  efficient and clean way to access properties of object
// we can destructure of any value of object :-

const {courseInstructor} = course;
const {courseInstructor: teacher} = course;
const {amount: price} = course;
const {courename: language} = course;

// console.log(teacher);
// console.log(price);
// console.log(language);


// CONCEPT OF API's in Javascript :-

// json structure is same as object

// JSON  Syntax structure:-



// {
//     "name": "sukhpreet",
//     "coursename": "js course in hindi",
//     "price": "free",
//      "id": 11613311, 
// }

// Note:-  we use fethod method in js to call the url in response 
// I get the above data in which url it is stored. after recieving it 
// I would convert it in object and can take out one one value from it


// API's in array format:- 
// [
//      {},
//      {}, 
//      {}
// ]