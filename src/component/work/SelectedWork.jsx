import React from 'react';
import '/src/Styles/Work/SelectedWork.css';
import folder from '/src/assets/folder.png';

const SelectedWork = () => {
  return (
    <>
      <div className="header-content">
        <h1 className="main-heading">Selected</h1>
        <h1 className="main-heading">Works</h1>
        <div className="tag">FROM 2020 - NOW</div>
      </div>

      <div className="intro-section">
        <img src={folder} alt="Folder Icon" className="folder-icon" />
        <p className="description">
          Projects cutting across product and visual design and an additional section, playground, that
          contains shots from my exploration into my other design passions.
        </p>
      </div>

      <div className="arrow-wrapper">
        <span className="material-icons scroll-arrow">arrow_downward</span>
      </div>

      <div className="intro-divider" />
    </>
  );
};

export default SelectedWork;
