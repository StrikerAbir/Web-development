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
            <p>Name: ${country.capital ? country.capital[0] : 'No capital'}</p>
            <button onclick="loadDetails('${country.cca2}')">Details</button>
        `
        //tarnary operator use kora hoise karon onek country er capital nai.
        countries.appendChild(div)
    })
}

const loadDetails = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}    details er pattern emn
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url).then((response) =>response.json()).then(data => displayDetails(data[0]) )
} 

const displayDetails = (data)=>{
    const countryDetails = document.getElementById('country-detail');
    countryDetails.innerHTML = `
        <h2>${data.name.common}</h2>
        <img src="${data.flags.png}">
    `
}
loadData();