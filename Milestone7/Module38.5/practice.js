// 1
// setTimeout(function () { console.log('bane'); }, 3500);
// 2
// const value = prompt('enter a number');
// const total = parseInt(value) + 200;
// console.log(total);

//3
// const decision = confirm('Do you want to go MDN');
// if (!!decision) {
//     const location = location.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt';
//     console.log(location);
// }

//! level 2 task

const getDataStorage = () => {
    const data = localStorage.getItem('count');
    let count = 0;
    if (data) {
        count = parseInt(data);
    }
    return count;
}

const setDataStorage = () => {
    let data = getDataStorage();
    let newData = ++data;
    localStorage.setItem('count', newData);
}

const add = () => {
    setDataStorage();
    display()
}

const display = () => {
    const count = document.getElementById('count');
    const value = getDataStorage();
    count.innerText = `${value}`;
}
display();

//! level 3 task

// set data to localStorage
const addButton = (id) => {
    const value = document.getElementById(id).value;
    localStorage.setItem(id, value);
}
const deleteButton = (id) => {
    localStorage.removeItem(id);
}
const clearButton = () => {
    localStorage.clear();
}

// ! level 4 task
const getInput = id => {
    const inputField = document.getElementById(id);
    const input = inputField.value;
    inputField.value = '';
    return input;
}
const saveButton = () => {
    const name = getInput('name2');
    const email = getInput('email2');
    const msg = getInput('msg2');
    
    setValue(name, email, msg);
}
const getLocalStorageDetails = () => {
    let details = localStorage.getItem('details');
    let newDetails = {};
    if (details) {
        newDetails = JSON.parse(details);
    }
    return newDetails;
}
const setValue = (name, email, msg) => {
    const detail= getLocalStorageDetails();
    detail['name']=name;
    detail['email']=email;
    detail['msg'] = msg;
    const detailString = JSON.stringify(detail);
    localStorage.setItem('details', detailString);
}