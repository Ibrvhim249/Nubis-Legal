import './Footer.css';
// import nubisIcon from '../img/assets/final media/our features icon SVG/Client-Focused Approach.svg';

function Footer() {
  return (
    <>
      {/* -- Footer -- */}
      <footer className="footer-section">
        <div className="container footer-section-grid">
          <div className="footer-section-col">
            <h3 className="footer-section-logo">NUBIS</h3>
            <p className="footer-section-about">Where innovation meets <br /> expertise delivering smarter <br /> legal solutions.</p>
            <div className="footer-section-social-links">
              <a href="https://www.linkedin.com/in/nubis-legal-555982333/" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://x.com/nubislegal" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/nubislegal/" aria-label="GitHub"><i className="fab fa-instagram"></i></a>
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
              <li style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}><a href="#">+971509088954</a></li>
              <li style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}><a href="#">Info.nubislegal.com</a></li>
              <li style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}><a href="#">Dubai,Al Masaagd Tower, UAE</a></li>
              <li style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}><a href="#"> Sharjah Publishing City Business Center, UAE</a></li>
              <li style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}><a href="#">London, NW8 8SS United Kingdom</a></li>
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