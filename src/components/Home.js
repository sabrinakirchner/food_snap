import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import MyComponent from './MyComponent';  


function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [foodImages, setFoodImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const apiKey = 'gHqU6G1H5Sb1nIHha14snLUqIgYUxnrt-FGYepisLFY';
    const url = `https://api.unsplash.com/search/photos?page=1&query=food&client_id=${apiKey}`;
    
    axios
      .get(url)
      .then(response => {
        setFoodImages(response.data.results);
        setFilteredImages(response.data.results); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      setFilteredImages([]);
      setFilteredImages(foodImages); 
    }else{
      try {
        const apiKey = 'gHqU6G1H5Sb1nIHha14snLUqIgYUxnrt-FGYepisLFY';
        const searchUrl = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(
          searchQuery
        )}&client_id=${apiKey}`;
  
        const response = await axios.get(searchUrl);
        //update image on search
        setFilteredImages(response.data.results); 
      } catch (error) {
        console.error(error);
      }
    }
  };


  const handlePopularSearch = async (query) => {
    setSearchQuery(query);
  
    if (query === 'pizza' || query === 'pasta' || query === 'tacos' || query === 'dessert') {
      try {
        const apiKey = 'gHqU6G1H5Sb1nIHha14snLUqIgYUxnrt-FGYepisLFY';
        const searchUrl = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(
          query
        )}&client_id=${apiKey}`;
  
        const response = await axios.get(searchUrl);
        setFilteredImages(response.data.results);
      } catch (error) {
        console.error(error);
      }
    } else {
      // Default behavior to show all images when popular search not recognized
      setFilteredImages(foodImages);
    }
  };


  return (
    <div>
       <Link to="/Food-search">
        <button>Food Ideas</button>
      </Link>

      <h1>Welcome !</h1>
 
      <input
      type="text"
      placeholder="Search for images..."
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
/>
      <button onClick={handleSearch}>Search</button>

      <h2></h2>
      <button onClick={() => handlePopularSearch('pizza')}>Pizza</button>
      <button onClick={() => handlePopularSearch('pasta')}>Pasta</button>
      <button onClick={() => handlePopularSearch('tacos')}>Tacos</button>
      <button onClick={() => handlePopularSearch('dessert')}>Dessert</button>

      <h2></h2>

      <div className="food-images">
        {filteredImages.map(image => (
          <img key={image.id} src={image.urls.thumb} alt={image.alt_description} />
        ))}
      </div>
    </div>
  );
}

export default Home;
