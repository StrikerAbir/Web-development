console.log('hello tishu my love');
console.log(document);
console.log(document.body);
console.log(document.getElementsByTagName('h1'));
const h1collection = document.getElementsByTagName('h1');
for (const h1 of h1collection) {
    console.log(h1);
    console.log(h1.innerText);
}

