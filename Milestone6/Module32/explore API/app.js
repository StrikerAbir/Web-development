function dataLoad1() {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(json => console.log(json));
}
function dataLoad2() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => displayUsers(data));
}
// dataLoad2 function er moddhe promise a function call kora. okhan multiline code o kora jai
function displayUsers(data) {
    console.log(data);
}