const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1,
};
console.log(bottle)
const keys= Object.keys(bottle)
console.log(keys);
const values =Object.values(bottle)
console.log(values);

const pairs = Object.entries(bottle); //key and value aksathe dekhte hole. 2d akare dekhai.
console.log(pairs);

delete bottle.isCleaned;
console.log(bottle)

//Object k seal korle kono property delete ba add kora jai na. Kintu update kora jai. Eta sudhu kono property remove ba add kora theke atkai.
Object.seal(bottle);
delete bottle.color;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle)

//Object k freeze korle kono property delete, add ba update kora jai na. 
Object.freeze(bottle);
delete bottle.color;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle)