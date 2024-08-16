const arraylang = ["java", "c++", "python", "javascript"];

// const vals = arraylang.forEach((item)=>{
// //    console.log(item);

//      return item;
// })

// here FOREACH  wont return values 
// disadvantage that we can'treturn any value 

// console.log(vals);

//  NOTE:-
// foreach loop won't return any value

//  IF WE WANT to do operation on each value or to return value 
//  of array then foreach loop won't work on it.


// foreach wont return values , whereas , FILTER  return the values:


// ******************** FILTER ************************

const newnums = [1,2,3,4,5,6,7,8,9,10];

// const newvals= newnums.filter((num)=>
//        num > 4 
   // implicit return, condition on basis of which it return the value
// )
 
// const newvals = newnums.filter((num)=>{
//       return  num > 4    // with curly bracket we have to write return keyword as it is explicit return
// })

// here FILTER return the values 
// console.log(newvals);


// if want to apply condition within foreach only then we use can
// do like this:-


// const newNums = []

// newnums.forEach((num)=> {
//     if(num > 5){
//         newNums.push(num);
//     }
// })
// console.log(newNums);


// database having data of books :- 
 
const books = [
   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
 ];

 
//  practice :- 
 
 const userBooks = books.filter((bk) => bk.genre=='History' )

//  console.log(userBooks);  // give data of books having only history genre


 const newBooks = books.filter((bk)=> {
    return bk.publish >=1999 && bk.genre ==='History'
 })
// console.log(newBooks);



