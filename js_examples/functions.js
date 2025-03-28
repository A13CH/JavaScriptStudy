function add(x, y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;
}
function isEven(x){
    return x % 2 === 0 ? true : false;
}
function isValidEmail(email){
    return email.includes('@') ? true : false;
}

console.log(subtract(3,2));