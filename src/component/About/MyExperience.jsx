import React from "react";
import "/src/Styles/About/MyExperience.css";

const experiences = [
  {
    title: "Product designer",
    company: "Grey (YC W22)",
    link: "#",
    date: "Dec 2022 – Now",
  },
  {
    title: "Product designer",
    company: "Klasha",
    link: "#",
    date: "Mar 2022 – Jun 2022",
  },
  {
    title: "Freelance Product Designer",
    company: "",
    link: "",
    date: "Jan 2021 – Nov 2022",
  },
  {
    title: "Product designer",
    company: "Vop",
    link: "#",
    date: "Sept 2020 – Dec 2020",
  },
  {
    title: "UI/UX designer",
    company: "Livrite Healthcare Services",
    link: "#",
    date: "March 2020 – Dec 2020",
  },
  {
    title: "UI/UX Design Intern",
    company: "Hotels.ng internships",
    link: "#",
    date: "May 2020 – Aug 2020",
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
            I’m driven by the challenge of adapting my skills, processes, and thinking to meet the evolving needs of the world.
            I excel in collaborative, ambitious teams that create inclusive environments where everyone feels they belong.
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
