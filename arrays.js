// declaration of arrays
let arrayconcept=[]; // empty array
let numbers=[1,2,3,4,5,6]; // numbers array
let stringConcept=["apple","orange","banana","guava"]; // stringy array

let lang=["java","js","ruby"];
//1.push() push elemnt at last in array
lang.push("c");
console.log(lang);

//2 pop() remove elemnt at last in array
lang.pop("c");
console.log(lang);

// shift() remove first element in array
let fruits=["apple","orange","banana","guava"]; // stringy array
let first=fruits.shift();  // also return remove element
console.log(first);
console.log(fruits);

//4.unshift() add one or more elements in start of araay
let fruits2=["apple","orange","banana","guava"]; // stringy array
fruits2.unshift("jack");
console.log(fruits2);

//5.splice()
let fruits3=["apple","orange","banana","guava"]; // stringy array
fruits3.splice(1,1,'pineapple');
console.log(fruits3);
fruits3.splice(2,1,'DragonFruit'); // (position to insert new element,no of elements to deleted in and after that position, replacingvalue)
console.log(fruits3);

//slice()
let nnumerics=[1,2,3,4,5,6,7,8,9,1,2,3,4,5]; // numbers array
let newone=nnumerics.slice(1,5);//(staring postion,exclude last position)
let newone1=nnumerics.slice(9,15);//(staring postion,exclude last position)
console.log(newone);
console.log(newone1);


//7.concat()
let fruit=["apple","orange","banana","guava"]; // stringy array
let veg=["carrot","beans","gose","drumstick"]; // stringy array
let mix=fruit.concat(veg);
console.log(mix);

//8.indexof()
let fruiss=["apple","orange","banana","guava","apple"]; // stringy array
console.log( fruiss.indexOf('banana'));
console.log( fruiss.indexOf('apple'));
console.log( fruiss.indexOf("jackfruit")); // if elemetn not present return -1
console.log( fruiss.indexOf('apple',3)); //after 3rd position
console.log( fruiss.indexOf('apple',fruiss.indexOf('apple')+1));


  //9. includes()
  let fruitnames=["apple","orange","banana","guava","apple"]; // stringy array
  let flag=fruitnames.includes("guava");// retrun boolean
  console.log(flag);
  let flag1=fruitnames.includes("roja");// retrun boolean
  console.log(flag1);


  //10 for each()
  let number=[1,2,3,4,5,6]; // numbers array
  number.forEach((element) => {
    console.log(element);
    
  });