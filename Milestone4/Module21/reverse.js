// function for reverse string;
function reverseString(a) {
    let newarray = '';
    for (i = a.length - 1; i >= 0; i--) {
        newarray += a[i];
    }
    return newarray;
}
// function for reverse word.
function reverseWord(a) {
    const word = a.split(' ');
    let newarray = [];
    for (i = word.length - 1; i >= 0; i--){
        newarray.push(word[i]);
    }
    newarray=newarray.join(' ');
    return newarray;
}
const mystring = 'i love someone';
console.log(reverseString(mystring));
console.log(reverseWord(mystring));