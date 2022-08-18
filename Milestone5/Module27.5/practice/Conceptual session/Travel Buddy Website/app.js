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
// fareperkilo -> per kilometer cost of hiring the vehicle

const serviceArray =[busOptions,carOptions,bikeOptions]

function displayService(service) {
    // step 1= access the main section by id
    // step 2= create a div element
    // step 3= create innerHTML of the div dynamically with service
    // step 4= append the div to main section.
    const mainSection = document.getElementById('main-section');
    const stringify=JSON.stringify(service);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mt-3 mx-auto" style="max-width: 800px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${service.imageUrl}" class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">

        <h5 class="card-title">Transport Mode ${service.vehicle}</h5>

        <p class="card-text">${service.description}</p>
        <p class="card-text"><small class="text-muted">Fare per/kilo : ${service.farePerKilo}$ Capacity : ${service.capacity}</small></p>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='handleBooking(${stringify})'>BOOK NOW
        </button>
      </div>
    </div>
  </div>
</div>
    `
    mainSection.appendChild(div)
}


function displayAllArticle(array) {
    for (let i = 0; i < array.length; i++) {
        displayService(array[i]);
    }
}
displayAllArticle(serviceArray);

// handle booking info
// 1. write the function name handlebookin
// 2. it will have an object as parameter

function handleBooking(object) {
    // ei function a parameter a ashse string kintu output dekha jabe object. era automatic bujhe felse j eta akta object omn kore pathano hoise.
    // console.log(object);
    const stringify=JSON.stringify(object);
    const modalBody = document.getElementById('modal-bodyId');
    modalBody.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
        <img src="${object.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">

            <h5 class="card-title">Vehicle Mode : ${object.vehicle}</h5>

            <p class="card-text">${object.description}</p>
            <p class="card-text"><small class="text-muted">Fare per/kilo : ${object.farePerKilo}$ Capacity : ${object.capacity}</small></p>

            <div class="d-flex flex-column" role="search">
                <p>Fare : <small class="text-muted" id="fare"></small></p>
                <p>Tax : <small class="text-muted" id="tax"></small></p>
                <p>Total Cost : <small class="text-muted" id="total_cost"></small></p>

                <input id="DistanceInput"
                class="form-control m-2"
                 type="number"
                 placeholder="Enter Kilo"
                aria-label="Search"/>

                <input id='QuantityInput'}
                class="form-control m-2"
                 type="number"
                 placeholder="Enter Quantity"
                aria-label="Search"/>

                <button class="btn btn-outline-success" type="submit" onclick='calculateCost(${stringify})'>Submit
                </button>
            </div>
        </div>
    </div>
    `
}

function calculateCost(object) {
    const distance=document.getElementById('DistanceInput').value;
    const quantity=document.getElementById('QuantityInput').value;
    
    const fareDiv = document.getElementById('fare');
    fareDiv.innerHTML = quantity * distance * object.farePerKilo;

    const taxDiv = document.getElementById('tax');
    taxDiv.innerHTML = (distance * 0.15) + (quantity * 0.25);

    const total = document.getElementById('total_cost');
    total.innerHTML = parseFloat(fareDiv.innerHTML) +parseFloat(taxDiv.innerHTML);
}


