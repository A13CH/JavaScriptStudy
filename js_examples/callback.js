// Callback = function that is passed as an argument to another function
// second function doesnt execute until first is done

sum(displayPage, 5, 10);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myH1").textContent = result;
}



/*
hello(wait);

function hello(callback){
    console.log("hello");
    callback();
}
function wait(){
    console.log("wait");
}
function leave(){
    console.log("leave");
}
function goodbye(){
    console.log("goodbye");
}
*/
