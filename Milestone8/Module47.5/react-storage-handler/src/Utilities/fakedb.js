// use local storage to mangage cart datas

const addToDb = id => {
    let shoppingCart;
    // get the shpooing cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart=JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }

    // const quantity = localStorage.getItem(id);
    //add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        // console.log('alrady exist');
        // const newQuantity = parseInt(quantity) + 1;
        // localStorage.setItem(id, newQuantity);
        // console.log();

        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else { 
        // localStorage.setItem(id, 1)
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart=JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
                localStorage.setItem(
                  "shopping-cart",
                  JSON.stringify(shoppingCart)
                );

        }
    }
}

const deleteShoppingCart = ()=>{
    localStorage.removeItem('shopping-cart');
}
export { addToDb, removeFromDb, deleteShoppingCart };