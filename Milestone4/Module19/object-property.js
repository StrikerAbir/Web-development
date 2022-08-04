var shoppingcart = {
    books: 3,
    sunglasses: 1,
    keyboard: 7,
    mouse: 8,
    pen: 10
}
console.log(shoppingcart);

// when you know the property name, use dot notation to get the property value
var pencount = shoppingcart.pen;
console.log(pencount);
// alternative way to get the property
var pencount = shoppingcart['pen'];
// to get keys name from object
var property = Object.keys(shoppingcart);
console.log(property)
// to get the property value from object
var propertyvalue = Object.values(shoppingcart);
console.log(propertyvalue)

// when property name in a variable
var propertyname = 'keyboard';
var property = shoppingcart[propertyname];
console.log(property)



// set property value
shoppingcart.mouse = 20;
console.log(shoppingcart);

shoppingcart['keyboard'] = 2;
console.log(shoppingcart);
 
console.log(shoppingcart["pen"]);