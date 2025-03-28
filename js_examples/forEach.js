// forEach() - used to apply a function to each element in an array

let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

fruits.forEach(upperCase);
fruits.forEach(display);
fruits.forEach(lowerCase);
fruits.forEach(display);
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}
function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}
function display(element){
    console.log(element);
}
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

/*
let numbers = [1,2,3,4,5];

numbers.forEach(double);
numbers.forEach(triple);
numbers.forEach(square);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}
function triple(element, index, array){
    array[index] = element * 3;
}
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}
function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}
*/