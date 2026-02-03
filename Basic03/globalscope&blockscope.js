//block scope is defined by curly braces {}
//whereas global scope is accessible everywhere
let a = "I am in global scope";
const b="I am also in global scope";
var c="I am in global scope";
{
    let a="I am inside block scope";
    const b="I am also inside block scope";
    var c="I am inside block scope";
    
}
console.log(a); 
console.log(b); 
console.log(c);
//(let is block scoped whereas var is global scoped)
//hence we use let and const instead of var in modern javascript
//**(interview) the global scope in console i.e on web inspection is different and the one in code environment where you use node is different global scope */