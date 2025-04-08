import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { throttle } from 'lodash-es';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Sling as Hamburger } from 'hamburger-react';
import './Header.css';



const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about-us' },
  { name: 'Blog', path: '/blog' },

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
  
];

export default function Header() {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const BREAKPOINT_MD = 768;

  const memoizedNavLinks = useMemo(() => NAV_LINKS, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth > BREAKPOINT_MD) {
      setIsOpen(false);
      setOpenSubmenu(null);
    }
  }, [BREAKPOINT_MD]);

  const throttledHandleResize = useMemo(
    () => throttle(handleResize, 100),
    [handleResize]
  );

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    
    window.addEventListener('resize', throttledHandleResize);
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('resize', throttledHandleResize);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [throttledHandleResize]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && 
          !headerRef.current.contains(event.target) &&
          !event.target.closest('.nav-menu')) {
        setIsOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScroll = useMemo(
    () => throttle(() => {
      headerRef.current?.classList.toggle('scrolled', window.scrollY > 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      if (openSubmenu !== null) {
        setOpenSubmenu(null);
      } else {
        setIsOpen(false);
      }
    }
  }, [openSubmenu]);

  const toggleSubmenu = useCallback((path) => {
    setOpenSubmenu((prev) => (prev === path ? null : path));
  }, []);

  return (
    <header className="header" ref={headerRef} onKeyDown={handleKeyDown}>
      <nav className="navbar hcontainer" aria-label="Main navigation">
        <NavLink 
          to="/" 
          className="logo" 
          aria-label="NUBIS Home"
          onClick={() => setIsOpen(false)}
        >
          NUBIS
        </NavLink>

        <div className="hamburger-menu" onClick={(e) => e.stopPropagation()}>
          <Hamburger 
            toggled={isOpen} 
            toggle={() => setIsOpen(prev => !prev)}
            color={isOpen ? "#2f3d78" : "white"}
            size={32}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          />
        </div>

        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {memoizedNavLinks.map((link) => {
              const hasSubmenu = Boolean(link.subLinks);
              const submenuId = `submenu-${link.path.replace(/\//g, '-')}`;
              const isSubmenuOpen = openSubmenu === link.path;

              return (
                <li 
                  key={link.path} 
                  className="nav-item"
                  onClick={() => setIsOpen(false)}
                >
                  {hasSubmenu ? (
                    <div className="dropdown">
                      <div className="nav-link-wrapper">
                        <NavLink
                          to={link.path}
                          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                          end={link.exact}
                        >
                          {link.name}
                        </NavLink>
                        <button
                          className={`submenu-toggle ${isSubmenuOpen ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSubmenu(link.path);
                          }}
                          aria-expanded={isSubmenuOpen}
                          aria-controls={submenuId}
                          aria-haspopup="true"
                        >
                          <IoIosArrowDropdown className="dropdown-icon" aria-hidden="true" />
                        </button>
                      </div>
                      <ul
                        id={submenuId}
                        className={`dropdown-menu ${isSubmenuOpen ? 'visible' : ''}`}
                        role="menu"
                        aria-hidden={!isSubmenuOpen}
                      >
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.path}>
                            <NavLink
                              to={subLink.path}
                              className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`}
                              tabIndex={isSubmenuOpen ? 0 : -1}
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
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      end={link.exact}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}