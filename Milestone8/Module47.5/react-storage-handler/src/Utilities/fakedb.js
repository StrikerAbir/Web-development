// use local storage to mangage cart datas

const addToDb = id => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        console.log('alrady exist');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
        console.log();
    } else { 
        localStorage.setItem(id, 1)
    }
}
export{addToDb}