function updateCaseNumber(isIncrease, inputFieldId) {
    const caseNumberField = document.getElementById(inputFieldId);
    const caseNumber = parseFloat(caseNumberField.value);
    let newCaseNumber = caseNumber;
    if (isIncrease) {
        newCaseNumber++;
    } else if (newCaseNumber > 0) {
        newCaseNumber--;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function singleProductTotalPrice(price, quantity, priceFieldId) {
    const priceField = document.getElementById(priceFieldId);

    const totalPrice = quantity * price;
    priceField.innerText = totalPrice;

}

function getInnerText(id) {
    const InnerText = document.getElementById(id).innerText;
    return InnerText;
}
function SubtotalTaxTotal() {
    const subtotalField = document.getElementById('subTotal');
    const phoneTotal = document.getElementById('phonePriceField').innerText;
    const caseTotal = document.getElementById('casePriceField').innerText;
    const subtotal = parseFloat(phoneTotal) + parseFloat(caseTotal);
    subtotalField.innerText = subtotal;

    const taxField = document.getElementById('tax');
    const phoneField = document.getElementById('phone-number-field').value
    const caseField = document.getElementById('case-number-field').value
    const taxTotal = (parseFloat(phoneField) * 5) + (parseFloat(caseField) * .5);
    taxField.innerText = taxTotal;

    const total = document.getElementById('total');
    const finalTotal = subtotal + taxTotal;
    total.innerText=finalTotal;
}