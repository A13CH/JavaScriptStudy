const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";

    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }
}

//HTML
/*
<body>
    <form>
        <h1>Temperature Conversion:</h1>
        <input type="text" id="textBox" value="0"><br>
        
        <input type="radio" id="toFahrenheit" name="unit">
        <label for="toFahrenheit">Celsius ➡️ Fahrenheit</label><br>

        <input type="radio" id="toCelsius" name="unit">
        <label for="toCelsius">Fahrenheit ➡️ Celsius</label><br>

        <button type="button" onclick="convert()">submit</button>
        <p id="result"></p>
    </form>
    <script src="index.js"></script>
</body>
*/


//CSS
/*
body{
    font-family: Arial, sans-serif;
    background-color: hsl(0, 0%, 89%);
}
h1{
    color: hsl(214, 74%, 54%);
}
form{
    background-color: hsl(0, 0%, 100%);
    text-align: center;
    max-width: 350px;
    margin: auto;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 5px 5px 15px hsla(0, 0%, 0%, 0.254);
}
#textBox{
    width: 50%;
    text-align: center;
    font-size: 2em;
    border: 2px solid hsla(0, 0%, 0%, 0.74);
    border-radius: 4px;
    margin-bottom: 15px;
}
label{
    font-size: 1.5em;
    font-weight: bold;
}
button{
    margin-top: 15px;
    background-color: hsl(0, 100%, 72%);
    color: hsl(0, 0%, 100%);
    font-size: 1.5em;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}
button:hover{
    background-color: hsl(0, 62%, 58%);
}
#result{
    font-size: 1.75em;
    font-weight: bold;
}
*/