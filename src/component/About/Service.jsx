import React from "react";
import "/src/Styles/About/Service.css";

const Services = () => {
  const skills = [
    "Product and visual design",
    "Interaction design",
    "Webflow development",
    "Motion design",
    "Graphic design",
    "Branding",
    "Video editing",
    "UI engineering",
  ];

  return (
    <section className="services-section" data-scroll-section>
      <div className="services-header">
        <p className="breadcrumb">/ SERVICES</p>
        <h1>My skills and interests</h1>
      </div>

      <div className="services-content">
        <div className="description">
          <p>
            I’m driven by the challenge of adapting my skills, processes, and thinking to meet the
            evolving needs of the world. I excel in collaborative, ambitious teams that create
            inclusive environments where everyone feels they belong. My skills and interests cut
            across the following:
          </p>
        </div>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li
              key={index}
              className={skill === "UI engineering" ? "skill disabled" : "skill"}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;