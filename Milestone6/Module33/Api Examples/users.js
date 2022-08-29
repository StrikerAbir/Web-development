const loadUserFetch = () => {
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
        .then(response => response.json())
        .then(json => displayUser(json.results[0]))
        .catch(err => console.log(err));
}

//fetch er kaj tai async dia evabe kora hoi.
const loadUserAsync = async () => {
    const url = 'https://randomuser.me/api/?gender=female';
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayUser(data.results[0])
    } catch (err) {
        console.log(err)
    }
    
}
const displayUser = (data) => {
    console.log(data);
}