import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return (
        <div>
            <h1> Welcome Home page! </h1>
            <Link to="/Food-search"> 
            <button>Food Search </button></Link>
        </div>
    )
}

export default Home; 
