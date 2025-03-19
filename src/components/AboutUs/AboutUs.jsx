import './AboutUS.css';
import aboutusHero from '../img/assets/AboutUS/About us nubis.jpg';
import aboutImage2 from '../img/assets/AboutUS/about us section in about us page.png';
import aboutceo from '../img/assets/AboutUS/Group 690.png';
import aboutUs from '../img/assets/AboutUS/New about us section img about us page.png';
// import ceoBanner from '../img/assets/AboutUS/ABOUT US CEO BANNER.svg';
import ourarea from '../img/assets/AboutUS/Our areas of experites new img.png';
import missionImage from '../img/assets/AboutUS/our mission macbook screen.png'; // Import mission image
import visionImage from '../img/assets/AboutUs/our vission macbook screen.png'; // Import vision image
import valuesImage from '../img/assets/AboutUS/our value macbook screen.png'; // Import values image
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const TeamMember = ({ image, name, role, description }) => {
  return (
    <div className="team-member">
      <img src={image} alt={`${name} - ${role}`} />
      <div className="member-info">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
  
};

TeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function AboutUS() {
  const [activeTab, setActiveTab] = useState("mission");
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const counterSectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = counterSectionRef.current; // Copy to local variable
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounterVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionElement);

    // Cleanup uses the locally scoped variable
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  const renderGoalContent = () => {
    switch (activeTab) {
      case "mission":
        return <p>We are dedicated to providing cutting-edge, client-centered legal services that simplify complex legal challenges. Our mission is to build long-term partnerships based on trust, transparency, and impactful results. We aim to deliver efficient, innovative solutions tailored to each client&apos;s unique needs, ensuring their goals are met with precision and professionalism. Through our commitment to excellence and ethical practices, we seek to create lasting value and make a positive difference in the lives of our clients.</p>;
      case "vision":
        return <p>Our vision is to be recognized as a leading modern legal consultancy that transforms the delivery of legal services—offering solutions that are efficient, transparent, and tailored to each client’s specific needs. We aspire to set new standards in the legal industry by leveraging technology, fostering innovation, and continuously evolving to meet the changing landscape. By prioritizing client satisfaction and trust, we aim to be the go-to legal partner known for delivering exceptional value and impactful results.</p>;
      case "values":
        return <p>
       Our core values focus on integrity, innovation, and client satisfaction. We uphold ethical standards, embrace new technologies for efficiency, and prioritize tailored solutions to meet each client&apos;s unique needs. These principles drive our commitment to delivering exceptional legal services and building long-term relationships.</p>;
      default:
        return null;
    }
  };

  const CounterCard = ({ 
    number, 
    title, 
    description, 
    start, 
    symbol = "+", 
    increment = 30 // Default increment of 30 if not specified
  }) => {
    const [count, setCount] = useState(1);
    const hasAnimated = useRef(false);
  
    useEffect(() => {
      if (start && !hasAnimated.current) {
        hasAnimated.current = true;
        
        const incrementCount = () => {
          let startCount = 1;
          const end = number;
          const incrementTime = 50;
  
          const incrementFn = () => {
            startCount = Math.min(startCount + increment, end);
            setCount(startCount);
            if (startCount < end) {
              setTimeout(incrementFn, incrementTime);
            }
          };
  
          incrementFn();
        };
  
        incrementCount();
      }
    }, [start, number, increment]); // Added increment to dependencies
  
    return (
      <div className="counter-card">
        <h2 className="counter-number">{count}{symbol}</h2>
        <h3 className="counter-title">{title}</h3>
        <p className="counter-description">{description}</p>
      </div>
    );
  };
  
  CounterCard.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    start: PropTypes.bool.isRequired,
    symbol: PropTypes.string,
    increment: PropTypes.number, // Added increment prop type
  };

  return (
    <>
      {/* -- Hero Section -- */}
      <section className="hero">
        <div className="hero-image-container">
          <img 
            src={aboutusHero} 
            alt="Decorative background" 
            className="hero-bg"
            role="presentation" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span>We Don’t Just Solve Legal Problem<br />We Build Trust </span>
          
            
          </h1>
          <p className="hero-subtitle">
          Partnering with You to Provide Lasting Solutions While Building Strong, Trust-Based Relationships Every Step of the Way
          </p>
          {/* <div className="hero-cta">
            <button className="cta-button">Get Started</button>
          </div> */}
        </div>
      </section>

      {/* -- About Us Section -- */}
      <section className="about-us-page">
        <div className="about-us-page-container">
          <div className="about-us-page-content">
            {/* Left Image Blocks */}
            <div className="about-us-page-blocks">
              <img src={aboutUs} alt="About Us 2" />
            </div>

            {/* Right Text Section */}
            <div className="about-us-page-text">
              <h2 className="about-us-page-title">ABOUT US</h2>
              <p>&quot;At Nubis legal consultancy, we combine legal expertise with a modern, client-focused approach. Our team of seasoned professionals with experience in corporate, commercial, and civil law is dedicated to providing innovative, tailored solutions for businesses and individuals alike. We pride ourselves on delivering clarity, efficiency, and results in every case.&quot;
              <br />
              When you choose Nubis, you&apos;re choosing a strategic partner committed to easing your burden, navigating the complexity of your matter, and achieving success. We deliver significant benefits that you can measure: lower internal and external costs, faster lead times on critical processes, more effective allocation of resources, productivity increases, and effective case management—these are some of the benefits we help our clients realize every day.
You can choose from a comprehensive range of service solutions, all backed by deep expertise, global reach, and exceptional client service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- CEO Section -- */}
    <section className="about-us-ceo">
        <div className="about-us-ceo-container">
          
           {/* Right Text Section */}
           <div className="about-us-ceo-text" style={{ color: 'white' }}>           &quot; The legal world is constantly evolving, and so are we. At Nubis Legal Consultancy, we believe that every individual and business deserves access to top-tier legal services, we believe that legal services should be more than just transactions—they should be partnerships built on trust, clarity, and commitment. We founded this firm to provide businesses and individuals with reliable, strategic, and results-driven legal solutions that empower them to thrive in an ever-evolving world. Our team of legal professionals is here to guide you every step of the way, ensuring your rights and interests are always protected.&quot;                
            </div>
            
          
           {/* Left Image Blocks */}
           <div className="about-us-ceo-blocks">
          
              
          <img src={aboutceo} alt="About Us 2" />
        
          </div>
      </div>
      </section>

      {/* -- Counter Section -- */}
      <section className="counter-section" ref={counterSectionRef}>
        <div className="counter-container">
          <div className="counter-grid">
            <CounterCard 
              start={isCounterVisible}
              number={500} 
              increment={20}
              title="Successful Legal Cases" 
              description="Protecting clients with expert legal representation."
            />
            <CounterCard 
              start={isCounterVisible}
              number={1000}
              increment={30} 
              title="Contracts Drafted & Reviewed" 
              description="Ensuring risk-free, legally binding agreements"
            />
            <CounterCard 
              start={isCounterVisible}
              number={200} 
              increment={7}
              title="Businesses Registered" 
              description="Hassle-free company formation & compliance"
            />
            <CounterCard 
  start={isCounterVisible}
  number={98} 
  increment={3}
  title="Client Satisfaction" 
  description="Trusted by businesses and individuals alike"
  symbol="%"
