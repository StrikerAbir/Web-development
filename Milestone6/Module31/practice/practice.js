// 1
const odd = [1, 3, 5, 7, 9]
const even = odd.map(n => n + 1);
console.log(even)
// 2
const array1 = [33, 50, 79, 78, 90, 101, 30]
const divisable = array1.filter(n => n % 10 === 0)
console.log(divisable)
// 3
const divisable2 = array1.find(n => n % 10 === 0)
console.log(divisable2)
// 4
const array2 = [1, 9, 17, 22]
const sum = array2.reduce((previous, current) => previous + current, 0)
console.log(sum)
// 5
const peoples = [
    { name: 'meena', age: 21,},
    { name: 'roma', age: 15,},
    { name: 'suchorita', age: 22, },
]
let p = 0;
for (const people of peoples) {
    
    p += people.age;
}
console.log(p)

const ageTotal = peoples.reduce((previous, current) => previous+ current.age, 0)
console.log(ageTotal)

// 6
const student = { 
    name: 'fredie',
    age: 26,
}
const a = student.name;
const { age } = student; //const age = student.age;    same
console.log(a, age);

// 7
let data = {
    location: [
        {
            latitude: '34.5,37.8',
            longitude: '98.77, 58.7',
            city: 'maleborne',
            country:'australia',
        }
    ]
}

const city  = data.location[0].city
console.log(city);

// 8
const user={
    "id": 1,
        "name": "Leanne Graham",
            "username": "Bret",
                "email": "Sincere@april.biz",
                    "address": {
        "street": "Kulas Light",
            "suite": "Apt. 556",
                "city": "Gwenborough",
                    "zipcode": "92998-3874",
                        "geo": {
            "lat": "-37.3159",
                "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
            "company": {
        "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
    }
}

console.log(user.email)
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);