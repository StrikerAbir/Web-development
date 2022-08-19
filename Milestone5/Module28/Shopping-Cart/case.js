// 1. add event listener to the case plus button
// 2. get the value inside the case number caseNumberField
// 3. convert number to an integer value
// 4. calculate the new case number
// 5. set the value to the case number field







document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true,'case-number-field');
    singleProductTotalPrice(59, newCaseNumber, 'casePriceField');
    SubtotalTaxTotal()
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false,'case-number-field');
    singleProductTotalPrice(59, newCaseNumber, 'casePriceField');
    SubtotalTaxTotal()
})