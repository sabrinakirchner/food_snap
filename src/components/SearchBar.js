import React, { useState } from 'react'; 

const SearchBar = ({ onSearch }) => {
    const [barcode, setbarcode] = useState('');

    const handleInputChange =(event) =>{
        setbarcode(event.target.value);
    };

    const handleSubmit =(event) =>{
        event.preventDefault(); 
        onSearch(barcode); 
        setbarcode('');
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={barcode}
            onChange={handleInputChange}
            placeholder="Enter product..." />

            <button type='submit'>Search</button>
        </form>
    );
}

export default SearchBar; 