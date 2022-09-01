// 1
const object1 = {
    name: 'Tishu',
    id: 170201030,
    dob: '19998-11-23',
    department: 'CSE',
    cgpa: [4.00, 3.93, 3.96, 3.89],
    location: {
        present: 'varsity hall',
        permanent: 'gobindoganj',
        district:'gaibandha',
    },
    loves: function () {
        return (`${this.name} loves Abir so much.`)
    }
}
console.log(object1.loves());

// 2
const variable = `${object1.name} got ${object1.cgpa[3]} on 3-1. She lives in ${object1.location.permanent},${object1.location.district}.And, ${object1.loves()}`;
console.log(variable);

//4
const array1 = [10, 21, 22, 23, 24, 25, 26, 27, 28, 29];
const mapping = array1.map(n => n / 7);
console.log(mapping);
const filtering = array1.filter(n => (n >= 25));
console.log(filtering);
const reducing = mapping.reduce((previous, current) => previous + current, 0);
console.log(reducing);