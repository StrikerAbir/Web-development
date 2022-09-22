import React, { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=f";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
          {foods.map((food) => (
            <Food singleFood={food}></Food>
          ))}
      </div>
    </div>
  );
};

export default Foods;
