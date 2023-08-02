import React from 'react';

export default function FoodDisplay({ food }){
    console.log(food);

    if(!food){
        return <div>Loading ... </div>;
    }

    const { product } = food;

    if (!product || !product.product_name) {
    return <div>No data available</div>;
  }

  const productName = food.name;
  const imageUrl = food.image_url;
  const nutritionFacts = food.nutrition_facts;

    return (
       <div>
      <h2>{productName}</h2>
      <img src={imageUrl} alt={productName} />
      <h3>Nutrition Facts:</h3>
      <pre>{JSON.stringify(nutritionFacts, null, 2)}</pre>
    </div>
      );


}