const address = '212/a, tower of inch, mars';
console.log(address.length);
console.log(address[4]);

// two string add
const firstName = 'moury';
const lastName = 'chan'
const fullName = firstName + ' ' + lastName;
console.log(fullName);
let first = 'anamul';
first = first + 'houqe';
console.log(first);

// string comparison using toLowerCase toUpperCase
const username = 'blackpink';
const userInput = 'blackpinK';
if (userInput === username) {
    console.log('valid username');
} else {
    console.log('unvalid username');
}

// lower case compare
if (userInput.toLowerCase() === username) {
    console.log('valid username');
} else {
    console.log('unvalid username');
}
// upper case compare
if (userInput.toUpperCase() === username) {
    console.log('valid username');
} else {
    console.log('unvalid username');
}
// using toLocaleLowerCase
if (userInput.toLocaleLowerCase() === username) {
    console.log('valid username');
} else {
    console.log('unvalid username');
}
