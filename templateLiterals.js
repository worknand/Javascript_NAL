const name="nanda";
//backtick operator or literal operator ``
const age =30;
const mesg=`hi name is ${name} and ${age}`
console.log(mesg);

// use  backtick in multline
const multline =`hello world
please quiet t
so tension`;
console.log(multline);

const a=10;
const b=20;
const result=`the addition of ${a} and ${b} is ${a+b}`;
console.log(result);

function getXpath(name){
    return `//*[@id='${name}']`;
}

const log =getXpath('nanda');
console.log(log);
const log1 =getXpath('nanda\'s');
console.log(log1);

