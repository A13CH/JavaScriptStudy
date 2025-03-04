// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}

/*
Random number in a range
const min = 50;
const max = 100;

let randNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randNum);
*/


//HTML
/*
<body>
    <button id="myButton">Roll</button><br>
    <label id="label1" class="myLabels"></label><br>
    <label id="label2" class="myLabels"></label><br>
    <label id="label3" class="myLabels"></label><br>
    <script src="index.js"></script>
</body>
*/


//CSS
/*
body{
    font-family: Verdana;
    text-align: center;
}
#myButton{
    font-size: 3em;
    padding: 5px 25px;
    border-radius: 5px;
}
.myLabels{
    font-size: 3em;
}
*/