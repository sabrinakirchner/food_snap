import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function FoodDisplay() {
  const [food, setFood] = useState([]);
  const spoonacularApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const handleRecipeButtonClick = async (ingredients) => {
    setFood([]); // Clear previous search results
  
    try {
      const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${spoonacularApiKey}&ingredients=${encodeURIComponent(
        ingredients
      )}`;
  
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setFood(data);
    } catch (error) {
      console.error(error);
    }
  };


  //buttons 
  return (

    <div>
       <Link to="/" > 
      <button> Home</button>
      </Link>
      
      <h1>Search for Recipes</h1>
    
      
      <SearchBar onSearch={handleRecipeButtonClick} />

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

