// 1. where to add
const placeslist = document.getElementById('places-list');
// 2. what to be added
const lio = document.createElement('li');
li.innerText = 'jharbon';
// 3. add the child
placeslist.appendChild(lio);

// section add
// 1. where to add
const maincontainer = document.getElementById('main-content');
// 2. what to add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'misti';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'bora';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'tisha';
ul.appendChild(li4);

section.appendChild(ul);

maincontainer.appendChild(section);


// set innerHTML directl

const sectiondress = document.createElement('section');
sectiondress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>shirt</li>
    <li>pant</li>
    <li>genji</li>
<ul>
`
maincontainer.appendChild(sectiondress);