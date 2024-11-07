import React from 'react';
import './WhyUs.css';
import mainthumb1 from "../../assets/images/about.jpg";

const WhyUs = () => {
  return (
    <section className="section why-us" data-section="section2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={mainthumb1} alt="main thumb" className="main-image" />
          </div>
          <div className="col-md-6">
            <div className="section-heading">
            <h2 className="heading-with-lines">About Us</h2>

              <p>
                Tempor jgfgjfh erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
              <ul className="features-list">
                <li>➔ Skilled Instructors</li>
                <li>➔ International Certificate</li>
                <li>➔ Online Classes</li>
                <li>➔ Interactive Content</li>
                <li>➔ Flexible Schedule</li>
              </ul>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
