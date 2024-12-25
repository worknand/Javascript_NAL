// Destructuring in JavaScript and what are the ways of doing it in JS.
// 1. Destructuring with Array
// 2. Destructuring with Objects
// 3. Destructuring with Function parameters

const numbers=[1,2,3,4,5];
const [a,b,c] = numbers;
console.log(a);
console.log(b);
console.log(c);

const lang=["java","javascript","GO","Python","C"];
const [p,q, ...testlang]=lang;
console.log(p);
console.log(q);
console.log(testlang);


//Objects
const user ={
    name : "nanda",
    age : 30,
    hobby : "sports"
};

const {name,age,hobby} = user;
console.log(name);
console.log(age);
console.log(hobby);


//function parameters
function printUsername(person){
console.log(person.firstname + " " +person.lastname);

}

const person={
    firstname : "nanda",
    lastname : "kumar"
}
printUsername(person);

//with Destructuring
function printUsername1({firstname,lastname}){
    console.log(firstname + " " +lastname);
    }

    function printUsername2({firstname}){
        console.log(firstname);
        }

    const person1={
        firstname : "nanda",
        lastname : "kumar"
    }
    printUsername1(person1);
    printUsername2(person1);




