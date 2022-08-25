const numbers = [1, 2, 4, 6, 8]
const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);

function getDouble(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleItOld(number);
        output.push(doubled);
    }
    return output;
}
function doubleItOld(number) {
    return number*2
}
console.log(getDouble(numbers));

// uporer kaj tai short a.
const doubleIt = num => num * 2;
// map() function er virote call back function dewa hoi. Jeta array er proti ta element er upor kaj kore. sob kaj hoi vitore vitore. proti element er upor funtion operation kore and seta array te rakhe sob vitore vitore.
const makeDouble = numbers.map(doubleIt)
console.log(makeDouble)


// r o short a.
const makeDoubleDirect = numbers.map(num => num * 2);
console.log(makeDoubleDirect);

//r o short array er variable o nilam na
const fiveTimes = [2, 3, 5].map(x => x * 5);
console.log(fiveTimes);
