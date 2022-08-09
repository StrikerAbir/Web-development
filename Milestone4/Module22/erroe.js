function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'enter number';
    } else { 
         return num1 + num2; 
    }
   
}
console.log(add(12, 45));
console.log(add(12, '45'));

const nayoks = ['Bangla Bhai', 'English Bhai', 'Korean Bhai ', 'Turkish Bhai '];
for (const nayok in nayoks) {
    console.log(nayoks[nayok]);
}

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum)