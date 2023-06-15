//inheritance = a child class can inherit all the methods and properties from another class

class Animal{
    alive = true;

    eat(){
        console.log(`this ${this.name} is eating`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`)
    }
}


class Rabbit extends Animal{
    name = "rabbit"
    run(){
        console.log(`this ${this.name} is running`)
    }
}

class Fish extends Animal{
    name = "fish"


    swim(){
        console.log(`this ${this.name} is swimming`)
    }
}

class Hawk extends Animal{
    name = "hawk"

    fly(){
        console.log(`this ${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly(); 

