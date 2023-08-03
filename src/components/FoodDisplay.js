import React from 'react';

export default function FoodDisplay({ food }){
    console.log(food);

    if(!food){
        return <div>Loading ... </div>;
    }

    return (
        <div>
          {food.map((recipe, index) => (
            <div key={index}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} />
              <h3>Instructions:</h3>
              <p>{recipe.instructions}</p>
            </div>
          ))}
        </div>
      );
    }

    