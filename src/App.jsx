import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarHome from './component/NavbarHome';
import Home from './pages/Home';
import About from './pages/About'; // ✅ Import your About page
import CustomCursor from '/src/component/CustomCursor.jsx';

function App() {
  return (
    <Router>
      <CustomCursor />
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        {/* <Routes path="/works" element={<Works />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
