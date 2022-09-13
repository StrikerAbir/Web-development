const products = [
    { name: 'laptop', price: '322111'},
    { name: 'Phone', price: '32000'},
    { name: 'Watch', price: '3200'},
    { name: 'Camera', price: '32211'},
]

const brands = products.map(product => product.name);
console.log(brands);

products.forEach(product => console.log(product.price))

const pick = products.filter(product => (product.price >= 32000))
console.log(pick);

const pick2 = products.find(product => (product.price >= 32000))
console.log(pick2);