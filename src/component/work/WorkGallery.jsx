import React from "react";
import "/src/Styles/Work/WorkGallery.css";

import img1 from "/src/assets/Aman.jpg";
import img2 from "/src/assets/Aman.jpg";
import img3 from "/src/assets/Aman.jpg";
import img4 from "/src/assets/Aman.jpg";
import img5 from "/src/assets/Aman.jpg";
import img6 from "/src/assets/Aman.jpg";

const works = [
  { id: 1, image: img1, year: "2022–NOW", name: "GREY", category: "INCLUSIVE GLOBAL BANKING" },
  { id: 2, image: img2, year: "2022", name: "KLASHA", category: "BUSINESS FINANCE" },
  { id: 3, image: img3, year: "2021", name: "TICKETI", category: "MOVIE TICKETING" },
  { id: 4, image: img4, year: "2023", name: "PROJECT 4", category: "E-COMMERCE PLATFORM" },
  { id: 5, image: img5, year: "2024", name: "PROJECT 5", category: "WEB3 DASHBOARD" },
  { id: 6, image: img6, year: "2024", name: "PROJECT 6", category: "CRYPTO WALLET" },
];

const WorkGallery = () => {
  const content = [];

  for (let i = 0; i < works.length; ) {
    if (i % 3 === 0) {
      // Full width project (1st, 4th, etc.)
      content.push(
        <div className="section-wrapper" key={`full-${i}`}>
          <div className="work-block full">
            <img src={works[i].image} alt={works[i].name} className="work-image" />
            <div className="work-label">
              <span className="work-year">{works[i].year}</span>
              <span className="work-name">{works[i].name}</span>
              <span className="work-category">/ {works[i].category}</span>
              <span className="work-index">{String(works[i].id).padStart(2, "0")}</span>
            </div>
          </div>
          <div className="section-divider"></div>
        </div>
      );
      i += 1;
    } else {
      // Side-by-side half blocks (2 & 3, 5 & 6)
      content.push(
        <div className="section-wrapper" key={`pair-${i}`}>
          <div className="half-wrapper-with-line">
            <div className="work-block half">
              <img src={works[i].image} alt={works[i].name} className="work-image" />
              <div className="work-label">
                <span className="work-year">{works[i].year}</span>
                <span className="work-name">{works[i].name}</span>
                <span className="work-category">/ {works[i].category}</span>
                <span className="work-index">{String(works[i].id).padStart(2, "0")}</span>
              </div>
            </div>
            <div className="vertical-divider"></div>
            {works[i + 1] && (
              <div className="work-block half" key={works[i + 1].id}>
                <img src={works[i + 1].image} alt={works[i + 1].name} className="work-image" />
                <div className="work-label">
                  <span className="work-year">{works[i + 1].year}</span>
                  <span className="work-name">{works[i + 1].name}</span>
                  <span className="work-category">/ {works[i + 1].category}</span>
                  <span className="work-index">{String(works[i + 1].id).padStart(2, "0")}</span>
                </div>
              </div>
            )}
          </div>
          <div className="section-divider"></div>
        </div>
      );
      i += 2;
    }
  }

  return <div className="work-gallery">{content}</div>;
};

export default WorkGallery;
