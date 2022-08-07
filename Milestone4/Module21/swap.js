let first = 5;
let second = 7;
console.log(first, second);
let tmep;
temp = first;
first = second;
second = temp;
console.log(first, second);

// destructing (swaping without temp)
let first1 = 3;
let second2 = 6;
console.log(first, second);
[first1, second2] = [second2, first1];
console.log(first1, second2);