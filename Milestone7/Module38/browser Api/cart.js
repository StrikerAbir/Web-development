const getInput = id => {
    const inputField = document.getElementById(id);
    const input = inputField.value;
    inputField.value= '';
    return input;
}
const addProduct = () => {
    const name = getInput('product-name-field');
    const quantity = getInput('product-quantity-field');
    //display product
    display(name, quantity)

    //set to local storage simple way
    localStorage.setItem(name, quantity);
}

const display = (product,quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}