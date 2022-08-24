// array er moddhe object
const users = [
    { id:1, name: 'John', job:'doctor'}
];
console.log(users[0].name);

// object er moddhe array
const info = {
    count: 5000,
    data: [
        { id: 1, name: 'abul', job: 'Engg' },
        { id: 2, name: 'sabul', job: 'leader' },
    ]
}
console.log(info.data[0].name)

const user = {
    id: 501,
    name: 'Thomas Abul kalam',
    address: {
        street: {
            first: '36/3 kochukhet lane',
            second: 'third floor',
            third: 'right side',
        }
    }
}
console.log(user.address.street.third)

// Error msg when find some thing in object:
// Undefined = jokhn last key tar nam vul ba na thake.
// Cannot read properties of undefined = jokhon last key er ager key gulor moddhe vul name ba missing thake.

//console.log(user.address.stree.third) //street key vul likhsi

//optional chaining '?'
//eta use hoi chain ta stop korte. jmn ager line er stree er pore ? dile okhane jokhn value peto na tokh okhanei theme o/p undefined pabe, next key te jabe na.
console.log(user.address.stree?.third)