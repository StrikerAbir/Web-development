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
    addProductToDisplay(name, quantity)

    //set to local storage simple way
    saveItemToLocalStorage(name, quantity);
}

// check kora j cart name kono item ase kina.
const getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart= JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity)=>{
    const cart = getShoppingCartFromLocalStorage();
    // add product to the object as property
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    // save to localStorage
    localStorage.setItem('cart', cartStringify);
}

const addProductToDisplay = (product,quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}

const displayStoredProduct = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        addProductToDisplay(product, quantity)
    }
}
displayStoredProduct();