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

    /*
    const { product } = food;

    if (!product || !product.product_name) {
    return <div>No data available</div>;
  }

  const productName = food.name;
  const imageUrl = food.image_url;
  //const nutritionFacts = food.nutrition_facts;

    return (
       <div>
      <h2>{productName}</h2>
      <img src={imageUrl} alt={productName} />
      <h3> Receip:</h3>
      <pre>{JSON.stringify(food, null, 2)}</pre>
    </div>
      );
}

*/