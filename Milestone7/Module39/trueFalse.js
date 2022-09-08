/*
truthy:
1. true
2. any number positive or negative will be truthy other than 0
3. any string is truthy except, '' empty string without space inside empty string
4. '0' and 'false' is true. cz it is string
5. empty object {} and empty array [] truthy

falsy:
1. false
2. 0 means falsy
3. '' empty string means falsy
4. undefined and null is falsy value

*/

const x = 0;
if (x) {
    console.log('value of x is truthy');
} else {
    console.log('value of x is falsy');
}

// optional

// check falsy
const y=''
if (!y) {
    console.log('value of y is falsy');
}
// check truthy
const z=' '
if (!!z) {
    console.log('value of z is truthy');
}
