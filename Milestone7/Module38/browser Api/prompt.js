//alert
const showAlert = () => {
    const number = Math.random() * 10;
    if (number<5) {   
        alert('hi tishu');
    }
}

//confirm 
const askSome = () => {
    const decision = confirm('Are you sure you want to come?');
    console.log(decision);
    if (decision == true) {
        alert('thank you');
    } else {
        console.log('please try to come soon');
    }
}

//prompt
const getUserInfo = () => {
    const name = prompt('tell us your name', 'MR./Mrs'); // comma er pore jeta ase ota default vabe input field a thake.
    console.log(name);
    if (!!name) {       // name empty na ase eta check kora. name thakele true. !! dia true bojhai.
        console.log('welcome ',name);
    }
}