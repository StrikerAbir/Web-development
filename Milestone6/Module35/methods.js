const student = {
    name: 'Ali',
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        return (this.name +' '+'is participating in an exam.');  //method er moddhe jodi kono property k show korate hoi tahole this.property name dite hoi.
    },
    improveExam: function (subject) {
        console.log(this.exam(), 'and failed. so') //calling method inside the method
        return `${this.name} is taking improveExam on ${subject}`;
    },
    treatDey: function (amount,tips) {
        this.money = this.money - amount-tips;  //setting property value
        return this.money;
    }
}
const op = student.exam();
console.log(op);

const reExam = student.improveExam('algebra');
console.log(reExam);

const remainMoney = student.treatDey(500,20);
console.log(remainMoney);