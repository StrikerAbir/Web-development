// for searching 
var carOptions = {
    vehicle: 'Car',
    imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 3,
    capacity: 4,
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
};
var bikeOptions = {
    vehicle: 'Bike',
    imageUrl: 'https://images.unsplash.com/photo-1517151740706-f3ffac8d0c19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW90b2Jpa2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 2,
    capacity: 2,
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
};

var busOptions = {
    vehicle: 'Bus',
    imageUrl: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 3,
    capacity: 30,
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
};

// const serviceArray = [busOptions, carOptions, bikeOptions]

document.getElementById('search-btn').addEventListener('click', () => {
    const inputValue = document.getElementById('search-field').value;
    console.log(inputValue);
    for (let i = 0; i < serviceArray.length; i++){
        if (inputValue.toLowerCase() === serviceArray[i].vehicle.toLowerCase()) {
            document.getElementById('main-section').innerHTML='';
            displayService(serviceArray[i]);
        }
    }
})