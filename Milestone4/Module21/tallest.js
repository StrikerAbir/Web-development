function maxArray(a) {
    let max = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > max) max = a[i];
    }
    return max;
}
const height = [167, 190, 120, 165, 137];
const tallest = maxArray(height);
console.log(tallest);