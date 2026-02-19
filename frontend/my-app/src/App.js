import './App.css';
// import FooterSection from './components/layout/FooterSection';
// import HeroSection from './components/layout/HeroSection';
// import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';


function App() {
  return (
  
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />}/>
        <Route path="/Login" element={<LoginPage />}/>
        <Route path="/product" element={<ProductPage />}/>
      </Routes>
      </BrowserRouter>
      
  );
}

export default App;
