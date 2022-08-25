// number
const numbers = [12, 56, 87, 44];
const half = numbers.map(x => x / 2);
console.log(half)

//string
const friends = ['hanks', 'cruise', 'brady', 'brody'];
const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter);
const length = friends.map(friend => friend.length)
console.log(length);

//objects
const products = [
    {id:1, name:'laptop',price:10000},
    {id:1, name:'mobile',price:1000},
    {id:1, name:'watch',price:100},
    {id:1, name:'tab',price:5000},
]

const items = products.map(product => product.name)
console.log(items)
