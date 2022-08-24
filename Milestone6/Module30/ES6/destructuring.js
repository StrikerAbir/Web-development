// ! object destructuring
const fish = {
    name: 'hilsha',
    address: 'chadpur',
    color: 'silver',
    phone: '0179798434',
    price:4000,

}

const phone = fish.phone; //bar bar object er kase gia phone na call kore. ekhane variable kore tar modhhe phone rekhe dile kaj kome.
const color = fish.color;
// so upore 2ta object er property er namei kintu variable er nam newa hoise. so ei kaj ta soto vabew kora jai.

// short way to set variable and property name same. property dia variable declear
const { name } = fish; //jethetu eta object tai variable const nia 2nd bracket dia property er nam nia = object er nam
// structure
// const {variable/property jkoita lage , dia boahao} = object;

const { nam, age, job } = { nam: 'alom', age: '25', job: 'actor' };
console.log(nam)
console.log(age)
console.log(job)

const { address } = fish;
console.log(address)

// dhora jak x1,y1 ei duita declear korlam but baki gula ami onno akta variable a rakhbo tokhn eta kora jai.
const { x1, y1, ...more } = { x1: 45, y1: 12, z: 14, name: 'atik', };
console.log(x1)
console.log(y1)
console.log(more) // baki tuku object hisabe more er moddhe theke gelo

// ! array destructuring

// variable name ja ta dewa jai
const [a, b, c] = [33, 44, 56]
console.log(a)
console.log(b)
console.log(c)

function getName() {
    return ['alim', 'dalim'];
}
const [bap, chaha] = getName();
console.log(chaha, bap)

const [d] = [99, 44, 56, 100]
console.log(d);
console.log(e); //error e not defined