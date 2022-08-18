
// equal button
document.getElementById('equal').addEventListener('click', function () {
    const inputValue = getInputFieldValue('user-input');
    if (inputValue == 0) {
        alert('Please enter number');
        return;
    }
    let num1 = 0;
    let num2 = 0;
    let operator='';
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
})

