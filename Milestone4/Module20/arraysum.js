function sum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}
const nums = [5, 7, 8, 10, 45, 30];
console.log(sum(nums));