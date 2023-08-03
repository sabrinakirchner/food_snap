
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import your Home component
import FoodDisplay from './components/FoodDisplay';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Food-search" element={<FoodDisplay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



