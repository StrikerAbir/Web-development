function getInputFieldValueId(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    if (inputFieldValueString == '') {
        alert('Please enter Amount.')
        return;
    }
    inputField.value = '';
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

function getElementValueId(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueId('user-deposit');
    
})