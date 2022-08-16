function getInputFieldValueId(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    console.log('in1')
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
    console.log('in2')
    const textElement = document.getElementById(elementId);
    const elementValueString = textElement.innerText;
    const previousValue = parseFloat(elementValueString);
    return previousValue;
}

function setTextElementValueId(elementId, newValue) {
    console.log('in3')
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}