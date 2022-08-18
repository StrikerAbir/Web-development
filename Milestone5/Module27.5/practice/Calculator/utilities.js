// only number and operator are allowed in input
function onlyNumberInput(event) {
    const text = event.charCode;
    if ((text >= 48 && text <= 57) || text == 47 || text == 42 || text == 43 || text == 45) {
        return true;
    } else {
        return false;
    }
}

function getInputFieldValue(inputFieldId) {
    const inputText = document.getElementById(inputFieldId);
    if (inputText != '') {
        const inputValue = inputText.value;
        return inputValue;
    } else {
        return 0;
    }
}

function operation(num1, num2, operation) {
    if (operation == '+') {
        return num1 + num2;
    } else if (operation == '-') {
        return num1 - num2;
    } else if (operation == '*') {
        return num1 * num2
    } else if (operation == '/') {
        return num1 / num2;
    }
}

function setResult(elementId,result) {
    const element = document.getElementById(elementId);
    element.innerText = `= ${result}`;
}