const user = { id: 1, name: 'John', job: 'actor' };
console.log(user,' object');
// javascript object notation (JSON)
const stringified = JSON.stringify(user) //(converts a js value to a JSON string)

console.log(stringified, ' converted to string using JSON.stringify');

const parsed = JSON.parse(stringified);
console.log(parsed, ' converted to object using JSON.parse')


const shop = {
    owner: 'bane',
    address: {
        street: '12-bane bazar',
        city: 'San Francisco',
        country: 'Bantadesh',
    },
    products: ['laptop', 'mic', 'table', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew:false
}

console.log(shop,typeof shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON, typeof shopJSON);
const shopOBJ = JSON.parse(shopJSON);
console.log(shopOBJ,typeof shopOBJ)