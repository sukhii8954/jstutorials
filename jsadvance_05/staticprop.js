class User {
    constructor(username){
        this.username = username
    }

    loggingUser(){
        console.log(`Username: ${this.username}`);
    }

    // I want to assign id whenever the user created 

    /* if we dont want to give access of this method to the object which
       instanced from this class 
       then we use  "static" keyword  */

    static createId(){
         return '123'
    }
}

const hitesh = new User("hitesh")
hitesh.loggingUser(); 
// hitesh.createId();  static method can't be accessed by object of same class 


class Teacher extends User{  // inherting from User class
     constructor(username, email){
         super(username)  // super --> behind the scene --> this.username = username
         this.email = email
     }
}


const iphone = new Teacher("ios", "iphone@gmail.com");
iphone.loggingUser();
// console.log(iphone.createId()); // child class also won't get access to the static method of parent class
