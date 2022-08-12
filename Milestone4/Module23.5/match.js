const numbers = [45, 55, 23, 67, 99];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// using for of loop
// array er moddhe element loop through kore pete chaile easy way
for (const number of numbers){
    console.log(number)
}

const products = [
    {id:1, name:'iphone', price:89000},
    {id:2, name:'laptop', price:59000},
    {id:3, name:'trimerphone', price:890},
    {id:4, name:'hard drive', price:8000},
    {id:5, name:'ssd', price:9000},
];

for (const product of products) {
    console.log(product);
}

function matchproduct(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
console.log(matchproduct(products,'phone'))