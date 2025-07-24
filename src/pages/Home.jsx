import React from 'react';
import '/src/Styles/Home/Home.css';
import Footer from '/src/component/Home/Footer.jsx';
import Hero from '../Hero';
import Grid from '../GridGallery';

function Home() {
  return (
    <div className="home-page"> {/* <-- wrapper with full height */}
      <div className="home-content">
        <Hero />
        <Grid />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
