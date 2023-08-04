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


  const handleRecipeButtonClick = async (ingredients) => {
    handleSearch(ingredients);
  };


  //buttons 
  return (

    <div>
       <Link to="/" > 
      <button> Home</button>
      </Link>
      
      <h1>Search for Recipes</h1>
    
      
      <SearchBar onSearch={handleSearch} />

      <h2></h2>
      
      <button onClick={() => handleRecipeButtonClick('lettuce')}>Salad</button>
      <button onClick={() => handleRecipeButtonClick('pasta')}>Pasta</button>
      <button onClick={() => handleRecipeButtonClick('tortillas')}>Tacos</button>
      <button onClick={() => handleRecipeButtonClick('dessert')}>Dessert</button>


      <div className="recipe-list">
        {food.length > 0 ? (
          food.map((recipe, index) => (
            <div key={index} className="recipe">
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} />
      
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

