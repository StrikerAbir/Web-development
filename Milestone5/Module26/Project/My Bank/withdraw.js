// step 1: add event listener to the deposit button 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('withdraw')
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmount = withdrawField.value;
    console.log(newWithdrawAmount);
    if (newWithdrawAmount=='') {
        alert('Please enter Withdraw Amount.')
        return;
    }
    
    withdrawField.value = '';
    const withdrawBoard = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawBoard.innerText;
    
    const balanceBoard = document.getElementById('balance-total');
    const previousBalanceTotal = balanceBoard.innerText;

    if (parseFloat(previousBalanceTotal) > parseFloat(newWithdrawAmount)) {
        const withdrawSum = parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawTotal);
        withdrawBoard.innerText = withdrawSum;

        const balanceSubtract = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
        balanceBoard.innerText = balanceSubtract;  
    } else {
        alert("You don't have enough money");
        return;
    }
})