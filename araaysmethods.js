//1,map()
let number=[1,2,3,4,5,6]; // numbers array
let mulnumbers=number.map((e) => e*3); // a map() which return an array not each element 
console.log(mulnumbers);


//f to c 
//(F-32)*(5/9)=0
// => whis is callback function which call function with given values each time
let fr=[32,33,35,38,40,50,32,36,39];

function frtocel(fah){
 return (fah-32)*(5/9) ;
}

let cel=fr.map(frtocel);
console.log(cel);

//2.filter()
let numb=[1,2,3,4,5,6,7,8,9,10]; // numbers array
let even=numb.filter((e) => e % 2== 0); // which return filtered array based on condition
let odd=numb.filter((e) => e % 2!= 0); // which return filtered array based on condition
let evenmap=number.map((e) => e % 2== 0); 
console.log(even);
console.log(evenmap);
console.log(odd);

let employee=[
    {name:"John",age:30,gender:"M"},
    {name:"Kat",age:36,gender:"F"},
    {name:"Rose",age:60,gender:"F"},
    {name:"Rom",age:30,gender:"M"},
    {name:"Adam",age:30,gender:"M"},
    {name:"mark",age:30,gender:"M"},
    {name:"lou",age:30,gender:"F"},
    {name:"anne",age:40,gender:"F"}
];

let female=employee.filter((emp)=>{
    return emp.gender == "F" && emp.age >= 40;
});
console.log(female);


//3.reduce
let num=[1,2,3,4,5,6,7,8,9,10]; // 55
let result=num.reduce((acc,no) => acc+no , 0); /// 0=initial value of acc and no=each element in array one by one 
// reduce function which decrease size of arra to single element
console.log(result);

// maxnumber in array

let top=[10,50,60,82,42,52,75,62,62,82,45,69];
// find largest number in array
let outcomeMax=top.reduce((max,num) =>{
    if(num > max){
        return num;
    }
    else{
        return max;
    }
},top[0]);

console.log(outcomeMax);

let outcomeMin=top.reduce((min,num) =>{
    if(num < min){
        return num;
    }
    else{
        return min;
    }
},top[0]);
console.log(outcomeMin);

//cart 
let cartItems=[
    {name:"Jeans",price:800},
    {name:"shirt",price:800},
    {name:"tshirt",price:700},
    {name:"jetty",price:600},
    {name:"tie",price:500},
    {name:"socks",price:200},
];
let totalvalue=cartItems.reduce((acc,item) => acc + item.price ,0);
console.log(totalvalue);
