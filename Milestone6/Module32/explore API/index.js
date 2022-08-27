function dataLoad3() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data =>displayUsers2(data));
}
function displayUsers2(data) {
    console.log(data)
    const ul = document.getElementById('users-list');
    
    for (const user of data) {
        //console.log(user)
        // console.log(user.name)
        // console.log(user.email)
        const li = document.createElement('li');
        li.innerText = `user name: ${user.name}`
        ul.appendChild(li)
    }
}