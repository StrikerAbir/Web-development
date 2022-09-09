function sum(a, b, c) {
    console.log(arguments);
    console.log(typeof arguments);
    const args = [...arguments]; //array banano
    console.log(args);
    const result = a + b + c;
    return result;
}
const total = sum(45, 8, 10, 34, 12);
console.log(total);