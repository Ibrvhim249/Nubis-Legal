"use client";

import { Linkedin, Twitter, Instagram } from "lucide-react";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-logo-section">
            <h2 className="footer-logo">NUBIS</h2>
            <p className="footer-description">
              Where innovation meets expertise delivering smarter legal solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/in/nubis-legal-555982333/"
              aria-label="LinkedIn"
              className="footer-social-icon"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/nubislegal"
              aria-label="Twitter"
              className="footer-social-icon"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/nubislegal/"
              aria-label="Instagram"
              className="footer-social-icon"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Content Grid */}
        <div className="footer-grid">
          {/* Useful Links Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">Useful links</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">Contact us</h3>
            <ul className="footer-links">
              <li><a href="tel:+971509088954" className="footer-link">+971 50 908 8954</a></li>
              <li><a href="mailto:info@nubislegal.com" className="footer-link">info@nubislegal.com</a></li>
              <li className="footer-address">Dubai, Al Masaagd Tower, UAE</li>
              <li className="footer-address">Sharjah Publishing City Business Center, UAE</li>
              <li className="footer-address">London, NW8 8SS United Kingdom</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; ALL COPYRIGHT RESERVED FOR NUBIS</p>
        </div>
      </div>
    </footer>
  );
}