import React from 'react';
import '../styles/services.css'
import myPhoto1 from '../pics/taxpic.jpeg'; 
import myPhoto2 from '../pics/businesspic.jpg'
import myPhoto3 from '../pics/computerpic.jpg'


function Services() {
  return (
    <div className="container-services container my-5">
      <h2 className="text-main-service text-center mb-4">Our Services</h2>

      {/* Cards */}
      <div className="row">
        {/* Card 1: Tax Consultation */}
        <div className="col-md-4">
          <div className="card shadow h-100 align-items-center">
            <img src={myPhoto1} className="card-img-top" alt="Tax Consultation"/>
            <div className="card-body text-center">
              <h5 className="card-title">Tax Consultation</h5>
              <p className="card-text">
                Get personalized tax advice and planning to optimize your financial situation.
              </p>
              <a href="/contact" className="services-button">Learn More</a>
            </div>
          </div>
        </div>

        {/* Card 2: Tax Filing */}
        <div className="col-md-4">
          <div className="card shadow h-100">
            <img src={myPhoto2} className="card-img-top" alt="Tax Filing" />
            <div className="card-body text-center">
              <h5 className="card-title">Tax Filing</h5>
              <p className="card-text">
                Hassle-free and accurate tax filing services for individuals and businesses.
              </p>
              <a href="/contact" className="services-button">Learn More</a>
            </div>
          </div>
        </div>

        {/* Card 3: Business Tax Solutions */}
        <div className="col-md-4">
          <div className="card shadow h-100">
            <img src={myPhoto3} className="card-img-top" alt="Business Tax Solutions" />
            <div className="card-body text-center">
              <h5 className="card-title">Business Tax Solutions</h5>
              <p className="card-text">
                Comprehensive tax strategies and solutions tailored for your business.
              </p>
              <a href="/contact" className="services-button">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div className='spacing-services-bottom'></div>
    </div>

  );
}

export default Services;
