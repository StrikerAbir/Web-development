// before ES6
const person = 'adam sandler';
const person2 = "ben white";

// \n na dile new line hoi na and proti line cotatin dia vag and plus sign dite hoi,
const multiline = 'one line is not enough \n' +
    'second line is not enough\n' +
    'third line is not enough\n';
console.log(multiline);

// after ES6
const person3 = `donald trump`
    // we can multiline without previous requirements
const newMultiLine = `first line is good,
 second line is good, 
 third line is good, 
 fourth line is good`;
console.log(newMultiLine);

    // dynamic sting
const a = 'Tisha'
const b = 'Abir'

const c = `${a} is with ${b} now`;
console.log(c)