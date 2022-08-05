// for loop
function factorial(a) {
    let value=1;
    for (let i = 1; i <= a; i++){
        value *= i;
    }
    return value;
}
console.log(factorial(4));

// reverse loop
function factorial(a) {
    let value=1;
    for (let i = a; i >= 0; i--){
        value *= i;
    }
    return value;
}
console.log(factorial(4));

// while loop
function factorial(a) {
    let value = 1;
    let i = 1;
    while (a >= i) {
        value *= i;
        i++;
    }
    return value;
}
console.log(factorial(4));