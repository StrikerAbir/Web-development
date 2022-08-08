const phone = [
    { name: 'samsang', camera: 12, storages: '32gb', price: 42000 },
    { name: 'walton', camera: 10, storages: '32gb', price: 26000 },
    { name: 'iphone', camera: 12, storages: '32gb', price: 76000 },
    { name: 'nokia', camera: 12, storages: '32gb', price: 46000 },
    { name: 'xaomi', camera: 12, storages: '32gb', price: 40000 },
]
function cheap(a) {
    let lowprice = a[0];
    for (let i = 0; i < a.length; i++){
        if (a[i].price < lowprice.price) {
            lowprice = a[i];
        }
    }
    return lowprice;
}
console.log(cheap(phone));
