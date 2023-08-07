import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [foodImages, setFoodImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  


  //for the random Imagens. 
  useEffect(() => {
    const unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
    const url = `https://api.unsplash.com/photos/random?count=10&query=food&client_id=${unsplashApiKey}`;
  
    
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        setFoodImages(response.data);
        setFilteredImages(response.data); 
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
        const unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
        const searchUrl = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(searchQuery)}&client_id=${unsplashApiKey}`;
  
        const response = await axios.get(searchUrl);
        //update image on search
        setFilteredImages(response.data.results); 
      } catch (error) {
        console.error(error);
      }
    }
  };

//handle button shortcut
  const handlePopularSearch = async (query) => {
    setSearchQuery(query);
  
    if (query === 'pizza' || query === 'pasta' || query === 'tacos' || query === 'dessert') {
      try {
        const unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
        const searchUrl = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(query)}&client_id=${unsplashApiKey}`;
  
        const response = await axios.get(searchUrl);
        setFilteredImages(response.data.results);
       
      
      } catch (error) {
        console.error(error);
      }
    } else {
      //to show all images when popular search not recognized
      setFilteredImages(foodImages);
    }
  };


  return (

    //fist button
    <div>
       <Link to="/Food-search">
        <button>Food Ideas</button>
      </Link>

      <h1>Welcome foodies!</h1>
 
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
