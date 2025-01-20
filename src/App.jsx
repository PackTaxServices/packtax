import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import ContactMe from './pages/ContactMe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <div className="container" style={{ paddingTop: '80px' }}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
