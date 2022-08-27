
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuotes(data))
}
const displayQuotes = data => {
    const quotes = document.getElementById('qoutes');
    quotes.innerText = data.quote;
}
loadQuotes();