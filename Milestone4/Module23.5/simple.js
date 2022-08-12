function sum(a) {
    if (a == 1 ) {
        return 1;
    } else {
        return a + sum(a - 1);
    }
}
console.log(sum(5));