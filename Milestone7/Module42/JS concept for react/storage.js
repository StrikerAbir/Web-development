localStorage.setItem('userId', 170234);
const addToLocal=() => {
    const idInput = document.getElementById('storageId');
    const id = idInput.value;
    const valueInput = document.getElementById('storageValue');
    const value = valueInput.value;
    if (id && value) {
        localStorage.setItem(id, value);
    }
    
    idInput.value = '';
    valueInput.value= '';
    
}