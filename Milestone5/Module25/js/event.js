console.log('this is separate js file');

// system two(call by function) mostly used
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

//25.3
// system four(use id and addEventListener())
const makepink = document.getElementById('pink');
makepink.addEventListener('click', pink)
function pink() {
    document.body.style.backgroundColor = 'pink';
}
// four another
const makeorange = document.getElementById('orange');
makeorange.addEventListener('click', function orange() {
    document.body.style.backgroundColor = 'orange';
})
// four final(mostly used)
document.getElementById('purple').addEventListener('click', function purple() {
    document.body.style.backgroundColor = 'purple';
})
