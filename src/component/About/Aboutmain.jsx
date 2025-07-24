// src/component/Aboutmain.jsx
import React from "react";
import "/src/Styles/About/Aboutmain.css";
import profileImage from "/src/assets/prince.png";

const Aboutmain = () => {
  return (
    <section className="about-main">
      <div className="about-left">
        <div className="image-wrapper">
          <img src={profileImage} alt="Profile" className="about-img" />
          <div className="tape"></div>
          <div className="sticker">HEYYYYYYYY!</div>
        </div>
      </div>

      <div className="about-right">
        <div className="about-content-wrapper">
          <p className="section-label">/ ABOUT ME</p>

          <p className="intro-text">
            I’m a product designer with 5 years of industry experience, but my
            design journey began much earlier. As a child, I built imaginative
            creations with Legos, sparking my lifelong curiosity for design and
            problem-solving. At 13, I wrote my first line of code, a milestone
            that paved the way for a foundation in frontend development. This
            coding background not only shaped my transition into design but also
            ensures seamless handoffs with developers and mastery of no-code tools
            like Webflow.
          </p>

          <div className="tldr-section">
            <p className="tldr-label">TL;DR</p>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>5 years industry experience.</strong></em></p>
            </div>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>First line of code at 13.</strong></em></p>
            </div>
          </div>

          <p className="story-text">
            My love for interactive websites and motion design eventually led me
            into UI/UX design. I started out designing interfaces and coding them
            before fully embracing a design-first approach. Over the years, I’ve
            explored various design disciplines, starting with logo creation and
            branding projects to creating marketing collaterals while volunteering
            in student organizations like AIESEC.
          </p>

          <div className="tldr-section">
            <p className="tldr-label">TL;DR</p>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>End-to-end design ownership at a startup.</strong></em></p>
            </div>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>User-first design philosophy.</strong></em></p>
            </div>
          </div>

          <p className="story-text">
            I later joined a startup where I was the only designer, giving me the
            opportunity to own the entire design process—from user research and
            wireframing to prototyping and developer handoff. This experience made
            me adaptable and confident in making quick design decisions while
            keeping users at the core of every solution.
          </p>

          <div className="tldr-section">
            <p className="tldr-label">TL;DR</p>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>Design mentor & community contributor.</strong></em></p>
            </div>
            <div className="tldr-line">
              <span className="tldr-bar" />
              <p><em><strong>Exploring motion design & storytelling.</strong></em></p>
            </div>
          </div>

          <p className="story-text">
            Beyond work, I enjoy mentoring aspiring designers, sharing resources,
            and giving portfolio feedback. It's rewarding to see others grow and
            find their voice in design. I believe design is not just about
            aesthetics but solving real-world problems through empathy and logic.
          </p>

          <p className="story-text">
            Recently, I’ve been diving into motion design, learning tools like
            After Effects and Lottie to bring designs to life. I’m always eager to
            learn and experiment, especially with new technologies that can
            enhance storytelling and user interaction in digital spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutmain;