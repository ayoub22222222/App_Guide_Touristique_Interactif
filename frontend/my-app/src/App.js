import './App.css';
// import FooterSection from './components/layout/FooterSection';
// import HeroSection from './components/layout/HeroSection';
// import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
  
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />}/>
      </Routes>
      </BrowserRouter>
      
  );
}

export default App;
