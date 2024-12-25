// class can have only one constructor
//constructor can be overloaded?? NOOO
class Car{
    constructor(name,price,model,color){
        this.name=name;
        this.price=price;
        this.model=model;
        this.color=color;

    }

    refule(){
        console.log("refueled");
        
    }
}
//new keyword to create object
let carProp=new Car("BMW",10000,"VXI","Mettalic blue");
console.log(carProp.name);
console.log(carProp.price);
console.log(carProp.model);
console.log(carProp.color);
carProp.refule();

let carPro1=new Car("Audi",1000,"lXI","blue");
console.log(carPro1.name);
console.log(carPro1.price);
console.log(carPro1.model);
console.log(carPro1.color);
carPro1.refule();
