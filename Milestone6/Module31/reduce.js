const numbers = [1, 2, 3, 4, 5];

// Structure = .reduce(accumulator function, initial value)
// Accumulator function er 2ta parameter thake, akta opertaion kore jeta thake ota r jonne, r akta current element.
const total = numbers.reduce((previous, current) => previous + current, 0);
// ekahne 0 holo initial value. sum kora suru hoobe 0 dia. current a thakbe array value previous suru hobe initial value 0 dia.
console.log(total);
const multiline = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
}, 10);
console.log(multiline);