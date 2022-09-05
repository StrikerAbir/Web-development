console.log(1111111);
console.log(2222222);
// setTimeout(() => {
//     console.log(333333);
// })
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log('response resived ');
        return response.json()
    })
    .then(json => console.log(json))
console.log(4444444);
console.log(5555555);