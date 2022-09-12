 const number=[32,34,11,23,56];
const student = {
    name: "Tishu",
    age: 26,
    likes:'Abir',
 }
// templete string
const about = `Her name is ${student.name}. She love ${student.likes}`;

// arrow functions
const one = () => 55;
const two = num => num + 1;
const three = x => x % 2 === 0;
const four = (x, y, z) => x * y * z;
const five = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//sprade operator
const newNum = [...number];
newNum.push(99);
console.log(number);
console.log(newNew);
// create new array from older array and add an element.
const newNumber = [50, ...number, 100]; 
console.log(newNumber);
