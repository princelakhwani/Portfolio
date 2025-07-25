import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import NavbarHome from './component/NavbarHome';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work'; // ✅ Import Work page
import CustomCursor from '/src/component/CustomCursor.jsx';
import PageTransition from '/src/component/PageTransition.jsx';
import Loader from '/src/component/Loader.jsx';

import { useState } from 'react';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} /> {/* ✅ Work route added */}
      </Routes>
    </PageTransition>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Router>
      {!loaded ? (
        <Loader onLoaded={() => setLoaded(true)} />
      ) : (
        <>
          <CustomCursor />
          <NavbarHome />
          <AnimatedRoutes />
        </>
      )}
    </Router>
  );
}

export default App;