// 24.2
/*console.log('hello tishu my love');
console.log(document);
console.log(document.body);
console.log(document.getElementsByTagName('h1'));
const h1collection = document.getElementsByTagName('h1');
for (const h1 of h1collection) {
    console.log(h1);
    console.log(h1.innerText);
}
const student = {
    name: 'abul',
    id: 11,
    study: function (time) {
        console.log(time, 'study running')
    }
}

student.study(5);
console.log(document.getElementsByTagName('li'));
console.log('inside the Html');
const licollection = document.getElementsByTagName('li');
console.log(licollection);
for (const li of licollection) {
    console.log(li);
}
for (const li of licollection) {
    console.log(li.innerText);
}*/


// 24.3
/*
    // getElementById
    console.log(document.getElementById('fruitstitle'));
    console.log(document.getElementById('placestitle'));
    console.log(document.getElementById('placestitle').innerText); //inner text select
    console.log(document.getElementById('placestitle').innerText='my tour list'); //inner text changed.
    console.log(document.getElementById('fruit')); //id didnt used in html. it will give null.

    // getElementsByClassName
    console.log(document.getElementsByClassName('impo-places'));
    const places= document.getElementsByClassName('impo-places');
    for(const place of places){
        console.log(place);
        console.log(place.innerText);
    }
    console.log(document.getElementsByClassName('places')); //class didnt used in html. it will give empty array type object.
    */


    // 24.4
    /*
console.log(document.querySelectorAll('#fruitstitle'))
console.log(document.querySelectorAll('.fruits-container'))
console.log(document.querySelectorAll('.fruits-container li'))

const someli = document.querySelectorAll('.fruits-container li');
for (const li of someli) {
    console.log(li);
    console.log(li.innerText);
}
// querySelector
console.log(document.querySelector('.fruits-container li')) //only show first list
*/


// 24.5
/*
    console.log(document.getElementById('fruitstitle'));
    console.log(document.getElementById('fruitstitle').style);
    document.getElementById('fruitstitle').style.backgroundColor='red'; //red kore dilo bg

    //getAttribute
    const title=document.getElementById('fruitstitle');
    console.log(title.getAttribute('id'));
    console.log(title.getAttribute('class'));
    // classlist
    console.log(title.classList);
    title.classList.add('blue');
    console.log(title.classList);
    title.classList.remove('blue');
    console.log(title.classList);
    // setAttribute
    title.setAttribute('title', 'tooltip added by js'); //fruits title a cursor rakhno dekhabe. 

    // innerHTML
    console.log(document.getElementsByClassName('fruits-container'));
    console.log(document.getElementsByClassName('fruits-container')[0]); //[0] mane 1st index bojaise. 1st class ta rki.
    console.log(document.getElementsByClassName('fruits-container')[0].innerHTML);
    // set new innerHTML
    console.log(document.getElementsByClassName('fruits-container')[0].innerHTML='<h1>DOM Changed this</h1>');

    // innerText
    console.log(document.getElementsByClassName('fruits-container')[0].innerText);
    */
