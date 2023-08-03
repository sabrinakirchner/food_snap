import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function FoodDisplay() {
  const [food, setFood] = useState([]);
  const apiKey = '88faa7075d6846de9fc046f723032532'; // Replace with your Spoonacular API key

  const handleSearch = async (ingredients) => {
    try {
      const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${encodeURIComponent(
        ingredients
      )}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setFood(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Search for Recipes</h1>
  
      <Link to="/">Home</Link>
      <br />
      <SearchBar onSearch={handleSearch} />

      <div className="recipe-list">
        {food.length > 0 ? (
          food.map((recipe, index) => (
            <div key={index} className="recipe">
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} />
              <h3>Instructions:</h3>
              <p>{recipe.instructions}</p>
            </div>
          ))
        ) : (
          <p>Food will show here! </p>
        )}
      </div>

    </div>
  );
}

export default FoodDisplay; 

