// App.jsx
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import HomeHero from './Components/HomeHero';
import Project from './Pages/Project';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

// import About from './Components/About';
// import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeHero />} />
        <Route path="/projects" element={<Project />} />
       
        <Route path="/about" element={<About />} />
       
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
