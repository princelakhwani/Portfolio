import React from 'react';
import '/src/Styles/About/Abouthero.css';

function Abouthero() {
  return (
    <section className="abouthero-container">
      <div className="quote-section">
        <p>
          The fire to leave a mark in a world full of noise<br />
          shapes the way I think—the reason I chase depth,<br />
          explore the edges of bold ideas, take leaps,<br />
          and craft moments that don’t just pass, but stay<br />
          etched in minds, alive long after they're gone.
        </p>
      </div>

      <div className="abouthero-content">
        <div className="user-icon">
          <div className="head" />
          <div className="body" />
        </div>

        <div className="text-section">
          <p className="breadcrumb">/ खुशामदीद</p>

          <h1 className="intro">
            <span className="gray large-text">Hello, I am Prince.</span><br />
            <span className="bold">
              An AI enthusiast&nbsp; & web<br />
              developer with a flair<br />
              for smart interfaces.
            </span>
          </h1>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>↓</span>
      </div>
    </section>
  );
}

export default Abouthero;
