import'./App.css';
import FoodDisplay from './components/FoodDisplay';
//import Form from './components/Form';
import { useState } from 'react';
import SearchBar from './components/SearchBar'
import { Link } from 'react-router-dom';

//
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Home() {
  return(
    <div>
      <h1>Welcome Home Page! </h1>
      <Link to="/Food-search">
        <button> Food Search</button>
      </Link>
    </div>
  );
}

function FoodSearch(){
  const [food, setFood] = useState(null);
  const apiKey ='88faa7075d6846de9fc046f723032532';

  const getFood = async (ingredients) =>{
console.log(ingredients);
try{
  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${encodeURIComponent(ingredients)}`;

  const response = await fetch(url);
  if(response.ok){
    throw new Error('Network reponse was not ok');
  }

  const data = await response.json();
  console.log(data);
  setFood(data);
}catch (error){
  console.error(error);
}
  };
  return(
    <div>
    <h1> Search for Recepies</h1>
    <FoodDisplay food={food}/>
    </div>
  )
}

function App(){
  return(
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/Food-search" element={<FoodSearch />}/>
        </Routes> 
      </div> 
    </Router> 
  )
}
//


/*
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
*/


export default App; 