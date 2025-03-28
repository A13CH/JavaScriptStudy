// similar to forEach, but returns a new array

const dates = ["2025-1-10", "2026-3-30", "2025-2-20"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


/*
const students = ["John", "Jane", "Doe", "Smith"];
const upperCaseStudents = students.map(upperCase);
const lowerCaseStudents = students.map(lowerCase);

function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}
*/


/*
const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
*/