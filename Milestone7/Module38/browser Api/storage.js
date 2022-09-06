document.getElementById('add').addEventListener('click', function () {
    const input = document.getElementById('name-field').value;
    localStorage.setItem('name',input);
})
document.getElementById('add-age').addEventListener('click', function () {
    const input = document.getElementById('age-field').value;
    localStorage.setItem('age',input);
})
document.getElementById('remove').addEventListener('click', function () {
    localStorage.removeItem('name');
})
document.getElementById('remove-age').addEventListener('click', function () {
    localStorage.removeItem('age');
})
document.getElementById('clear').addEventListener('click', function () {
    localStorage.clear();
})
