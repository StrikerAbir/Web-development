const loadData = (value) => {
    fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${value}`)
        .then(response => response.json())
        .then(data => displayData(data.artists))
        .catch(err => console.log(err))
}
const displayData = (datas) => {
    const content = document.getElementById('content');
    console.log(datas);
    content.innerHTML = ``;
    const foundNone = document.getElementById('found-none');
    if (datas!=null) {
        foundNone.classList.add('hidden');
        datas.forEach(data => {
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="${data.strLastFMChart}" data-mdb-ripple="true" data-mdb-ripple-color="light" target="_blank">
                <img
                class="rounded-t-lg"
                src="${data.strArtistClearart}"
                alt=""
              />
              </a>
              <div class="p-6">
                <h5 class="text-black text-xl font-medium mb-2">${data.strArtist}</h5>
                <p class="text-gray-700 text-base mb-4">
                  <small>Genre : ${data.strStyle}</small>
                </p>
                <p class="text-gray-700 text-base mb-4">
                  <small>Label : ${data.strLabel}</small>
                </p>
                <p class="text-gray-700 text-base mb-4">
                  <small>Country : ${data.strCountry}</small>
                </p>
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="loadDetails(${data.idArtist})"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        `
            content.appendChild(div);
        })
    } else {
        foundNone.classList.remove('hidden');
        
    }
    
    toggleSpinner(false)
}

const searchProcess = () => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const value = searchField.value;
    const foundNone = document.getElementById('found-none');
    if (value == '') {
        foundNone.classList.remove('hidden');
        toggleSpinner(false)
    } else {
        foundNone.classList.add('hidden');
        loadData(value);
    }
}

document.getElementById('search-btn').addEventListener('click', () => {
    searchProcess();
});

const toggleSpinner = (isLoading)=>{
    const spinner = document.getElementById('loader');
    if (isLoading) {
        spinner.classList.remove('hidden');
    } else {
        spinner.classList.add('hidden');
    }
}

// enter button work
document.getElementById('search-field').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchProcess(10)
    }
})

const loadDetails = (data) => {
    fetch(`https://theaudiodb.com/api/v1/json/2/artist.php?i=${data}`).then((response) => response.json()).then(json => displayDetails(json.artists)).catch(err => console.log(err));
}
const displayDetails = (datas) => {
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = ``;
    datas.forEach(data => {
        const modalTitle = document.getElementById('exampleModalLabel')
        modalTitle.innerText = `${data.strArtist}`;
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="${data.strLastFMChart}" data-mdb-ripple="true" data-mdb-ripple-color="light" target="_blank">
                <img
                class="rounded-t-lg"
                src="${data.strArtistBanner}"
                alt=""
              />
              </a>
              <div class="p-6">
                
                <p class="text-gray-700 text-base mb-4">
                  ${data.strBiographyEN}
                </p>
              </div>
              </div>
            </div>
    `
        modalBody.appendChild(div);
    });
    
}