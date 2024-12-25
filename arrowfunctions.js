//Arrow functions is anonymous functions
const square =(num) => num*num;
console.log(square(5));

// another way for one parameter
const squares =num => num*num;
console.log(squares(5));

// zero parameter
const mess=() => "Hello Js"
console.log(mess());

//
const add=(a,b) => (a+b);
console.log(add(4,5));


//object
const fullName = person =>  `${person.firstName} ${person.lastName}` // use back ticks
const person={
    firstName :'Nanda',
    lastName :'Kumar'
}
const full=fullName(person);
console.log(full);

const greet=(username='guest', age =0 ) => `Hello, ${username}! and you ${age} years old`;
console.log(greet());

const g2 = greet("Nanda" , 31);
console.log(g2);

// rest parameters ... var arguments
const sum=(...numbers)=> numbers.reduce((acc,num) => acc+num ,0);
console.log( sum(1,2,3,4,5,6,7,8,9));

//
const browserInformation=(browser='chrome', ...details) =>{
    console.log(`browser: ${browser}`);
    console.log('other details:',details);    
}
browserInformation();
browserInformation('firefox','115.11','Mozilla',"IncognitoMode");

//max number using math
const answer=(a,b,c) => {
  return  Math.max(a,b,c);
};
console.log(answer(5,8,71));


