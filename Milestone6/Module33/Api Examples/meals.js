const loadData = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url).then((response) => response.json()).then(data => displayData(data.meals))
}
const displayData = (data) => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``; //eta na dile search er por sudhu ota soho ager gulo thakbe.
    data.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="card" onclick="loadDetails(${meal.idMeal})">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                  
                ${meal.strInstructions.slice(0, 200)}
                </p>
              </div>
            </div>
        `
        mealContainer.appendChild(div);
    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const value = searchField.value;
    loadData(value);
    searchField.value = '';
}

const loadDetails = (mealID) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    fetch(url).then(response => response.json()).then(json => displayDetails(json.meals[0]))
}

const displayDetails = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">
                ${meal.strInstructions.slice(0, 200)}
              </p>
            </div>
    `
    detailContainer.appendChild(div);
}