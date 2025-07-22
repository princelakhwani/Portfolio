import React from 'react';
import NavbarHome from '/src/component/NavbarHome.jsx';
import '/src/Styles/Home.css';

function Home() {
  return (
    <div className="home">
      <NavbarHome />
      <div className="home-content">
        <h1>Welcome to my Portfolio</h1>
      </div>
    </div>
  );
}

export default Home;
