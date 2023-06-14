// Spread operator = allows an iterable such as an array or string to be expanded in place where zero or more arguments are expected (unpack the elements)

// let numbers = [10,1,2,3,4,5,6,7,8,9];
// let maxinum = Math.max(...numbers);
// console.log(maxinum);

let class1 = ["spongebob", "patrick", "sandy"];
let class2 = ["squidward", "Mr. Krabs", "Plankton"];


class1.push(...class2);

console.log(...class1);
