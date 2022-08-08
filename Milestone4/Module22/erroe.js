function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'enter number';
    } else { 
         return num1 + num2; 
    }
   
}
console.log(add(12, 45));
console.log(add(12, '45'));