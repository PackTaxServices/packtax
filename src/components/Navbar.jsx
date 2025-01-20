import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{ height: '100px' }}>
      
      <div className="container d-flex align-items-center">
        {/* Logo Section */}
        

        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}
                to="/faq"
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                to="/contact"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
