//24.7

// childNodes
const placescontainer = document.getElementById('places-container');
console.log(placescontainer);
console.log(placescontainer.childNodes);
console.log(placescontainer.firstChild);
console.log(placescontainer.childNodes[1]);
console.log(placescontainer.childNodes[3].childNodes); // child er child
console.log(placescontainer.childNodes[3].childNodes[5].nextSibling);



// createElement

const placesUl = document.querySelector('#places-container ul');
console.log(placesUl);

const li = document.createElement('li');
li.innerText = 'Brand new li added using createElement.'

placesUl.appendChild(li); //appendChild dia placeUl er akta child add kora holo.

const li2 = document.createElement('li');
li2.innerText = 'another dynamic li added.';

placesUl.appendChild(li2);

// parentNode
console.log(placesUl.parentNode);
console.log(placesUl.parentNode.parentNode);
console.log(placesUl.parentNode.parentNode.parentNode);