// string slicing


const email = "user1@gmail.com";

let username = email.slice(0, email.indexOf('@'));
let extension = email.slice(email.indexOf('@') + 1);

console.log(username);
console.log(extension);


//const fullName = "Alec Hoelscher";

//let firstName = fullName.slice(0,4);
//let lastName = fullName.slice(5);
//let firstChar = fullName.slice(0,1);
//let lastChar = fullName.slice(-1);

//let firstName = fullName.slice(0, fullName.indexOf(' '));
//let lastName = fullName.slice(fullName.indexOf(' ') + 1);

//console.log(firstName);
//console.log(lastName);