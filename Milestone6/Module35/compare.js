// const first = { a: 1, b: 2,};
// const second = { a: 1, b: 2,};
// eder output dekhabe not same. === dia value soho reference ta k check kore. tai ekhane value same holew reference same na.
if (first === second) {
    console.log('same');
} else {
    console.log('not same');
}

const third = second;
//eta same hobe karon value and reference same dutai,
if (third === second) {
    console.log('same');
} else {
    console.log('not same');
}

//solution for this
// do not use this method to compare object or array
/* karon object er key and value same thaklew jodi order change hoa jai tahole eta kaj korbe na not same dekhabe.
like this
const first = { a: 1, b: 2, };
const second = {  b: 2,a: 1, };
*/

const first = { a: 1, b: 2, c:5, d:1 };
const second = { a: 1, c: 5,b:2, }
const firstString =JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString);
if (firstString === secondString) {
    console.log('same');
} else {
    console.log('not same');
}

// with function. this is not reliable too.
function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        for (const key of firstKeys) {
            if (first[key] !== second[key]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}