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

const getCountriesHTML = country => {
    return `
        <div class="country">
            <h2>${country.name}</h2>
            <img src="${country.flags.png}">
        </div>
    `
}
loadCountries();