import React from 'react';
import myPhoto from '../pics/IMG_8093.jpg'; 
import '../styles/aboutme.css'

function AboutMe() {
  return (
    <div className="container-about container my-5 text-center">
      {/* Section 1: Centered About Me Title */}
      <div className="mb-5">
        <h1 className="about-title">About Me</h1>
      </div>

      {/* Section 2: Picture and Description */}
      <div className="row align-items-center">
        {/* Left: Picture */}
        <div className="col-md-6 text-center">
          <img
            src={myPhoto}
            alt="My Portrait"
            className="img-fluid rounded shadow"
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </div>
        {/* Right: Description */}
        <div className="col-md-6 text-start">
          <h2 className="about-subtitle">Christian Pack</h2>
          <p>
            Christian Pack is an Accounting professional currently advancing his education at the University of Central Florida. Over the years, he has filed and assisted in the preparation of more than 200 individual, estate, and corporate tax returns. Driven by a passion for helping others and inspired by his own less-than-ideal experiences with other tax preparation platforms, Christian founded Pack Tax Services to make a difference.
          </p>
          <p>
            Our mission is simple: to focus on you. We are here to streamline your financial decisions and help you achieve long-term success. At Pack Tax Services, we go beyond tax preparation — we aim to empower you. We strive to educate individuals about their taxes, making the process less daunting and more transparent. 
          </p>
          <p>
            Whether you're filing for the first time or simply looking for a more personalized experience, we're committed to ensuring you feel confident, secure, and in control of your financial future. Let us help you take the guesswork out of taxes, so you can focus on what matters most.
          </p>
          {/* Button below description */}
          <div className="mt-4">
            <a href="/contact" className="about-button">Schedule A Consultation</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
