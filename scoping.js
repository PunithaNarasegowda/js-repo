var a=100;
let b=10;
const c=99;
function first(){
    console.log(a);
    console.log(b);
    console.log(c);
    var a=300;
    let b=400;
    const c=500;
    function second(){
        console.log(a);
        console.log(b);
        console.log(c);
        var a=600;
        let b=700;
        const c=800;
        function third(){
            console.log(a);
            console.log(b);
            console.log(c);
        }
        third();
    }
    second();
}
first();
console.log(a);
console.log(b);
console.log(c);