
var button0 = document.getElementById("0");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
var button5 = document.getElementById("5");
var button6 = document.getElementById("6");
var button7 = document.getElementById("7");
var button8 = document.getElementById("8");
var button9 = document.getElementById("9");

var buttonDec = document.getElementById("dec");

var buttonMultiply = document.getElementById("mul");
var buttonDivide = document.getElementById("div");
var buttonAC = document.getElementById("AC");
var buttonCE = document.getElementById("CE");
var buttonMinus = document.getElementById("minus");
var buttonPlus = document.getElementById("plus");
var buttonEquals = document.getElementById("equals");

var visorCurrent = document.getElementById("current");
var visorHistory = document.getElementById("history");

var currentValue = [];
var currentOperation = "";
var lastOperation = [];
var visorText = "0";

var lastDigit = 0;
var value1 = 0;
var value2 = 0;


function doTheMath(){
    switch(currentOperation){
        case "×":
            visorHistory.innerHTML = value1 + "×" + value2 + "=" + (Math.round((value1 * value2) * 100) / 100);
            value1 = (Math.round((value1 * value2) * 100) / 100);
            afterProcess()
            break;
        case "÷":
            visorHistory.innerHTML = value1 + "÷" + value2 + "=" + (Math.round((value1 / value2) * 100) / 100);
            value1 = (Math.round((value1 / value2) * 100) / 100);
            afterProcess()
            break;
        case "+":
            visorHistory.innerHTML = value1 + "+" + value2 + "=" + (Math.round((value1*1 + value2*1) * 100) / 100);
            value1 = (Math.round((value1*1 + value2*1) * 100) / 100);
            afterProcess()
            break;
        case "-":
            visorHistory.innerHTML = value1 + "-" + value2 + "=" + (Math.round((value1 - value2) * 100) / 100);
            value1 = (Math.round((value1 - value2) * 100) / 100);
            afterProcess()
            break;
        default:
            visorCurrent.innerHTML = value1;
            visorHistory.innerHTML = value1;
            value2 = 0;
            currentValue = [];
            break;
    }
}

function addNumber(val){
    lastDigit = (visorCurrent.innerHTML).charAt((visorCurrent.innerHTML).length - 1);
    
    if(currentValue.indexOf(".") == -1 && val == "." || val != "."){
   if (currentOperation == ""){
    currentValue.push(val);
    value1 = currentValue.join("");
    visorText = currentValue.join("");
    visorCurrent.innerHTML = visorText;
    } else {
    currentValue.push(val);
    value2 = currentValue.join("");
    visorCurrent.innerHTML = value1 + currentOperation + value2;
    }
    }
}

function addOperation(val){
    //lastDigit = (visorCurrent.innerHTML = )).charAt((visorCurrent.innerHTML = )).length - 1);

    switch(val){
        case "*":
            if (value1 != 0 && value2 == 0){
                currentOperation = "×";
                currentValue = [];
                visorCurrent.innerHTML = value1 + "×";
            } else {
                doTheMath();
                currentOperation = "×";
                visorCurrent.innerHTML = value1 + "×";
            }
            break;
        case "/":
            if (value1 != 0 && value2 == 0){
                currentOperation = "÷";
                currentValue = [];
                visorCurrent.innerHTML = value1 + "÷";
            } else {
                doTheMath();
                currentOperation = "÷";
                visorCurrent.innerHTML = value1 + "÷";
            }
            break;
        case "+":
            if (value1 != 0 && value2 == 0){
                currentOperation = "+";
                currentValue = [];
                visorCurrent.innerHTML = value1 + "+";
            } else {
                doTheMath();
                currentOperation = "+";
                visorCurrent.innerHTML = value1 + "+";
            }
            break;
        case "-":
            if (value1 != 0 && value2 == 0){
                currentOperation = "-";
                currentValue = [];
                visorCurrent.innerHTML = value1 + "-";
            } else {
                doTheMath();
                currentOperation = "-";
                visorCurrent.innerHTML = value1 + "-";
            }
            break;        
    }
}

function afterProcess(){
            if (isNaN(value1)){
                clearAC();
            } else {
            currentOperation = ""
            value2 = 0;
            visorCurrent.innerHTML = Math.round(value1 * 100) / 100;
            currentValue = [];
            }
}

function clearAC(){
    value1 = 0;
    value2 = 0;
    lastDigit = 0;
    currentValue = [];
    currentOperation = "";
    lastOperation = [];
    visorCurrent.innerHTML = "0";
    visorHistory.innerHTML = "0";
}


document.addEventListener("DOMContentLoaded", function(event) {
    button1.onclick = function(){addNumber(1)};
    button2.onclick = function(){addNumber(2)};
    button3.onclick = function(){addNumber(3)};
    button4.onclick = function(){addNumber(4)};
    button5.onclick = function(){addNumber(5)};
    button6.onclick = function(){addNumber(6)};
    button7.onclick = function(){addNumber(7)};
    button8.onclick = function(){addNumber(8)};
    button9.onclick = function(){addNumber(9)};
    button0.onclick = function(){addNumber(0)};
    buttonDec.onclick = function(){addNumber(".")};
    buttonMultiply.onclick = function(){addOperation("*")};
    buttonDivide.onclick = function(){addOperation("/")};
    buttonPlus.onclick = function(){addOperation("+")};
    buttonMinus.onclick = function(){addOperation("-")};
    buttonEquals.onclick = function(){doTheMath()};
    buttonAC.onclick = function(){clearAC()};

});
