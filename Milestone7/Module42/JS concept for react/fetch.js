const student = {
    name: "Tishu",
    age: 26,
    likes: 'Abir',
}
const stuJson = JSON.stringify(student);
console.log(stuJson);
const stuParse = JSON.parse(stuJson);
console.log(stuParse);

//add or remove from array
const products = [
    { name: 'laptop', price: '322111' },
    { name: 'Phone', price: '32000' },
    { name: 'Watch', price: '3200' },
    { name: 'Camera', price: '32211' },
];
const newProduct = { name: 'webcam', price: 12000 };
// copy products array and add product
const newProducts = [...products, newProduct];
console.log(newProducts);
// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product => (product.name != 'phone'));
console.log(remaining);
