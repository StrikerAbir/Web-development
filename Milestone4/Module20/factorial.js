// for loop
function factorial(a) {
    let value=1;
    for (let i = 1; i <= a; i++){
        value *= i;
    }
    return value;
}
console.log(factorial(4));