import React, { useEffect, useRef } from "react";
import "/src/Styles/Work/WorkGallery.css";

import img1 from "/src/assets/Aman.jpg";
import img2 from "/src/assets/Aman.jpg";
import img3 from "/src/assets/Aman.jpg";
import img4 from "/src/assets/Aman.jpg";
import img5 from "/src/assets/Aman.jpg";
import img6 from "/src/assets/Aman.jpg";

const works = [
  {
    id: 1,
    image: img1,
    year: "2022–NOW",
    name: "GREY",
    category: "INCLUSIVE GLOBAL BANKING",
    tags: ["UX/UI", "React", "B2C"],
    link: "#",
  },
  {
    id: 2,
    image: img2,
    year: "2022",
    name: "KLASHA",
    category: "BUSINESS FINANCE",
    tags: ["Mobile", "Payments"],
    link: "#",
  },
  {
    id: 3,
    image: img3,
    year: "2021",
    name: "TICKETI",
    category: "MOVIE TICKETING",
    tags: ["Web App", "Booking", "Node.js"],
    link: "#",
  },
  {
    id: 4,
    image: img4,
    year: "2023",
    name: "PROJECT 4",
    category: "E-COMMERCE PLATFORM",
    tags: ["Shopify", "Stripe"],
    link: "#",
  },
  {
    id: 5,
    image: img5,
    year: "2024",
    name: "PROJECT 5",
    category: "WEB3 DASHBOARD",
    tags: ["Blockchain", "Analytics"],
    link: "#",
  },
  {
    id: 6,
    image: img6,
    year: "2024",
    name: "PROJECT 6",
    category: "CRYPTO WALLET",
    tags: ["Web3", "Security"],
    link: "#",
  },
];

const WorkLabel = ({ work }) => (
  <div className="work-label-wrapper">
    <div className="work-label">
      <span className="work-year">{work.year}</span>
      <div className="name-category-tags">
        <div>
          <span className="work-name">{work.name}</span>
          <span className="work-category">/ {work.category}</span>
        </div>
        <div className="work-tags">
          {work.tags.map((tag, idx) => (
            <span className="work-tag" key={idx}>{tag}</span>
          ))}
        </div>
      </div>
      <span className="work-index">{String(work.id).padStart(2, "0")}</span>
    </div>
  </div>
);

const WorkGallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll(".section-wrapper, .ending-message-wrapper");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const content = [];

  for (let i = 0; i < works.length; ) {
    if (i % 3 === 0) {
      const work = works[i];
      content.push(
        <div className="section-wrapper" key={`full-${i}`}>
          <div className="work-block full">
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <div className="work-image-wrapper">
                <img src={work.image} alt={work.name} className="work-image" />
              </div>
            </a>
            <WorkLabel work={work} />
          </div>
          <div className="section-divider"></div>
        </div>
      );
      i += 1;
    } else {
      const work1 = works[i];
      const work2 = works[i + 1];
      content.push(
        <div className="section-wrapper" key={`pair-${i}`}>
          <div className="half-wrapper-with-line">
            <div className="work-block half">
              <a href={work1.link} target="_blank" rel="noopener noreferrer">
                <div className="work-image-wrapper">
                  <img src={work1.image} alt={work1.name} className="work-image" />
                </div>
              </a>
              <WorkLabel work={work1} />
            </div>
            <div className="vertical-divider"></div>
            {work2 && (
              <div className="work-block half" key={work2.id}>
                <a href={work2.link} target="_blank" rel="noopener noreferrer">
                  <div className="work-image-wrapper">
                    <img src={work2.image} alt={work2.name} className="work-image" />
                  </div>
                </a>
                <WorkLabel work={work2} />
              </div>
            )}
          </div>
          <div className="section-divider"></div>
        </div>
      );
      i += 2;
    }
  }

  return (
    <div className="work-gallery" ref={containerRef}>
      {content}
      <div className="ending-message-wrapper">
        <div className="ending-message">Many more to come</div>
      </div>
    </div>
  );
};

export default WorkGallery;
