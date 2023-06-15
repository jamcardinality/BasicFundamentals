// callback = a function passed as an arguments to another function.

// Ensures that a functions is not going
// To run before a task is completed 
// Helps us develop asynchronous code
// (When one function has to wait for another functions)
// That helps us avoid errors and potentials problems
// Ex. Wait for a file to load

sum(2, 3, displayDOM);

function sum(x, y, myFunc){
    let result = x + y;
    myFunc(result);   
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementByID("myLabel").innerHTML = output;
}



