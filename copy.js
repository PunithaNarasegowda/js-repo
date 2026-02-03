let obj1={
    name:"punitha",
    age:20,
    address:{
        street:"kuvempunagar",
        city:"Bengaluru",
    },
};
const obj2=obj1;
obj2.name="Sajan";
console.log("obj2",obj2);
console.log("obj1",obj1);