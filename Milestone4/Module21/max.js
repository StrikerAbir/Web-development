// 2 person
const jim1 = 84;
const dela1 = 75;
if (jim1 > dela1) {
    console.log('jim eat cake');
} else {
    console.log('dela eat cake');
}

// 3 person
const jim = 84;
const dela = 95;
const chinku = 77;

if (jim > dela && jim > chinku) { 
    console.log('eat jim');
} else if (dela > jim && dela > chinku) {
    console.log('eat dela');
} else {
    console.log('eat chinku');
}

// with math function
console.log(Math.max(10, 20));
console.log(Math.min(10, 20));
