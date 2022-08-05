function even_odd(num){
    const result = num % 2;
    if (result === 0) {
        return 'even true';
    }
    else {
        return 'odd false';
    }
}
console.log(even_odd(2));
console.log(even_odd(3));