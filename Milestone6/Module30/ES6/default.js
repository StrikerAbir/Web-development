// ES6 er age, jodi sob argument na pathai tokhn emn kortam
function add(a, b) {
    if (a == undefined) {
        a = 0;
    }
    if (b == undefined) {
        b = 0;
    }
    const total = a + b;
    return total;
}
const result = add(10);
console.log(result);

// ES6 ashar por
// ekhane b er parameter default value 0 set kore rakhsi. jodin b er kono argument na ashe tokhn she 0 dhorbe. jodi argument pathai jeta pathabo seta hobe,
function add(a=0, b=0) {

    const total = a + b;
    return total;
}
const op = add(10);
console.log(op);
const op2 = add(10,20);
console.log(op2);
