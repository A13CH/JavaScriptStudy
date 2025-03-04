// Checked Property

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are NOT! subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with visa`;
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}


//HTML
/*
<body>
    <input type="checkbox" id="myCheckBox">
    <label for="myCheckBox">subscribe</label><br><br>

    <input type="radio" id="visaBtn" name="card">
    <label for="radioBtn">Visa</label><br>

    <input type="radio" id="mastercardBtn" name="card">
    <label for="mastercardBtn">MasterCard</label><br>

    <input type="radio" id="payPalBtn" name="card">
    <label for="payPalBtn">PayPal</label><br><br>

    <button type="submit" id="mySubmit">submit</button>

    <p id="subResult"></p>
    <p id="paymentResult"></p>

    <script src="index.js"></script>
</body>
*/


//CSS
/*
body{
    font-family: verdana;
    font-size: 2em;
}
#mySubmit{
    font-size: 1em;
}
*/