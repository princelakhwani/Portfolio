import React from "react";
import "/src/Styles/About/MyExperience.css";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "AmanStar",
    link: "https://www.linkedin.com/company/aman-star-information-technology/",
    date: "May 2025 – July 2025",
  },

  {
    title: "Technical Head",
    company: "InSell Muj",
    link: "https://www.instagram.com/insell.muj/",
    date: "Oct 2024 – Now",
  },

  {
    title: "Web Developer",
    company: "Dectify",
    link: "https://www.dectify.in/",
    date: "Sept 2024 – Dec 2024",
  },
  {
    title: "Intern",
    company: "!stop.ai",
    link: "https://1stop.ai/",
    date: "Mar 2024 – May 2024",
  },
  
  {
    title: "Campus Ambassador",
    company: "Pregrad",
    link: "https://www.pregrad.in/",
    date: "Nov 2023 – Dec 2023",
  },
  
];

const MyExperience = () => {
  return (
    <section className="experience-section" data-scroll-section>
      {/* Full-width header */}
      <div className="experience-header">
        <p className="breadcrumb">/ WORK EXPERIENCE</p>
        <h1>My work experience</h1>
        <div className="section-divider"></div>
      </div>

      {/* Two-column layout */}
      <div className="experience-grid">
        {/* Left column: intro */}
        <div className="experience-left">
          <p className="experience-intro">
          I’m passionate about solving real-world problems through technology.
          My experience spans full-stack development, AI/ML, and data-driven solutions.
          I thrive in collaborative teams that value innovation and inclusion.
          Every project is a chance to grow, adapt, and make an impact.
          </p>
        </div>

        {/* Right column: experience list */}
        <div className="experience-right">
          {experiences.map((exp, idx) => (
            <div className="experience-line" key={idx}>
              <div className="bullet"></div>
              <div className="experience-info">
                <strong>{exp.title}</strong>
                {exp.company && (
                  <>
                    {" "}–{" "}
                    <a href={exp.link} target="_blank" rel="noreferrer">
                      {exp.company}
                    </a>
                  </>
                )}
                <div className="date">{exp.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
