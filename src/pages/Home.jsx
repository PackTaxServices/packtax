import '../styles/home.css'
import myPhoto from '../pics/IMG_8093.jpg';

function Home() {
  return (
    <div className="container my-5 home-container">

      <div className="row align-items-center mb-5">
        {/* Text Section */}
        <div className="col-md-6 text-start">
          <h1 className="home-title-one">Pack Tax Services</h1>
          <h1 className="home-title-two">Accounting and Tax Services for <br />Individuals & Businesses</h1>
          <p className="home-description">
            At Pack Tax Services, we specialize in personalized tax planning, preparation, and advice for individuals and small business owners. We provide reliable and efficient tax services to help you manage your finances with ease. Contact us today to learn more!
          </p>
          <a href="/contact" className="home-button">Schedule A Consultation</a>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={myPhoto}
            alt="My Headshot"
            className="img-fluid rounded"
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section mt-5">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="review-card p-3 shadow rounded">
            <div className="review-stars mb-2">
                ★ ★ ★ ★ ★ 
              </div>
              <p className="review-text">"Pack Financial helped me save so much on taxes. Highly recommend their services!"</p>
              <h6 className="review-author text-end">- James Thomas</h6>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="review-card p-3 shadow rounded">
            <div className="review-stars mb-2">
                ★ ★ ★ ★ ★ 
              </div>
              <p className="review-text">"Very professional and thorough. The best tax service I’ve used."</p>
              <h6 className="review-author text-end">- Quincy Carter</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="review-card p-3 shadow rounded">
            <div className="review-stars mb-2">
                ★ ★ ★ ★ ★ 
              </div>
              <p className="review-text">"They make the process so easy and stress-free. Fantastic team!"</p>
              <h6 className="review-author text-end">- Justin Bell</h6>
            </div>
          </div>
        </div>
      </div>

    </div>

    
  );
}

export default Home;