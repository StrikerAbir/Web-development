
const max = Math.max(12, 34, 2, 55, 6, 77);
const number = [12, 34, 67, 87, 66]
// const largest=Math.max(number); // NaN dibe, karon number akta array. vitorer number gula calculate korte pare nai.

// spread operator
console.log(number)
console.log(...number)
const largest = Math.max(...number);
console.log(largest)

// copy array 
const number2 = number //number2 er moddhe number array rakha holo.
number.push(88); // number e push korlam. kintu seta number2 tew dekhabe. karon 2ta aky array k asign korese.
number2.push(99) // number2 te push kora hoise. kintu seta number ew dekhabe, karon same. 2ta aky array k asign korese
console.log(number);
console.log(number2);

// ager tai push korle 2ta tei push hoi tai. (doing this.)
const number3 = [...number] //number2 array er moddhe number array rakha holo. 2d array hoa gelo.
// 1d korte hole just spread operator use kore dibo. tahole hoa jabe.
//ager 2 ta variable e change er jinish ta solved
number.push(88);
number3.push(99);
console.log(number);
console.log(number3);

const number4 = [...number3]
// er r o power holo shamne pisone chile add kora jai issa moto.
const number5 = [100, ...number4, 900, 500]
console.log(number5)