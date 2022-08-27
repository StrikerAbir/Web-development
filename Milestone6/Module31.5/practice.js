// 3.1
const arrow0 = n => n / 5;
console.log(arrow0(10));
// 3.2
const arrow1 = (a, b) => (a+2) *(b+2); 
console.log(arrow1(8,8));
// 3.3
const arrow2 = (a, b, c) => a * b * c; 
console.log(arrow2(2, 4, 6));
// 3.4
const arrow3 = (a, b) => {
    const x = a + 2;
    const y = b + 2;
    return x * y;
}; 
console.log(arrow3(8, 8));

//5
const numbers = [1, 2, 4, 6, 8]
const result = numbers.map(n => n * 5);
console.log(result);
//6
const numbers1 = [1, 2, 4, 6, 8]
const result1 = numbers.filter(n => n%2 === 0);
console.log(result1);

// 7
const fish = {
    name: 'hilsha',
    address: 'chadpur',
    color: 'silver',
    phone: '0179798434',
    price: 4000,

}