//Functions = define code once, and use it many times. To perform some code, call the function name.

startProgram();

function startProgram(){
    let userName = "Bro";
    let age = 21;
 
    happyBirthday(userName,age);
}

function happyBirthday(b,a){
    console.log("Happy Birthday", a);
    console.log("You are ", b);
}
