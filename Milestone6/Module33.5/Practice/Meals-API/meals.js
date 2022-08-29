function setHTML(meal, mealContainer) {
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
}
const loadAll = () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  fetch(url).then((response) => response.json()).then(data => displayData(data.meals, 'All'))
}
loadAll()
const loadData = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  fetch(url).then((response) => response.json()).then(data => displayData(data.meals, search))

}
const displayData = (data, str = 0) => {

  const mealContainer = document.getElementById('meal-container');
  mealContainer.innerHTML = ``; //eta na dile search er por sudhu ota soho ager gulo thakbe.
  if (str == 0) {
    data.forEach(meal => {
      setHTML(meal, mealContainer)
    })
  } else {
    const foodTitle = document.getElementById('food-title');
    foodTitle.innerText = `Food type ${str.toUpperCase()}`

    data.forEach(meal => {
      setHTML(meal, mealContainer);
    })
  }

}

const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const value = searchField.value;

  loadData(value);
  const foodTitle = document.getElementById('food-title');
  foodTitle.innerText = `Food type ${value.toUpperCase()}`
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