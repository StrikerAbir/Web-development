

/*
             8 ways to get undefined
1. variable that is not initialized will give undefined.
2. function with no return
3. function parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined.
5. property that doesn't exists on an object will give you undefined.
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined.

*/

// 1.
let first;
console.log(first);

// 2
function a(c,b) {
    const total = c + b;
}
const result = a(7, 8);
console.log(result);

// 3
function b(c, b, a,e) {
    const total = c + b + a + e;
    console.log(c,b,a,e);
}
b(7, 8);

// 4
function noNeg(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const total = noNeg(2, -5);
console.log(total);

// 5
const fifth = { id: 3, name: 'bane', age: 40 }
console.log(fifth.age,fifth.salary);

// 6
const sixth = [1, 2, 4, 6, 8]
console.log(sixth[1], sixth[8]);

// 7
delete sixth[1]; // array theke 1 index delete hoa gese. jagata faka thakbe. hole create hoi, never use that. use splice to remove.
console.log(sixth);

// 8
const eight = undefined; // don't do this use null for showing empty.

// use of null
const ninth = null; // value nei bojhate use hoi.
const data = { result: [], updated: null };

console.log(typeof undefined);
console.log(typeof null);  // null er type holo object.