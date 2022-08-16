
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueId('user-deposit');
    if (newDepositAmount != 0) {
        // calculate new deposit amount
        const previousDepositTotal = getElementValueId('deposit-total');
        const depositSum = newDepositAmount + previousDepositTotal;
        // set new deposit total amount
        setTextElementValueId('deposit-total', depositSum);

        // calculate new balance amount
        const previousBalanceTotal = getElementValueId('balance-total');
        const balanceSum = newDepositAmount + previousBalanceTotal;
        // set new balance amount
        setTextElementValueId('balance-total', balanceSum);
    }
    
    
})