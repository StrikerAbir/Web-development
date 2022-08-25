const numbers = [12, 3, 54, 22, 45, 6, 21, 5];
const bigNums = numbers.filter(n => (n > 20));
const tiny = numbers.filter(n => (n < 20));
const even = numbers.filter(n => (n % 2 === 0));
console.log(bigNums)
console.log(tiny)
console.log(even)


const products = [
    { id: 1, name: 'laptop', price: 10000 },
    { id: 1, name: 'mobile', price: 1000 },
    { id: 1, name: 'watch', price: 100 },
    { id: 1, name: 'tab', price: 5000 },
];

const expensive = products.filter(product => (product.price >= 5000));
console.log(expensive)