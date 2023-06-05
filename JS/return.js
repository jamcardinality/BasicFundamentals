//return = return a value back to place where you involked a functions.

let area;
let height = window.prompt("What is the Height?");
let width = window.prompt("What is the width?");

area = getArea(height,width);

console.log("The area is", area);

function getArea(height,width){
    return height * width;
}