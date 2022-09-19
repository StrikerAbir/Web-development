const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    console.log(countries);
    const countriesHTML = countries.map((country) => getCountriesHTML(country))
    // console.log(allCountriesHTML[0]);
    const container = document.getElementById('countries')
    container.innerHTML =countriesHTML.join(' ');
}

// option 1 destructuring
// const getCountriesHTML = (country) => {
//     return `
//         <div class="country">
//             <h2>${country.name}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }
// loadCountries();

// option 2 destructuring
// const getCountriesHTML = country => {
//     const { name, flags } = country;
//     return `
//         <div class="country">
//             <h2>${name}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }

// option 3 destructuring
const getCountriesHTML = ({ name, flags, area }) => {
    return `
        <div class="country">
            <h2>${name}</h2>
            <p>Area: ${area}</p>
            <img src="${flags.png}">
        </div>
    `
}
loadCountries();