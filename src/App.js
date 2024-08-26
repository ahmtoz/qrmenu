import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainMenu from './MainMenu';
import FoodPage from './FoodPage.js';
import DrinkPage from './DrinkPage.js';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/foods" element={<FoodPage />} />
          <Route path="/drinks" element={<DrinkPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
