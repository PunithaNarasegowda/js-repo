//A function which takes another function as argument is  called callback function 
//num1 => number 1
//num2=> number 2
//operation => callback function 
let calculator = (num1,num2,operation)=>{
    return operation(num1,num2);
}
let sum=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let mul=(a,b)=>{return a*b};
let div=(a,b)=>{return a/b};
console.log(calculator(10,20,sum))
console.log(calculator(10,5,mul));
console.log(calculator(20,5,div));
