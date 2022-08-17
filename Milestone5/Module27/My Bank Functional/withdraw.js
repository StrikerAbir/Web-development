/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueId function
3. get previous withdraw amount by using getTextElementValueId function
4. calculate new withdraw total and set the value
4.5. set new withdraw total by using setTextElementValueId function
5. get previous balance by using getTextElementValueId function
6. calculate new withdraw total and set value

*/
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueId('user-withdraw');

    if (newWithdrawAmount != 0) {
        // calculate new withdraw amount
        const previousWithdrawTotal = getElementValueId('withdraw-total');

        const withdrawSum = newWithdrawAmount + previousWithdrawTotal;
        
        // set new deposit total amount
        setTextElementValueId('withdraw-total', withdrawSum);

        // calculate new balance amount
        const previousBalanceTotal = getElementValueId('balance-total');
        if (previousBalanceTotal > newWithdrawAmount) {
            const balanceSubtract = previousBalanceTotal - newWithdrawAmount;
            // set new balance amount
            setTextElementValueId('balance-total', balanceSubtract);
        } else {
            alert("You don't have enough money");
            return;
        }
        
    }
})