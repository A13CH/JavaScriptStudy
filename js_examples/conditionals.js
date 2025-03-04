// Conditional Statements

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `You are too old to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born`;
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age cant be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}


//HTML


/*
<body>
    <label>Enter your age: </label><br>
    <input type="text" id="myText"><br>
    <button type="submit" id="mySubmit">submit</button>
    <p id="resultElement"></p>
    <script src="index.js"></script>
</body>
*/