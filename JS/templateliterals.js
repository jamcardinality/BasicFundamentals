// template literals = delimited with (`) instead of double or single quotes allows embedded variables and expression 

let userName = "Jam";
let items = 3;
let total = "73";

let text = `Hello ${userName} <br>
You have ${items} items in your cart <br>
Your total is ${total}`;

document.getElementById("myLabel").innerHTML = text;

