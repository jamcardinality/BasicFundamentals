// Arrow Function = compact alternative to a traditional function expression
// =>

/*
const greeting = function(userName){
    console.log(`hello ${userName}`);
}
*/

/*
const greeting = (userName) => console.log(`hello ${userName}`);
greeting("bro");
*/

/*
const percent = (x, y) => x / y * 100;
console.log(`${percent(45, 50)}%`);
*/

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) =>  y - x);
grades.forEach((element) => console.log(element));


