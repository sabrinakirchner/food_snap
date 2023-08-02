import React, { useState } from "react";

const Form = ({ onSearch }) => {
  const [productName, setProductName] = useState("");

  const handleInputChange = (event) => {
    setProductName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(productName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={productName}
        onChange={handleInputChange}
        placeholder="Enter product name..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;