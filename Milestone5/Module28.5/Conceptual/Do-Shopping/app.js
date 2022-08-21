const cartArray = [];
function addToCart(button) {
    const productName = button.parentNode.parentNode.children[0].innerText;
    const price = button.parentNode.parentNode.children[1].children[0].innerText;
    const productObj = {
        productName: productName,
        price: parseFloat(price),
    };
    cartArray.push(productObj);
    document.getElementById('total-item').innerText = cartArray.length;
    display(cartArray);
}

function display(cartProduct) {
    const tableBody = document.getElementById('tableBody')
    const totalAmount = document.getElementById('total')
    tableBody.innerHTML = '';
    let count = 1;
    let total = 0;
    for (const product of cartProduct) {
        const name = product.productName;
        const price = product.price;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${count}</th>
        <td>${name}</td>
        <td>${price}</td>
        `
        count++;
        tableBody.appendChild(tr);
        total += price;
        totalAmount.innerText = total;
    }
}