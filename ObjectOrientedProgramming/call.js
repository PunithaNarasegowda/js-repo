function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
//for nested functions we can use arrow functions to preserve the this context
// call and apply are used to invoke a function with a specific this value and arguments. 
// The main difference between call and apply is how they handle arguments:
// call takes arguments as a comma-separated list, while apply takes arguments as an array.