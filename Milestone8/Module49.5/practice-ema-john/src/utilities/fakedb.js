//use local storage to manage cartArray

const getStoredCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
        
    }
    return shoppingCart;
}
const addToDb = id => {
    let shoppingCart = getStoredCart();
    //shopping-cart a id quantity set kora.
    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
export {addToDb}