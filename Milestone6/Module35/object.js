//ways of creating object

//1. create object using object literal
const player = {};
// property
player.name = 'small watson';
player.specialty = 'batsman';
// method
player.bat = function () {
    console.log('swing the bat.')
}

console.log(player);
player.bat();

const student = {
    name: 'bane',
    job: 'kisu na',
    ball: function () {
        console.log('throw the ball.');
    },
    salary: 1000,
}

//2. create object using object constructor

const person = new Object(); //empty object create korbe person er jonne
console.log(person);

// 3. object create method
const item = Object.create(null);
console.log(null);
//ei system e object create er time inheritance hoi, create() er moddhe jodin kono variable k dea hoi tarmane new object ta oi variable er object ke inherit korese. Jmn
const atel = Object.create(student);
console.log(atel);  //empty object dekha jabe. but student inheritance ase
console.log(atel.name)

// 4. using class  (es6 class)
class Person{
    name= 'selim';
    address = 'dhaka';
    constructor(age) {
        this.age=age;
    }
}
const person1 = new Person(56);
console.log(person1);

// 5. using function  (es6 ashar age eta use hoto)
function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', '1K');
console.log(tesla);