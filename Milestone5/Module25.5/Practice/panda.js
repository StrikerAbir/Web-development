// 1
console.log('connected');

// 2
const h2 = document.getElementsByTagName('h2');
for (const h of h2) {
    console.log(h);
    h.style.color = 'lightblue';
}

// 3
const bags = document.getElementById('bags');
console.log(bags);
bags.style.backgroundColor = 'tomato';

// 4
const card = document.getElementsByClassName('card');
for (const singleCard of card) {
    console.log(singleCard);
    singleCard.classList.remove('rounded-3');
    singleCard.style.borderRadius = '30px';
}

// 5
function clickHandler() {
    console.log('clicked by handler');
}

// 6
const button = document.getElementsByClassName('panda-btn');
for (btn of button) {   
    btn.addEventListener('click', function (event) {
        if (event.target.innerText.toLowerCase() === 'buy now') {
            event.target.parentNode.removeChild(event.target);
        }
    })
}

// 7
document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const submitbtn = document.getElementById('submit');
    if (event.target.value.toLowerCase() === 'email') {
        submitbtn.removeAttribute('disabled');
    } else {
        submitbtn.setAttribute('disabled',true);
    }
})

// 8
document.getElementById('event-change').addEventListener('mouseenter', function (event) {
    event.target.setAttribute('src', 'images/categories/bag.png');
    event.target.parentNode.childNodes[1].innerText = 'Bags';
})
document.getElementById('event-change').addEventListener('mouseout', function (event) {
    event.target.setAttribute('src', 'images/categories/watch.png');
    event.target.parentNode.childNodes[1].innerText = 'Watch';
})

// 9
document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    event.target.style.backgroundColor = 'lightyellow';
})
