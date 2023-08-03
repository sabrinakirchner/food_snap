import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [foodImages, setFoodImages] = useState([]);

  useEffect(() => {
    const apiKey = 'gHqU6G1H5Sb1nIHha14snLUqIgYUxnrt-FGYepisLFY';
    const url = `https://api.unsplash.com/search/photos?page=1&query=food&client_id=${apiKey}`;

    axios
      .get(url)
      .then(response => {
        setFoodImages(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome Home Page!</h1>
      <Link to="/Food-search">
        <button>Food Search</button>
      </Link>
      <div className="food-images">
        {foodImages.map(image => (
          <img key={image.id} src={image.urls.thumb} alt={image.alt_description} />
        ))}
      </div>
    </div>
  );
}

export default Home;
