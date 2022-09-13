// ternary
let food = 60;
let food1 = food > 100 ? 'biriani' : 'cha';
console.log(food1);

//convert num to string
const b = 60;
const re = 60 + '';
console.log(re);

// convert string to num
const a = +re;
console.log(a);

// ternary shortcut
const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();

//more shortcut
//user && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive=!isActive;

// object shortcut
const x = 50;
const y = 60;
const obj = {
    x: x,
    y: y,
}
// shortcut
const obj1={x,y}