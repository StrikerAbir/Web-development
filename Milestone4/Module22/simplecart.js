const shoppingcart = [
    { name: 'shoe', price: 1200, quantity:2 },
    { name: 'shirt', price: 2200, quantity:5 },
    { name: 'pant', price: 3700, quantity:4 },
    { name: 'belt', price: 600, quantity:3 },
]
function cost(a) {
    let total = 0;
    for (let i = 0; i < a.length; i++){
        total += a[i].price*a[i].quantity;
    }
    return total;
}
console.log(cost(shoppingcart));