// power
const result = Math.pow(3, 8);
console.log(result);

// absolute
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
if (gap < 5) {
    console.log('friend');
} else {
    console.log('go away');
}

// round er khetre .5 theke behsi hole boro round dibe. kom hole soto round.
const number = 3.23489
console.log(Math.round(number)); 
const number4 = 3.5
console.log(Math.round(number4)); 
const number2 = 4.23489
console.log(Math.ceil(number2));
console.log(Math.floor(number2));

// random number
console.log(Math.random());
console.log(Math.random() * 100); //100 er moddhe random number dei.
console.log(Math.round(Math.random() * 100));
