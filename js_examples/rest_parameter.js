function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "John", "Doe", "III");
console.log(fullName);


/*
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);
console.log(total);
*/


/*
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}


const food1 = "pizza";
const food2 = "burger";
const food3 = "fries";
const food4 = "hotdog";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);
*/