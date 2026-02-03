/*
data types in javascript can be broadly classified into two categories
primitive //those data types which are basic and indivisible
primitive data types are immutable i.e their value cannot be changed
int x = 10;
x = 20;
You are not modifying the "10".
You are simply making x refer to a new value 20.
in stack you are making a copy of the value and changing the copy
primitive data types are stored in stack memory
primitive data types are faster to access and manipulate
primitive data types are copied by their value
there are 7 primitive data types in javascript
1. number
2. string
3. boolean
4. null
5. undefined
6. symbol
7. bigint
*/
const id=Symbol('123');
console.log(id)
const anotherId=Symbol('123');
console.log(anotherId); 
console.log(id===anotherId);
/*
non-primitive 
//those data types which differ due to their access , behaviour and functionality
non-primitive data types are mutable i.e their value can be changed
here you are referncing to the adress where they are stored i.e changing the value at that adress
non-primitive data types are stored in heap memory    , lets take an example at the end of the code to show that you are referencing the value
non-primitive data types are slower to access and manipulate
non-primitive data types are copied by their reference
there is 1 non-primitive data type in javascript
1. object
2. array
3. function
*/
let obj={
    name:"John",
    age:30,
    city:"New York"
}
console.log(obj);
const arr=[1,2,3,4,5];
console.log(arr);   
let myfunction=function add(a,b){
    return a+b;
}
console.log(myfunction(2,3));
let userOne={
    email:"user@gmail.com",
    username:"user_name"
}
let userTwo=userOne; //referencing the same object in heap memory
console.log(userTwo);
userTwo.email="changed_value@gmail.com"; //modifying the value at that adress
console.log(userOne); //userOne will also reflect the changed value because both userOne and userTwo are referencing the same object in heap memory