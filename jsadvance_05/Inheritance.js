class User {
   constructor(username){
     this.username = username;
   }
     
//    method that give value of th username 
   logMe(){
    console.log(`Username is ${this.username}`);
   }
}


// when we assigning User different role then we  do this

 class Teacher extends User{   // inherting the value of User class by extending that class
    constructor(username,email,password){
        super(username)                   // super keyword refers to the class we are referring and automatically goes in that class and set the value of that User
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
   

 }

 const chai = new Teacher("sukhii", "sukhii@gmail.com", "123")

 chai.addCourse();
 chai.logMe();  // teacher class inherited method of user class


 const elaichi = new User("sukhman")

//   elaichi.addCourse(); // parent class wont have access to methods of child class
// elaichi.logMe();

// console.log(chai instanceof Teacher);
// console.log(chai instanceof User);    // as teacher inherited from User so teacher object will also become instance of User class
