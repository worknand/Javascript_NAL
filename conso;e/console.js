console.log("Hello World!!!!");
console.error("this is error");
console.warn("this is warning");
console.info("this is info");

const user={
    name :"nanda",
    age : 31
}

const user1={
    name :"kumar",
    age : 35
}
console.log(user);
console.table({user,user1});

console.group("Login feature");
console.log("enter password");
console.log("enter username");
console.log("reset password");
console.groupEnd();

console.time("print values");
for (let index = 0; index < 1000; index++) {
    console.log(index);  
}
console.timeEnd("print values");



console.count("counting");
console.count("counting");
console.count("counting");
console.count("counting");

 console.assert(10 === 10 , "this is correct");
 console.assert(10 === 20, "this is failed");
console.assert(10 == 10);



function test(){
    console.trace();

}

test();

console.clear();

console.log("%c I Love You" , "color:blue; background-color:green");


