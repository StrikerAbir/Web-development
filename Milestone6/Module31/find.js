const numbers = [12, 3, 54, 22, 45, 6, 21, 5];
const fives = numbers.find(n => (n % 5 === 0))
const fivesAll = numbers.filter(n => (n % 5 === 0))
console.log(fives);
console.log(fivesAll);

const products = [
    { id: 1, name: 'laptop', price: 10000 },
    { id: 1, name: 'mobile', price: 1000 },
    { id: 1, name: 'watch', price: 100 },
    { id: 1, name: 'tab', price: 5000 },
];

const expensive = products.find(product => (product.price >= 5000));
const expensiveAll = products.filter(product => (product.price >= 5000));
console.log(expensive)
console.log(expensiveAll)