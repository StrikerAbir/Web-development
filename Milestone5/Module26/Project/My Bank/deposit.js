// step 1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit')
    // step 2: get the deposit amount from the deposit input field
    // use .value to get value from input field
    const depositField = document.getElementById('user-deposit');
    const newDepositAmount = depositField.value;

    if (newDepositAmount == '') {
        alert('Please enter Deposit Amount.')
        return;
    }
    //clear deposit field
    depositField.value = '';
    // console.log(depositAmount);

    // step 3: get the current deposit amount
    // for non-input field use inner text to get the text 
    const depositBoard = document.getElementById('deposit-total');
    const previousDepositTotal = depositBoard.innerText;
    
    // step 4: add number to set the total deposit
    const depositSum = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    depositBoard.innerText = depositSum;

    // step 5: get balance current total
    const balanceBoard = document.getElementById('balance-total');
    const previousBalanceTotal = balanceBoard.innerText;

    const balanceSum = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    balanceBoard.innerText = balanceSum;

})