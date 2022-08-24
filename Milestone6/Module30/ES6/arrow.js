// function declaration
function add(a, b) {
    const c = a + b;
    return c;
}
const total = add(10, 20);
console.log(total);

// function expression
const add1 = function add1(a, b) {
    const c = a + b;
    return c;
}
// function expression with anonymous function
const add2 = function (a, b) {
    const c = a + b;
    return c;
}
const add3 = function (a, b) {
    return a+b;
}

// arrow function
//    =parameter function return
const add4 = (a, b) => a + b;