const ali = {
    name: 'Ali',
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        return (this.name + ' ' + 'is participating in an exam.');  //method er moddhe jodi kono property k show korate hoi tahole this.property name dite hoi.
    },
    improveExam: function (subject) {
        console.log(this.exam(), 'and failed. so') //calling method inside the method
        return `${this.name} is taking improveExam on ${subject}`;
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;  //setting property value
        return this.money;
    }
}
const result = ali.exam();
console.log(result);

const sakib = {
    name: 'sakib',
    money: 8000,

}
// call function
const result2 = ali.exam.call(sakib); // ekahne ali class er akta function k sakib er property dia use kora hoise. 
//line tar meaning= ali class er exam function ota k call korbo then call er moddhe sakib class dibo jar property gulo function use korbe.
console.log(result2);
const sakibMoney = ali.treatDey.call(sakib, 400, 40)
console.log(sakibMoney);

//apply function 
// eta call function er motoi same. sudhu argument pass korar somoi array er moddhe pass korte hoi.
const sakibMoney2 = ali.treatDey.apply(sakib, [1000, 100]);
console.log(sakibMoney2);

//bind function
// call, apply er moto r akta bind. eta etu different vabe kaj kore. eta arrow function jmn variable name k function name banai. bind o omn kore. otake joto khushi call kora jai.
const sakibTreat = ali.treatDey.bind(sakib);
const remaining=sakibTreat(1000, 20)
console.log(remaining);