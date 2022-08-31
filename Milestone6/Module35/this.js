//! 1
console.log(this);   //ei this output dibe overall window context ta ke. window holo exicution context

const ali = {
    name: 'Ali',
    money: 5000,
    study: 'Math',
    subject: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        //! 2
        console.log(this); // ei this object ta ke output dibe.
        return (this.name + ' ' + 'is participating in an exam.'); 
    },
    //! 3
    examArrow: () => {
        console.log(this);
    },
    //! 4
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow()
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

ali.exam();


const sakib = {
    name: 'sakib',
    money: 8000,
}

sakib.exam = ali.exam; //sakib object er moddhe exam property banano holo. then ote ali.exam property er value rekhe dilam.
sakib.exam();

ali.examArrow();
ali.examNested();

//! 5
function clickHandler() {
    console.log('inside click 1', this); // window context show korbe.
}

//! 6
document.getElementById('click-2').addEventListener('click', function () {
    console.log('inside click 2', this); // button element k dekhai context hisabe.
})