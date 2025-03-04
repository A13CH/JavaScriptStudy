// while loop

let loggedIn = false;
let username;
let password;

do{
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");
    
    if(username === "alec" && password === "password"){
        loggedIn = true;
        console.log("You are logged in");
    }
    else{
        console.log("Invalid credentials please try again");
    }
}while(!loggedIn)

/*
let username;

do{
    username = window.prompt("Enter your name: ");
} while(username === "" || username === null)

console.log(`Hello ${username}`);
*/

/*
let username = "";

while(username === "" || username === null){
    username = window.prompt("Enter your name");
}

console.log(`Hello ${username}`);
*/