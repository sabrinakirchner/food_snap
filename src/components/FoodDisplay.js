import React from 'react';

export default function FoodDisplay({ food }) {
  console.log(food);
  
  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{food.product?.product_name}</h2>
      <p>Ingredients:</p>
      <img src={food.product?.image_ingredients_url} alt="Ingredients" />
      <p>Nutrition:</p>
      <img src={food.product?.image_nutrition_url} alt="Nutrition" />
      <p>Front View:</p>
      <img src={food.product?.image_front_url} alt="Front View" />
      {/* Additional data you want to display */}
    </div>
  );
}