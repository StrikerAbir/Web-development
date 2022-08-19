document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true, 'phone-number-field');
    singleProductTotalPrice(1219, newCaseNumber, 'phonePriceField');
    SubtotalTaxTotal()
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false, 'phone-number-field');
    singleProductTotalPrice(1219, newCaseNumber, 'phonePriceField');
    SubtotalTaxTotal()
})