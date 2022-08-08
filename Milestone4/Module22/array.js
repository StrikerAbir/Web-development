const nums = [2, 3, 4, 5, 6];
console.log(typeof nums); //it will show this is an objcet, but this is an array
console.log(Array.isArray(nums)); //evabe array check kore.

const newnum = [7, 8, 9, 10, 11, 12, 13, 14];
const newarray = nums.concat(newnum);
console.log(newarray);
