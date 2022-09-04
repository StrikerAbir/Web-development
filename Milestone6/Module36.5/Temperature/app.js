// do not api key on your js file

const apiKey = '7909545c0c610cf50331bedac136f463';

const loadTemp = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url).then((response) => response.json()).then(data =>displayTemp(data))
}

const displayTemp = (data) => {
    const temperature = document.getElementById('temp');
    temperature.innerText=`${data.main.temp}`
}
loadTemp('dhaka');