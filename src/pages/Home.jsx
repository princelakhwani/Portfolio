import React from 'react';
import '/src/Styles/Home/Home.css';
import Footer from '/src/component/Home/Footer.jsx';
import Hero from '../Hero';
import Grid from '../GridGallery';

function Home() {
  return (
    <>
      <Hero />
      <Grid />
      <Footer />
    </>
  );
}

export default Home;