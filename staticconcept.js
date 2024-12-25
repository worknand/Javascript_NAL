class Car{
    static wheels=4;
    constructor(name,price,model){
        this.name=name;
        this.price=price;
        this.model=model;

        
    }

    static stop(){
        console.log("stop car");
        
    }

    drive() {
       console.log(this.name +"  is driving");
        
    }


}

const c1=new Car("honda",2023,50);
console.log(`${c1.model}`,`${c1.name}`,`${c1.price}`,`${Car.wheels}`);
Car.stop();
c1.drive();


