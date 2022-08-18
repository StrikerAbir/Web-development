
// equal button
document.getElementById('equal').addEventListener('click', function () {
    filter('user-input');
})
// enter key press
// see function onlyNumberInput

// AC button
document.getElementById('ac').addEventListener('click', function () {
    allClear('user-input', 'equal-result');
})

// clear button
document.getElementById('clear').addEventListener('click', function () {
    clear('user-input');

})

// buttons
const buttons = document.getElementsByClassName('btn')
for (const btn of buttons) {
    btn.addEventListener('click', function (event) {
        const buttonValue = event.target.innerText;
        setInput('user-input',buttonValue);
    })
}