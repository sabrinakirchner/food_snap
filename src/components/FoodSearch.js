

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FoodDisplay from './FoodDisplay';
import { Link } from 'react-router-dom';


const FoodSearch = () => {
    const [food, setFood ]= useState(null);

    const getFood = async (ingredients) =>{
        try{
            const apiKey = '88faa7075d6846de9fc046f723032532';
            const url =`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${encodeURIComponent(ingredients)}`;
            const response =await fetch(url);
            if(!response.ok){
                throw new Error('Network reponse was not ok')

            }
            const data = await response.json();
            console.log(data); 
            setFood(data);
            }catch (error) {
                console.error(error);
            }

    };

    return (
        <div>
            <h1>Search for Recipes</h1>
            <Link to="/"> Home  </Link>
            <SearchBar onSearch={getFood} />
            <FoodDisplay food={food} /> 
        </div>
    );
}

export default FoodSearch; 
