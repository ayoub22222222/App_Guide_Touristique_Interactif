import './App.css';
// import FooterSection from './components/layout/FooterSection';
// import HeroSection from './components/layout/HeroSection';
// import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashbordPage from './pages/DashboardPage';

import FeedBackPage from './pages/FeedBackpage';


function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />}/>
        <Route path="/Login" element={<LoginPage />}/>
        <Route path="/Dashboard" element={<DashbordPage />}/> 
        
        
        <Route path="/product" element={<ProductPage />}/>
        <Route path="/product/:countryId/:cityId" element={<ProductPage />} />
        <Route path="/feedback" element={<FeedBackPage />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
