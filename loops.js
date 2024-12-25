// for loop
for (let index = 0; index < 10; index++) {
    console.log(index);  
}

//for... of loop to be used for araay
const array=[1,2,3,4,5];
for (const element of array) {
    console.log(element);
    
}

// while loop
let p=1;
while (p<10) {
    console.log(p);
   // p++;
    ++p;
}


//for in

const user={
    name:"john dee",
    age:30,
    city:"chennai"

}
for (const key in user) {
    
       console.log(user[key]);
}

// for in cam be used for arrays
const br=["chrome","firefix","edge","opera"];
for (const key in br) {
    console.log(br[key]);
    
}