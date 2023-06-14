//2D array = An array of arrays 

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[2][2] = "steaks"; 

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}