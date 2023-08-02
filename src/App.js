import'./App.css';
import FoodDisplay from './components/FoodDisplay';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar'

function App(){
  const [food, setFood] = useState(null);

  const apiKey = "88faa7075d6846de9fc046f723032532"; 


  //const getFood = async(productName) =>{
  const getFood = async (ingredients) => { 
    console.log(ingredients); 
    try{
      //const response = await fetch(
        const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${encodeURIComponent(ingredients)}`;

      const response = await fetch(url);
      
      if(!response.ok){
        throw new Error('Nework response was not ok'); 
      }

      const data = await response.json(); 
      console.log(data)

      setFood(data);
    }catch (error){
      console.error(error);
    }
  };


  return( 
    <div className ='App'>
      <SearchBar onSearch={getFood}/>
      <FoodDisplay food={food}/>
    </div>
  );
}

export default App; 