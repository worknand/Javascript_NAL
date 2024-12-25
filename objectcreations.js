//Various ways of creating Objects in JavaScript

//1.object literals {}
const user={
    firstName :'Nanda',
    lastName :'Kumar'
};
console.log(user.firstName);

//2.Constructor function
function car(brand,model,price){
    this.brand=brand;
    this.model=model;
    this.price=price;
}

const c1=new car("bmw",2000,100000);
console.log(c1.brand);

//3. class style
class customer{
    constructor(name,product){
        this.name=name;
        this.product=product;
    }
    addToCart(){
        console.log(`${this.product} added to the cart`);
        
    }
}
// instance of class

const cust1=new customer("Nanda","Apple");
console.log(cust1.name);
cust1.addToCart();

//4.object.create(): with some prototype object
const employeePrototype={
    printInfo:function(){
        console.log(`hello! ,${this.name}`);
        
    }

}
const emp=Object.create(employeePrototype);
emp.name="kohli";
emp.printInfo();


//4. using factory function: returns an object
function createDepart(deptname,hod){
return{
    dept:deptname,
    HOD:hod,
    printInfo:function(){
        console.log(`hello! ,${this.dept}`);
        
    }
}
}
const result=createDepart("DSP","Roja");
result.printInfo();

