//1. find unoque values from arrays or remove duplicates
const array=[1,1,2,2,33,33,4,5,6,6];
const uniqueArray=[... new Set(array)];  // ... spread operator
console.log(uniqueArray);

//2.int to String
const num=32;
console.log(typeof(num)); // number
const numstr=num+'';
console.log(numstr);
console.log(typeof(numstr));// string
// or
const no=12;
const number=String(no);
console.log(typeof(number)); // string

//3.float to int
const floatnum=3.73;
console.log(floatnum);
const intNum=parseInt(floatnum);
console.log(intNum);

//4.check if varaible is number
const value=5.3;
if (typeof value === 'number' && !isNaN(value)){
    console.log("its number");
    
}
else{
    console.log("its not  number"); 
}


//5. swap varaible values:
let a=10;
let b=15;
[a,b]=[b,a];
console.log(a,b);

//6. check if Object has proprty
 const person={
    name :'tom',
    age :10
 }

 if(person.hasOwnProperty('name')){
    console.log("yes it has name property");
    
 }
 else{
    console.log(" it has not name property");
    
 }
 
 //7. remove falsy values from array :(false, 0,"",null, undefined, NaN)
 const values=[0,1,false,2,'',3,null,,0/0,4,NaN];
 console.log(values);
 const newval=values.filter(Boolean);
 console.log(newval);

 //8.String to uppercase and lowercase
 const str="Naveen Automation Labs";
 const uc=str.toUpperCase();
 console.log(uc);
 const lc=str.toLowerCase();
 console.log(lc);

 //9.checkif array contains a value
 const lang=['java','javascript','python','ruby'];
 if(lang.includes('java')){
    console.log("found");
 }

 //10 check if array is empty
 const empty=[];
 if(empty.length === 0){
    console.log("array is empty");
    
 }

 //11. generate random number between two numbers
 const min =10;
 const max=20;

 const randomNumber=Math.floor(Math.random() * (max -min +1)) +min;
 console.log("randomNumberis  "+ `${randomNumber}`);

 //12. String to number
 const strNumber='32';
 console.log(typeof(strNumber));
 const xa=parseFloat(strNumber);
 console.log(typeof(xa));

 //13. join array elements into a string 
 const words=["hello","nanda","kumar"];
 const sentence= words.join(" ");
 console.log(sentence);


 //14.get object property
 const user={
    name :"cat",
    age: 25
 }
 console.log(user['name']);

 //15.clone  an array or object
 const marks=[10,2,30,40,50,60,70,80];
 const clonemarks=[...marks];
 console.log(clonemarks);
 const userclone={ ... user}; // give space start and end
 console.log(userclone);

 // convert object to array

 const emp={
    name :"cat",
    age: 25,
    empid: 100
 }

 //a. keys array
 const keyarr=Object.keys(emp);
 console.log(keyarr);
 //b. values array
 const valuearr=Object.values(emp);
 console.log(valuearr);

 //c. key value array
 const keyvalarr=Object.entries(emp);
 console.log(keyvalarr);

 //17.get current date an time
 const currenDate=new Date();
 console.log(currenDate.toLocaleString());

 //18. check varaible is defined or not 
 let i;
 console.log(i);
 let c=10;
 console.log(typeof(c));

 //19. truncate an array
 const testing=[1,2,3,4,5,6,7,8,9];
 testing.length=5;
 console.log(testing);

 //20 last item in aa array
 const testing1=[1,2,3,4,5,6,7,8,9];
 const n1=testing1.slice(-1);
 console.log(n1);
 
 
 
 

 

 
 
 
 

    
 
 
 

 



