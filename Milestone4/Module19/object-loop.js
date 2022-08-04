var shoppingcart = {
    books: 3,
    sunglasses: 1,
    keyboard: 7,
    mouse: 8,
    pen: 10,
    shoes: 5,
    bottle: 10,
}

const keys = Object.keys(shoppingcart);
const values = Object.values(shoppingcart);

for (var i = 0; i < keys.length; i++){
    console.log(keys[i], values[i])
}

// for in loop
for (var propertyname in shoppingcart) {
    const value = shoppingcart[propertyname];
    console.log(propertyname, value);
}