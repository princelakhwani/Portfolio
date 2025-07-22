import React from 'react';
import '/src/Styles/Home/Home.css';
import Footer from '/src/component/Home/Footer.jsx';
import CustomCursor from '/src/component/CustomCursor.jsx'; // ✅ Make sure the path is correct

function Home() {
  return (
    <div className="home">
      <CustomCursor /> {/* ✅ Add the custom cursor */}
      <div className="home-content">
        <h1>HY</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
