// practice 1
var fruits = ['apple', 'banana', 'orange'];
console.log(fruits.indexOf('banana'));
fruits[fruits.indexOf('banana')] = 'mango';
fruits.pop('orange');
fruits.push('watermellon');
console.log(fruits);
// practice 2
var tom = 66;
if (tom >= 80) {
    console.log('A');
} else if (tom >= 60) {
    console.log('B');
} else if (tom >= 50) {
    console.log('C');
} else if (tom >= 40) {
    console.log('D');
} else {
    console.log('fail F');
}
// practice 3
var a = 13;
var b = 79;
var c = 45;
if (a > b) {
    if (a > c) {
        console.log(a);
    } else {
        console.log(c);
    }
} else if (b > c) {
    console.log(b);
} else {
    console.log(c);
}
// practice 4
var a = 9;
var b = 9;
var c = 8;
if (a==b || a==c || b==c) {
    console.log('isosceles');
} else {
    console.log('not isosceles');

}