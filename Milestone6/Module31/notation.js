const student = {
    name: 'bane',
    age: 15,
    class: 10,
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65,
    },
}

//dot notation 
const marks = student.marks;
const math = student.marks.math;

//bracket notation 
const chemistry = student['marks']['chemistry'];

//!kono variable er moddhe jodi object property rakha hoi ota access korte gele eta lokkhno korte hobe,
const subject='math'
//const marks2=subject.marks.subject //*eta error dekahbe karon subject kono key na ba property na, eta akta variable. tai se eta khuje pabe na.. ejonnno nicher ta kore hoi variable dia.
const subjectMark = student.marks[subject] //eveabe korete hobe.
console.log(subjectMark)