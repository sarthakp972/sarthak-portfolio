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
import ScrollToTop from './Components/ScrollToTop';
import Unauthrized from './Components/Unauthrized';

// import About from './Components/About';
// import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeHero />} />
        <Route path="/projects" element={<Project />} />
       
        <Route path="/about" element={<About />} />
       
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Unauthrized />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
