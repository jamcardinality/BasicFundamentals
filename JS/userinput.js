//How to accept user input 

//EASY WAY with a window prompt 
// let userName = window.prompt("What's your name?");
// console.log(userName);

// Diffucult way HTML textbox 

let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;

}
