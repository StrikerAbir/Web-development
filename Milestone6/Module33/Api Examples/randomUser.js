
const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=500').then((response => response.json())).then(data => displayData(data));
}

const displayData= (data) => {
    console.log(data); // from this we can see that it is an object. inside a result key that have an array that contains all the data of users. thats why we need to do this.
    const userContainer = document.getElementById('users-container');
    for (const user of data.results) {
        // console.log(user)
        const div = document.createElement('div');
        div.classList.add('user')
        div.innerHTML=`
            <h3>User name: ${user.name.first} ${user.name.last}</h3>
            <p>Email : ${user.email}</p>
            <p>Location : ${user.location.city}, ${user.location.country}</p>   
            `
        userContainer.appendChild(div);
    }
}

loadUsers();