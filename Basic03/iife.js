//Immediately Invoked Function Expression(IIFE)
(function(){
    console.log("IIFE Function executed");
})();
//we use IIFE to avoid polluting global scope with variables and functions
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//we need to add semicolon(;) before IIFE to avoid issues if the previous line doesnt end with semicolon
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')