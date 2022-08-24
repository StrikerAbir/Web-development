// 1. var let const
const b = 10;
let c = 4;
c = 7;
//2. default parameters with 3. arrow function
const a = (a = 0, b = 0) => a + b;

// 4. template string
const string = `
one two three
do you need ${b,c} and ${a(b,c)}
`

// 5. spread
const age = [11, 32, 31]
const newArray = [...age, 5, 6]

// 6. destructuring
const { x, y } = { x: 45, y: 12, z: 14, name: 'atik' }

// dhora jak x1,y1 ei duita declear korlam but baki gula ami onno akta variable a rakhbo tokhn eta kora jai.
const { x1, y1, ...more } = { x1: 45, y1: 12, z: 14, name: 'atik', };
console.log(x1)
console.log(y1)
console.log(more) // baki tuku object hisabe more er moddhe theke gelo