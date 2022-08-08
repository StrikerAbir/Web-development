const nums = [2, 3, 4, 5, 6,7, 8, 9];
const partial = nums.slice(2, 5);
console.log(partial);
console.log(nums);

// splice
const partial2 = nums.splice(2, 3, 30,63);
console.log(partial2);
console.log(nums);