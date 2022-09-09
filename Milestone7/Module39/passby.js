// pass by value for primitive types
let num1 = 5;
let num2 = 7;

function multiply(a, b) {
    a = 25;
    const result = a * b;
    return result;
}
console.log(num1)  
const op = multiply(num1, num2);
console.log(op);
console.log(num1);// a er man change hoise but num1 change hoini. cz primitive type value.


//object and array are pass by reference
let student1 = { name: 'miyamora', partner: 'hori' };
let student2 = { name: 'naruto', partner: 'hinata' };
function makeMovie(couple1, couple2) {
    couple1.name = 'mua';
    couple2.partner='sakura'
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1,student2);// change hobe cz non primitive type eta. reference same ase. vitorer value change hoise tai main ew change hoa jabe.