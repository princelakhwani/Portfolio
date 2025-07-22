import './App.css';
import NavbarHome from './component/NavbarHome';
import Home from './pages/Home';
import CustomCursor from '/src/component/CustomCursor.jsx'; // ✅ Adjust path if needed

function App() {
  return (
    <>
      <CustomCursor /> {/* ✅ Global custom cursor */}
      <NavbarHome />
      <Home />
    </>
  );
}

export default App;
