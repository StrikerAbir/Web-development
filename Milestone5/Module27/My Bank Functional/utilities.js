function getInputFieldValueId(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    if (inputFieldValueString == '') {
        alert('Please enter Amount.')
        return 0;
    } else {
        inputField.value = '';
        const inputFieldValue = parseFloat(inputFieldValueString);
        return inputFieldValue;
    }
}

function getElementValueId(elementId) {
    const textElement = document.getElementById(elementId);
    const elementValueString = textElement.innerText;
    const previousValue = parseFloat(elementValueString);
    return previousValue;
}

function setTextElementValueId(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}