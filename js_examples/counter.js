// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}


//HTML
/*
<body>
    <label id="countLabel">0</label><br>
    <div id="btnContainer"> 
        <button id="decreaseBtn" class="buttons">decrease</button>
        <button id="resetBtn" class="buttons">reset</button>
        <button id="increaseBtn" class="buttons">increase</button>
    </div>
    <script type="text/javascript" src="index.js"></script>
</body>
*/


//CSS
/*
#countLabel{
    display: block;
    text-align: center;
    font-size: 10em;
    font-family: Helvetica;
}
#btnContainer{
    text-align: center;
}
.buttons{
    padding: 10px 20px;
    font-size: 1.5em;
    color: white;
    background-color: hsl(218, 93%, 73%);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.25s;
}
.buttons:hover{
    background-color: hsl(218, 86%, 56%);
}
*/