//copyed from JSON placeholder
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())  //.json is not similar but close to JSON.parse. Json.parse korle sorasori dia dei. .json korle amra otar upor r akta promis ba .then() use korte pari. Jmn nicher line.
    .then(json => console.log(json))
*/

//nije
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url).then(response => response.json()).then(json => console.log(json));

//by functions
function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url).then(response => response.json()).then(json => console.log(json));
}