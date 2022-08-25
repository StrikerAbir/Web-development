
//foreach kono kisu return korena

//string
const friends = ['hanks', 'cruise', 'brady', 'brody'];
friends.forEach(friend => console.log(friend));
friends.forEach(friend => {
    const ok = (friend + 'ok');
    console.log(ok);
});


//objects
const products = [
    { id: 1, name: 'laptop', price: 10000 },
    { id: 1, name: 'mobile', price: 1000 },
    { id: 1, name: 'watch', price: 100 },
    { id: 1, name: 'tab', price: 5000 },
]

products.forEach(product => console.log(product))