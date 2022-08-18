// only number and operator are allowed in input
function onlyNumberInput(event) {
    const text = event.charCode;
    if ((text >= 48 && text <= 57) || text == 47 || text == 42 || text == 43 || text == 45) {
        return true;
    } else if (text == 13) {
        // This is for enter key press. and show result
        filter('user-input');
    } else {
        return false;
    }
}

// input field value
function getInputFieldValue(inputFieldId) {
    const inputText = document.getElementById(inputFieldId);
    if (inputText != '') {
        const inputValue = inputText.value;
        return inputValue;
    } else {
        return 0;
    }
}


// filter number and operator from input inputFieldId
function filter(userInput) {
    const inputValue = getInputFieldValue(userInput);
    if (inputValue == 0) {
        alert('Please enter number');
        return;
    }
    let num1 = 0;
    let num2 = 0;
    let operator = '';
    for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i] == '+' || inputValue[i] == '-' || inputValue[i] == '*' || inputValue[i] == '/') {
            num1 = parseFloat(inputValue.substring(0, i));
            num2 = parseFloat(inputValue.substring(i + 1, inputValue.length));
            operator = inputValue[i];
            break;
        }
    }
    const result = operation(num1, num2, operator);
    setResult('equal-result', result);
}


// operations
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

// set input in input inputField by page key
function setInput(elementId, input) {
    const element = document.getElementById(elementId);
    element.value += input;
}

// set result in board
function setResult(elementId,result) {
    const element = document.getElementById(elementId);
    element.innerText = `= ${result}`;
}

// clear input field
function allClear(inputFieldId,elementId) {
    const Text = document.getElementById(inputFieldId);
    Text.value = '';
    const result = document.getElementById(elementId);
    result.innerText = '';
}

// clear button function
function clear(userInput) {
    const inputValue = getInputFieldValue(userInput);
     const Value = inputValue.substring(0, inputValue.length - 1);

    const oldValue = document.getElementById(userInput)
    oldValue.value = Value;
}
