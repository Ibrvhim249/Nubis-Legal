import './Footer.css';
import nubisIcon from '../img/assets/final media/our features icon SVG/Client-Focused Approach.svg';

function Footer() {
  return (
    <>
      {/* -- Footer -- */}
      <footer className="footer-section">
        <div className="container footer-section-grid">
          <div className="footer-section-col">
            <h3 className="footer-section-logo"><img src={nubisIcon} />NUBIS</h3>
            <p className="footer-section-about">Where innovation meets <br /> expertise delivering smarter <br /> legal solutions.</p>
            <div className="footer-section-social-links">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
            </div>
          </div>
          
          <div className="footer-section-col">
            <h4>Useful links</h4>
            <ul className="footer-section-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-section-col">
            <h4>Contact us</h4>
            <ul className="footer-section-links">
              <li><a href="#">+974838273</a></li>
              <li><a href="#">info@nubis.com</a></li>
              <li><a href="#">uae,dubai,</a></li>
              <li><a href="#">office 8.</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-section-bottom">
          <div className="container">
            <p>&copy; ALL COPYRIGHT RESERVED FOR NUBIS</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;