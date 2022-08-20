function inputFieldValue(fieldId) {
    const value = document.getElementById(fieldId).value;
    if (isNaN(parseInt(value))) {
        return true;
    } else {
        return parseFloat(value);
    }
    
}

function setValue(placeId, value) {
    const place = document.getElementById(placeId);
    place.innerText = value;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const income=inputFieldValue('income-field')
    const food=inputFieldValue('food-field')
    const rent=inputFieldValue('rent-field')
    const cloth = inputFieldValue('cloth-field')
    if (income == true || food == true || rent == true || cloth == true) {
        alert('Fill the input field first');
    } else {
        const totalExpenses = food + rent + cloth;
        setValue('expenses', totalExpenses);
        const balance = income - totalExpenses;
        setValue('balance', balance);
    }
})

document.getElementById('save-btn').addEventListener('click', () => {
    const savePercentage = inputFieldValue('save');
    if (savePercentage == true) {
        alert('Fill the Save field first');
    } else {
        const income = inputFieldValue('income-field')
        const savingAmount = (income * savePercentage)/100;
        setValue('saveAmount', savingAmount);
        const balance = parseFloat(document.getElementById('balance').innerText);
        const remainingBalance = balance - savingAmount;
        const reBalance = document.getElementById('reBalance');
        reBalance.innerText = remainingBalance;
    }
})