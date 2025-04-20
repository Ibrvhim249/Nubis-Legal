import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { throttle } from 'lodash-es';
// import { IoIosArrowDropdown } from 'react-icons/io';
import { Sling as Hamburger } from 'hamburger-react';
import './Header.css';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about-us' },
  { name: 'Blog', path: '/blog' },
  {
    name: 'Services',
    path: '/services',
    categories: [
      {
        name: 'Contract and Document Services',
        services: [
          { name: 'Contract Drafting and Review', path: '/services/contract-drafting' },
          { name: 'Contract Review and Analysis', path: '/services/contract-review' },
          { name: 'Legal Document Preparation', path: '/services/document-preparation' },
          { name: 'Court Document Filing & Motion Drafting', path: '/services/CourtDocument' },
        ],
      },
      {
        name: 'Advisory and Consultation Services',
        services: [
          { name: 'Legal Consultation', path: '/services/legal-consultation' },
          { name: 'Tax and Financial Legal Services', path: '/services/tax-services' },
          { name: 'Regulatory and Legal Compliance', path: '/services/compliance' },
          { name: 'Risk Assessment & Legal Strategy Planning', path: '/services/RiskA' },
        ],
      },
      {
        name: 'Business Formation and Protection',
        services: [
          { name: 'Company Formation and Registration', path: '/services/companyformation' },
          { name: 'Trademark and Intellectual Property Registration', path: '/services/trademark-registration' },
          { name: 'Business Structure Consultation', path: '/services/BusinessConsultation' },
          { name: 'Legal Subscription Plans for Startups', path: '/services/LegalSubscription' },
        ],
      },
      {
        name: 'Dispute and Debt Resolution',
        services: [
          { name: 'Dispute Resolution (Mediation & Arbitration)', path: '/services/dispute-resolution' },
          { name: 'Debt Collection Services', path: '/services/debt-collection' },
          { name: 'Litigation and Court Representation', path: '/services/litigation' },
          { name: 'Settlement Agreement Drafting', path: '/services/SettlementAgreement' },
        ],
      },
      {
        name: 'Real Estate Legal Services',
        services: [
          { name: 'Real Estate Transaction Review', path: '/services/real-estate' },
          { name: 'Lease Agreement Drafting & Negotiation', path: '/services/LeaseAgreement' },
          { name: 'Property Due Diligence', path: '/services/PropertyDueDiligence' },
          { name: 'Title & Ownership Dispute Resolution', path: '/services/TitleOwnership' },
        ],
      },
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

  // const toggleSubmenu = useCallback((path) => {
  //   setOpenSubmenu((prev) => (prev === path ? null : path));
  // }, []);

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
              const hasSubmenu = Boolean(link.categories);
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
                        {/* <button
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
                        </button> */}
                      </div>
                      <ul
                        id={submenuId}
                        className={`dropdown-menu ${isSubmenuOpen ? 'visible' : ''}`}
                        role="menu"
                        aria-hidden={!isSubmenuOpen}
                      >
                        {link.categories.map((category) => (
                          <li key={category.name} className="dropdown-column">
                            <h3 className="category-title">{category.name}</h3>
                            <ul className="category-services">
                              {category.services.map((service) => (
                                <li key={service.path}>
                                  <NavLink
                                    to={service.path}
                                    className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`}
                                    tabIndex={isSubmenuOpen ? 0 : -1}
                                  >
                                    {service.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
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