//Top 9 Ways Of Declaring a Function in JavaScript:
// Function Declaration
// Function Expression
// Arrow Function
// Anonymous Function
// Immediately Invoked Function Expression (IIFE)
// Generator Function (Using function*)
// Constructor Function
// Method Declaration
// Using yield inside a generator function

//1. Function Declaration
function add(a,b){
    return (a+b);
}
console.log(add(5,6));

//2 Function Expression also called as anonymous function
const mul=function(x,y){
    return x*y;
}
console.log(mul(2,3));

// 3.Arrow Function Expression:Anonymous function
const div=(a,c) => a/c;
console.log(div(10,5));

//4. function constructor
const sub=new Function('a', 'x', 'return a-x;');  // capiltal letter function and thirs parameter as return body
console.log(sub(20,10));

//5.IIFE Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("Hello World!!!!!!");
    
}) ();

// 6.Generator Function (Using function* and yield keyword)
function* generateNumbers(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const gen=generateNumbers();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// 7.Anonymous Function
//no specific name
let no=[1,2,3,4,5,6,7,8,9];
let newnumbers=no.map(function (e) {
    return e*e;
}
);
console.log(newnumbers);
// with map callback function
let nnumberso=[1,2,3,4,5,6,7,8,9];
let squarenumbers=no.map((e) => {
   return e*e;
}
);
console.log(squarenumbers);

//8. recursive function

//a function callsitself
function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
console.log(factorial(5));

//9.Higher-order function
function addition (a,b){
    return a+b;
}

function operate (funcName,a,b ){
   return funcName(a,b);
}

let c= operate(addition,6,8);
console.log(c);












