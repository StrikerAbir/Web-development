function sum(array) {
    let odd = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            odd+=array[i];
        }
    }
    return odd;
}
const nums = [5, 7, 8, 10, 45, 30];
console.log(sum(nums));