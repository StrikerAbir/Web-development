const loadData = () => {
    fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then(data => displayData(data));
}
const displayData = (data) => {
    const countries = document.getElementById('countries-container')
    // for (const country of data) {
    //     console.log(country);
    // }
    // same kaj using foreach
    data.forEach((country) => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Name: ${country.capital ? country.capital[0] :'No capital'}</p>
        `
        //tarnary operator use kora hoise karon onek country er capital nai.
        countries.appendChild(div)
    })
}
loadData();