/>
          </div>
        </div>
      </section>

      {/* -- Nimo Section -- */}
      <section className="nimo">
        <div className="nimo-container">
          <div className="nimo-content">
            <div className="nimo-blocks">
              <span><img src={ourarea} alt="About Us 2" /></span>
            </div>
            <div className="nimo-text">
              <h2 className="nimo-title">Our Area of Expertise</h2>
              <p>When you choose Nubis, you&apos;re choosing a strategic partner committed to easing your burden, navigating the complexity of your matter, and achieving success. We deliver significant benefits that you can measure: lower internal and external costs, faster lead times on critical processes, more effective allocation of resources, productivity increases, and effective case management—these are some of the benefits we help our clients realize every day.
You can choose from a comprehensive range of service solutions, all backed by deep expertise, global reach, and exceptional client service.
</p>
            </div>
          </div>
        </div>
      </section>

{/* -- Company Goal Section -- */}
<section className="c-goal" id="goal">
  <div className="c-goal-container">
    {/* Left Content */}
    <div className="c-goal-content">
      <div className="c-goal-text">
        <h2 className="c-goal-title">Our Main Company Goal</h2>
        <div className="c-goal-btn">
          <button
            className={activeTab === "mission" ? "active" : ""}
            onClick={() => setActiveTab("mission")}
          >
            Mission
          </button>
          <button
            className={activeTab === "vision" ? "active" : ""}
            onClick={() => setActiveTab("vision")}
          >
            Vision
          </button>
          <button
            className={activeTab === "values" ? "active" : ""}
            onClick={() => setActiveTab("values")}
          >
            Values
          </button>
        </div>
        {renderGoalContent()}
      </div>
    </div>

    {/* Right Image */}
    <div className="c-goal-blocks">
      {activeTab === "mission" && <img src={missionImage} alt="Mission" className="c-goal-image" />}
      {activeTab === "vision" && <img src={visionImage} alt="Vision" className="c-goal-image" />}
      {activeTab === "values" && <img src={valuesImage} alt="Values" className="c-goal-image" />}
    </div>
  </div>
</section>



      {/* -- Meet Our Team Section -- */}
      <section className="meet-our-team">
        <div className="team-members">
          <div className="team-intro">
            <h2>Meet Our Team</h2>
            <br />
            <p>Our talented team members are dedicated to making an impact.</p>
          </div>
          <TeamMember
            image={aboutImage2}
            name="John Doe"
            role="CEO"
            description="Visionary leader with 15+ years experience"
          />
          <TeamMember
            image={aboutImage2}
            name="Jane Smith"
            role="CTO"
            description="Tech innovator and solution architect"
          />
        </div>
      </section>
    </>
  );
}

export default AboutUS;