const loadData = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then((response) =>response.json()).then(data => displayData(data.meals))
}
const displayData = (data) => {
    const mealContainer = document.getElementById('meal-container');
    data.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
        `
        mealContainer.appendChild(div);
    })
}
loadData();