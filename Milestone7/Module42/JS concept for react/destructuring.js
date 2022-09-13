// array destructuring
const num = [1, 2, 3, 4, 5, 6];
const [x, y, ...z] = num;
console.log(x, y, z);

// object destructuring
const student = {
    name: "Tishu",
    age: 26,
    likes: 'Abir',
}
const { name, likes } = student
console.log(name, likes);