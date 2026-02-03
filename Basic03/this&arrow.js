//** interview imp
//  in browser the global scope is window whereas in standalone engines like node of js have empty 
// {} in global scope so that is why when you print 
console.log(this)
//in broswer it gives window object whereas in code environment it gives empty curly braces{} */
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//this keyword gives the current context in which the function is called
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this.username);
}
// chai()



const chai1 = function () {
    let username = "hitesh"
    console.log(this.username);
}
// chai1()

//arrow functions are used mainly for cleaner syntax and better handling of this keyword
const chai2 =  () => {
    let username = "hitesh"
    console.log(this.username);
}


chai2() //it will print undefined because arrow functions dont have their own this they take this from their surrounding lexical scope which is global scope here and in global scope there is no username property so it will print undefined


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})
//implicit return of object means we have to wrap the object in parentheses otherwise it will be considered as function body
//EXPLICIT RETURN MEANS WE USE RETURN KEYWORD AND IMPLICIT RETURN MEANS WE DONT USE RETURN KEYWORD
// when we use curly braces {} in arrow function then we have to use return keyword to return something otherwise it will be considered as function body
//objects are always wrapped in parentheses and curly braces in implicit return of arrow functions
// console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach(function (value, index, array) {
    console.log(value, index, array);
})