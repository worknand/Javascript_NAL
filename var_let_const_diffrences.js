// var: re-declaration and reassignment is possible.  and aslo old way of decalring
// let: can be reinitialized but not re-declared
// const: can neither be re-declared nor reinitialized
// Default values for var and let is "undefined"

//1.var - old way
//ES6
//Scope:var
// functionl/local + global scope

var x=10;     //global scope
function scope(){
    var y=20;    //  functionl/local
}
console.log(x);

var pop="hi js";
function rel(){
    var top="hello js";

}
rel();
console.log(pop);   //glocal scope
//console.log(top);  // funactional scope

var browser="chrome";
var browser="firefox";  // re-declaration and reassignment is possible
browser="edge" ; //reassignment or reinitialization is possible
console.log(browser);  // latest value will print


var g;
console.log(g); // undefined
g="hey you";

console.log(g); 

//// Issue with VAR keyword

var flag="nanda";
var t1=4;
if(t1>3){
  
var flag="kumar";   // after condition it re decalred  and so not using in modern day java script
}
console.log(flag);

//////////////// let is preferred
// block scoped {}
let m="tata";
let time=4;
if(time>3){
    let mess="bye bue";
    console.log(mess);
    
}
//console.log(mess);

// let: can be reinitialized but not re-declared
 let len=5;
 len=9;
 console.log(len);
 

 // const: can neither be re-declared nor reinitialized
 // kind of final keyword in java
 const ff="jello";
 //ff="ttata";
 console.log(ff);



 // Default values for var and let is "undefined"
 var z;
 console.log(z);
 let q;
 console.log(q);
 //const a; ca
 console.log(a);
 