//this = reference to a particular object
//       the object depends on the immediate context.


this.name = "mycoolWindow";
console.log(window.name);


/*
    model:"Mustang", 
    color:"red",
    year:2023,
    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}

const car2 = {
    model:"corvette", 
    color:"blue",
    year:2024,
    drive : function(){
        console.log(`You drive the ${car2.model}`);
    }
}

car1.drive();
car2.drive();

*/