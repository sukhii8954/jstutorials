// class and constructors

// class User {
  // we can add properties , functions in the class

//   constructor(username, email,password) {
//     this.username = username;
//     this.email= email;
//     this.password=password;
//   }
//   // when the new keyword is get used or when object
//   //  initialize from the class constructor is get called


//     encryptPassword(){    // we can give any name to it  like: hidepassword 
//     return `${this.password}abc`; 
//     // when this method is called it would return a string with encrypted password
//    }

   
//    changeName(){
//     return `${this.username.toUpperCase()}`// calling method to making the name in upper case
//    }
  

   
// }

// const user = new User("sukhii", "sukhii@gmail.com", "0220")

// // console.log(user)
// console.log(user.encryptPassword())
// console.log(user.changeName());



//************ */ behind the scenes *********************************
//  if wwe not used class keyword in js :-

// function User(username ,email, password){
//     this.username = username;
//     this.email= email;
//     this.password=password;
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }


// User.prototype.changeName = function(){
//     return `${this.username.toUpperCase()}`;
// }
// const chai = new User("sukhii", "sukhii@gmail.com", "0220")
// console.log(chai.encryptPassword())

// console.log(chai.changeName())



// **************************************************************8