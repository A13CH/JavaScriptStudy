const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference + "cm";
}

/*
<body>
    <h1 id="myh1">Enter the radius of a circle: </h1>
    <label>radius: </label>
    <input type="text" id="myText"><br><br>
    <button id="mySubmit">submit</button>
    <h3 id="myh3"></h3>
    <script type="text/javascript" src="index.js"></script>
</body>
*/