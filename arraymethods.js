//1.every()
let num=[1,2,3,4,5,6,7,8,9];
let flag=num.every((e)=> e<10);  //return boolean 
console.log(flag);

//2.some()
let numb=[1,2,3,4,5,6,7,8,9];
let result=numb.some((e) => e % 2 == 0);  // atleast anyone number give zero for moduls of two
console.log(result);

//3.find()
let total=[1,2,3,4,5,6,7,8,9];
let firstelement=total.find((e) => e % 4 == 0); // return furst element that applies
console.log(firstelement);

//4.indexof()
let fruit=["apple","orange","banana","guava"];
console.log( fruit.indexOf('banana'));
console.log( fruit.indexOf("jackfruit")); // if elemetn not present return -1

//5.lastindexof()
let fruiss=["apple","orange","banana","guava","apple"]; // stringy array
console.log( fruiss.lastIndexOf('banana'));
console.log( fruiss.lastIndexOf('apple'));
console.log( fruiss.lastIndexOf("jackfruit")); // if elemetn not present return -1

//6.reverse()
let no=[1,2,3,4,5,6,7,8,9];
let rev=no.reverse();
console.log(rev);

// sort()
let fruis=["apple","orange","banana","guava","apple"]; // stringy array
let sorted=fruis.sort();
console.log(sorted);

let mix =["apple","orange","banana","guava","apple","123test" , "Aeroplane"]; // stringy array
let sorte=mix.sort();
console.log(sorte);





