// Type Conversion = change the datatype of a value to another (string, nummbers, boolean)

/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
age += 1;
console.log(typeof age);
console.log("Happy birthday! You are", age, "years old");
*/

let x;
let y;
let z;

x = Number("pizza"); //NaN 
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);