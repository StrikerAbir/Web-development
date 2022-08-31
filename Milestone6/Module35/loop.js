// array by loop
const numbers = [12, 13, 14, 15, 16, 17, 18]
for (const number of numbers) {
    console.log(number);
}

//object by loop
const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1,
};
// 1. for of can not used with objects
// for (const key of bottle) {
//     console.log(key);
// }


/* three ways to read object property
 bottle.color       eta use hoi jokhn amra jani key er nam.
 bottle.['color']
 bottle.[key]  (variable name)
 */
// first option to loop keys (for of)
const keys = Object.keys(bottle);
for (const key of keys) { //Objcet.keys(bottle) eta  
    console.log(key);
    console.log('values =', bottle[key]);
}

// second option to loop (for in) best.
for (const key in bottle) {
    console.log(key);
    console.log(key,bottle[key]);
}

//advanced
const pairs = Object.entries(bottle); //eta array of array dei.2d array
for (const [key, value] of pairs) { // array distructuring kore key r value er moddhe array value dhukai dei.
    console.log(key,value);
}