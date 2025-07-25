import React, { useEffect, useState } from 'react';
import '/src/Styles/Loader.css'; // Create this file for styles

const Loader = ({ onLoaded }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onLoaded();
    }, 2000); // Duration of the loading screen

    return () => clearTimeout(timeout);
  }, [onLoaded]);

  return (
    <div className="loader-container">
      <h1 className="loader-text">Loading Portfolio...</h1>
    </div>
  );
};

export default Loader;
