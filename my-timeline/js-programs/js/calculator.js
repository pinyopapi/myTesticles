const historyDisplay = document.querySelector('#history');
const currentDisplay = document.querySelector('#current');

let currentHolder = [];
let historyHolder = [];

const numberArray = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operatorObject = { minus: "-", plus: "+", division: "/", times: "*" };
const operatorTextArray = Object.keys(operatorObject);
const operatorSignArray = Object.values(operatorObject);

const buttons = document.querySelectorAll(".calc");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", onCalcButtonClick);
}

function onCalcButtonClick() {
    let buttonId = this.getAttribute("id");
    if (buttonId == "sum") {
        calculate();
        historyHolder[1] = "";
    } else if (buttonId == "del") {
        historyHolder = [];
        currentHolder.pop();
    } else if (isOperator(buttonId) && currentHolder.length == 0) {
        alert("You can't start with operator")
    } else if (buttonId == "zero" && currentHolder.length == 0) {
        alert("You can't start with zero")
    } else if (isOperator(buttonId)) {
        if (!containOperator()) {
            currentHolder[currentHolder.length] = toOperatorSign(buttonId);
            translateToHistory();
        } else {
            calculate();
            historyHolder[1] = toOperatorSign(buttonId);
        }
    } else if (isNumber(buttonId)) {
        if (historyHolder[1] == '') {
            historyHolder = [];
        }
        currentHolder[currentHolder.length] = toNumberSign(buttonId);
        if (currentHolder.length > 0) {
            concatenateArrayItems();
        }

    }
    display();
}

function display() {
    let displayableContent1 = "";
    let displayableContent2 = "";

    for (let i = 0; i < historyHolder.length; i++) {
        displayableContent1 += historyHolder[i] + " ";
    }
    for (let i = 0; i < currentHolder.length; i++) {
        displayableContent1 += currentHolder[i] + " ";
    }
    historyDisplay.textContent = displayableContent1;
    if (currentHolder.length == 0) {
        currentDisplay.textContent = "Type a number!"
    } else {
        currentDisplay.textContent = currentHolder;
    }
}

function calculate() {
    let temp1 = Number(historyHolder[0]);
    let temp2 = historyHolder[1];
    let temp3 = Number(currentHolder[0]);

    currentHolder = [];

    if (temp2 == "+") {
        historyHolder[0] = temp1 + temp3;
    } else if (temp2 == "-") {
        historyHolder[0] = temp1 - temp3;
    } else if (temp2 == "*") {
        historyHolder[0] = temp1 * temp3;
    } else if (temp2 == "/") {
        historyHolder[0] = temp1 / temp3;
    }

}

function translateToHistory() {
    for (let i = 0; i < currentHolder.length; i++) {
        historyHolder[i] = currentHolder[i];
    }
    currentHolder = [];
}

function concatenateArrayItems() {
    for (let i = 0; i < currentHolder.length - 1; i++) {
        currentHolder[0] += currentHolder[1];
        currentHolder.splice(1, 1)
    }
}

function containOperator() {
    for (let i = 0; i < historyHolder.length; i++) {
        if (isOperator(historyHolder[i])) {
            return true;
        }
    }
    return false;
}

function isOperator(id) {
    for (let i = 0; i < operatorSignArray.length; i++) {
        if (operatorSignArray[i] == id || operatorTextArray[i] == id) {
            return true;
        }
    }
    return false;
}

function isNumber(string) {
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] == string) {
            return true;
        }
    }
    return false;
}

function toOperatorSign(string) {
    return operatorObject[string]
}

function toNumberSign(string) {
    return numberArray.indexOf(string).toString()
}