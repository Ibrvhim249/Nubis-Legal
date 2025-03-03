import { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { throttle } from 'lodash-es';
import './Header.css';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    subLinks: [
      { name: 'Contract Drafting and Review', path: '/services/contract-drafting' },
      { name: 'Legal Consultation', path: '/services/legal-consultation' },
      { name: 'Company Formation and Registration', path: '/services/companyformation' },
      { name: 'Trademark and Intellectual Property Registration', path: '/services/trademark-registration' },
      { name: 'Legal Document Preparation', path: '/services/document-preparation' },
      { name: 'Debt Collection', path: '/services/debt-collection' },
      { name: 'Litigation and Court Documents', path: '/services/litigation' },
      { name: 'Dispute Resolution', path: '/services/dispute-resolution' },
      { name: 'Contract Review and Analysis', path: '/services/contract-review' },
      { name: 'Real Estate Legal Support', path: '/services/real-estate' },
      { name: 'Tax and Financial Legal Services', path: '/services/tax-services' },
      { name: 'Regulatory and Legal Compliance', path: '/services/compliance' },
    ],
  },
  { name: 'About', path: '/about-us' },
  { name: 'Blog', path: '/blog' },
];

export default function Header() {
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Scroll effect to add shadow and adjust header background
  useEffect(() => {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const handleScroll = throttle(() => {
      const shouldScrolled = window.scrollY > heroSection.offsetHeight;
      headerRef.current?.classList.toggle('scrolled', shouldScrolled);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resize handler to close mobile menu when switching to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Click outside handler to close mobile menu and submenus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.hamburger-menu')
      ) {
        setIsMobileMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      const newState = !prev;
      document.body.style.overflow = newState ? 'hidden' : '';
      return newState;
    });
    setOpenSubmenu(null);
  };

  const handleSubmenuToggle = (path) => {
    setOpenSubmenu(prev => (prev === path ? null : path));
  };

  return (
    <header className="header" ref={headerRef}>
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink to="/" className="logo" aria-label="Home">
          NUBIS
        </NavLink>

        <button
  className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
  onClick={toggleMobileMenu}
  aria-label={`${isMobileMenuOpen ? 'Close' : 'Open'} menu`}
  aria-expanded={isMobileMenuOpen}
  aria-controls="nav-menu"
>
  <span className="hamburger-icon" />
</button>

        <div 
          id="nav-menu"
          className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}
          ref={mobileMenuRef}
        >
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li
                key={link.path}
                className={`nav-item ${link.subLinks ? 'has-dropdown' : ''}`}
              >
                {link.subLinks ? (
                  <div className="dropdown-container">
                    <button
                      className={`nav-link submenu-toggle ${openSubmenu === link.path ? 'active' : ''}`}
                      onClick={() => handleSubmenuToggle(link.path)}
                      aria-expanded={openSubmenu === link.path}
                      aria-controls={`dropdown-${link.path.replace(/\//g, "-")}`}
                    >
                      {link.name}
                      <span className="dropdown-arrow" />
                    </button>
                    <ul
                      id={`dropdown-${link.path.replace(/\//g, "-")}`}
                      className={`dropdown-menu ${openSubmenu === link.path ? 'visible' : ''}`}
                    >
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.path}>
                          <NavLink
                            to={subLink.path}
                            className={({ isActive }) => 
                              `dropdown-link ${isActive ? 'active' : ''}`
                            }
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setOpenSubmenu(null);
                            }}
                          >
                            {subLink.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {isMobileMenuOpen && (
          <div
            className="mobile-menu-overlay open"
            onClick={toggleMobileMenu}
            role="button"
            aria-label="Close menu"
            tabIndex={0}
          />
        )}
      </nav>
    </header>
  );
}
