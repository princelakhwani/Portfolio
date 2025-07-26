import React from "react";
import "/src/Styles/Contact/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-left">
        <h1>Let’s get<br />in touch</h1>
        <p className="subtext">Don’t be afraid to<br /> say hello with us!</p>

        <div className="contact-info">
          <p className="label">Phone</p>
          <p>+91 7410949251</p>

          <p className="label">Email</p>
          <p>princelakhwani1608@gmail.com</p>

          <p className="label">College</p>
          <p>
            Manipal University Jaipur, Bagru,<br/> Jaipur, Rajasthan
          </p>
          <a href="https://www.google.com/maps/place/Manipal+University+Jaipur/@26.8438552,75.5626594,17z/data=!3m1!4b1!4m6!3m5!1s0x396c4850e05bee9b:0x1b8d67402d4eb863!8m2!3d26.8438552!4d75.5652343!16s%2Fm%2F0wdnw8v?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            See on Google Map ↗
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-right">
        <div className="arrow-box">
          <div className="arrow-line">
            <span className="line"></span>
            <span className="head"></span>
          </div>
          <p className="quote">
            Great! We're excited to hear from you and let's start something special together.<br />
            Call us for any inquiry.
          </p>
        </div>

        <div className="form-box">
          <h3>Contact</h3>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea placeholder="Tell us about your interest"></textarea>
            <button type="submit" className="submit-btn">Send to us</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
