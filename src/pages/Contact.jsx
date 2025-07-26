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
            Manipal University Jaipur, Bagru,<br /> Jaipur, Rajasthan
          </p>
          <a
            href="https://www.google.com/maps/place/Manipal+University+Jaipur/@26.8438552,75.5626594,17z"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <form
            className="contact-form"
            action="https://formsubmit.co/princelakhwani1608@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I will get back to you soon." />

            <div className="form-row">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-row">
              <input type="text" name="phone" placeholder="Phone" />
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <textarea name="message" placeholder="Tell us about your interest" required></textarea>
            <button type="submit" className="submit-btn">Send to us</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
