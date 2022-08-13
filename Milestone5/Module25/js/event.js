console.log('this is separate js file');

// system two(call by function)
function makered() {
    document.body.style.backgroundColor = 'red';
}
// system three(use getelementid and function)
const makebluebutton = document.getElementById('green');
console.log('makebluebutton');
makebluebutton.onclick = green; //ekhane onclick green() function letkha hoini. eta likhle akbare kaj hoa age theke green screen set hoa jeto. tai onlick a set kora hoise green function nam ta. 
function green() {
    document.body.style.backgroundColor = 'green';
}

// system three(another) 
const makeblue = document.getElementById('blue');
makeblue.onclick = function blue() {
    document.body.style.backgroundColor = 'blue';
}