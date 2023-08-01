import './App.css';
import FoodDisplay from './components/FoodDisplay';
import Form from './components/Form';
import { useState, useEffect } from 'react';

function App() {
  const [food, setFood] = useState(null);

  const getFood = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/api/v0/product/${searchTerm}.json`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setFood(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const randomFood = "random"; // Change this to a random food item or provide a search term of your choice
    getFood(randomFood);
  }, []);

  return (
    <div className="App">
      <Form foodsearch={getFood} />
      <FoodDisplay food={food} />
    </div>
  );
}

export default App;