// 24.6
const sections = document.querySelectorAll('section');
console.log(sections);
for (const section of sections) {
    console.log(section)
    section.style.border = '2px solid blue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '5px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}

const placecontainer = document.getElementById('places-container');
placecontainer.style.backgroundColor = "yellow";

const domcontainer = document.getElementById('dom-container');
/*
domcontainer.classList.add('yellow-bg'); //ekhane o/p gray e dekhasse cz yellow-bg k oberride kore disse. class dia korar theke inline kora beshi power tai emn hoise. inspect a gia dekhlei bojha jai. just dekhar jonne css file a !important use kora holo.
*/


domcontainer.classList.add('text-center');
domcontainer.classList.remove('large-text') 