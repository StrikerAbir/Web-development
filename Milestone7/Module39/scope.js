// hoisting
function add(a, b) {
    const total = a + b;
    if (b > 5) {
        const sum = 25 + a + b;
    }
    else {
        const sum = 5 + a + b;
        var current = sum;
    }
    console.log(current);
    return total;
}

 // error cz total inside an function scope
add(5,3)

//another example of hoisting
for (var i = 0; i < 5; i++){
    console.log(i);
}
console.log('outside',i);