function körDiskret() {
    console.log('Detta är ett diskret script som körs på begäran!');
}

let changeBgColor = document.getElementById("changeBgColor");
let body = document.getElementById("body");

changeBgColor.addEventListener("click", function() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
})

const displayCalculation = document.getElementById("displayCalculation");

function appendToDisplay(input){
    displayCalculation.value += input;
}
function calculate(){
    try{
        displayCalculation.value = eval(displayCalculation.value);
    }
    catch(error){
        displayCalculation.value = "Error";
    }
}
function clearDisplay(){
    displayCalculation.value = "";
}