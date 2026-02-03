function outer(){
    let a=10;
    function inner(){
        console.log(a);
    }
    return inner();
}
const value=outer();
console.log(value);