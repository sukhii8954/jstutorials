// Call , bind and apply in javascript

// here we learn about why .call is important when we 
// wants to call function in another function 

/*
Note:- when we normally call a function then it get removes from 
stack so does its execution context so we have to hold its reference 
such that we can use its execution context.
*/

function SetUsername (username){
   this.username = username
   console.log("called");
}

function createUser(username , email , password){
    SetUsername(username) // here is only refrence is called 
    SetUsername.call(this, username) 

    // .call we used to hold the reference here 
    //   and we  have to pass (reference) own "this" of createUser method which is used 
    // and got the current context of the called function

    this.email = email
    this.password = password
}

const user = new createUser("sukhman", "sukh@gmail.com", "123")
console.log(user);