let fruits = ["apple", "orange", "banana"];

fruits[3] = "pear";
//add to end
fruits.push("mango");
fruits.pop("mango");
//add to beginning
fruits.unshift("mango");
fruits.shift("mango");

fruits.sort().reverse();

let numOfFruits = fruits.length;
console.log(numOfFruits); //4

let index = fruits.indexOf("apple");
console.log(index); //0

let falseIndex = fruits.indexOf("mango");
console.log(falseIndex); //-1

for(let fruit of fruits){
    console.log(fruit);
}