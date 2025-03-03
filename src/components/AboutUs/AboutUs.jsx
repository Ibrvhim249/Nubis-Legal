import './AboutUS.css';
import backgroundImage from '../img/loading.png';
import aboutImage2 from '../img/assets/AboutUS/about us section in about us page.png';
import aboutUs from '../img/assets/AboutUS/about us section in about us page.png';
import ourarea from '../img/assets/AboutUS/our area of experites macbook.png';
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
  description: PropTypes.string.isRequired
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
        return <p>We strive to provide cutting-edge,
           client-centered legal services that simplify complex legal challenges. 
           Our mission is to build long-term partnerships based on trust,
            clarity, and impactful results.</p>;
      case "vision":
        return <p>To be recognized as a leading modern legal consultancy that 
          transforms the way legal services are delivered—efficient,
           transparent, and tailored to each client’s needs.</p>;
      case "values":
        return <p>
        o	Integrity: We uphold the highest ethical standards in everything we do. <br />
        o	Innovation: We embrace modern solutions to deliver efficient, effective results. <br />
        o	Client Focus: Your needs are at the heart of our work. <br />
        o	Excellence: We strive for the highest quality in every case. <br />
        o	Collaboration: We work with you as a partner, not just a service provider.
        </p>;
      default:
        return null;
    }
  };

  const CounterCard = ({ number, title, description, start }) => {
    const [count, setCount] = useState(1);
    const hasAnimated = useRef(false);

    useEffect(() => {
      if (start && !hasAnimated.current) {
        hasAnimated.current = true;
        
        const incrementCount = () => {
          let startCount = 1;
          const end = number;
          const incrementTime = 50;

          const increment = () => {
            startCount = Math.min(startCount + 2, end);
            setCount(startCount);
            if (startCount < end) {
              setTimeout(increment, incrementTime);
            }
          };

          increment();
        };

        incrementCount();
      }
    }, [start, number]);

    return (
      <div className="counter-card">
        <h2 className="counter-number">{count}+</h2>
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
  };

  return (
    <>
      {/* -- Hero Section -- */}
      <section className="hero">
        <div className="hero-image-container">
          <img 
            src={backgroundImage} 
            alt="Decorative background" 
            className="hero-bg"
            role="presentation"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">
            <span className="highlight">Innovative Digital Solutions </span>
          </h1>
          <p className="hero-subtitle">
            Transforming ideas into exceptional digital experiences
          </p>
          <div className="hero-cta">
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* -- About Us Section -- */}
      <section className="about-us-page" id="about">
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
              When you choose Nubis, you&apos;re choosing a strategic partner committed to easing your burden, navigating the complexity of your matter, and achieving success...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- CEO Section -- */}
      <section className="about-us-ceo" id="about">
        <div className="about-us-ceo-container">
          <div className="about-us-ceo-content">
            <div className="about-us-ceo-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis,
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                eget feugiat magna rhoncus.</p>
            </div>
          </div>
          <div className="about-us-ceo-blocks">
            <img src={aboutImage2} alt="About Us 2" />
          </div>
        </div>
      </section>

      {/* -- Counter Section -- */}
      <section className="counter-section" ref={counterSectionRef}>
        <div className="counter-container">
          <div className="counter-grid">
            <CounterCard 
              start={isCounterVisible}
              number={70} 
              title="Coded Elements" 
              description="From buttons, to inputs, navbars, alerts or cards, you are covered"
            />
            <CounterCard 
              start={isCounterVisible}
              number={15} 
              title="Design Blocks" 
              description="Mix the sections, change the colors and unleash your creativity"
            />
            <CounterCard 
              start={isCounterVisible}
              number={4} 
              title="Pages" 
              description="Save 3-4 weeks of work when you use our pre-made pages for your website"
            />
            <CounterCard 
              start={isCounterVisible}
              number={99} 
              title="Satisfaction" 
              description="Join thousands of happy customers using our templates and components"
            />
          </div>
        </div>
      </section>

      {/* -- Nimo Section -- */}
      <section className="nimo" id="about">
        <div className="nimo-container">
          <div className="nimo-content">
            <div className="nimo-blocks">
              <span><img src={ourarea} alt="About Us 2" /></span>
            </div>
            <div className="nimo-text">
              <h2 className="nimo-title">ABOUT US</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis,
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                eget feugiat magna rhoncus.</p><br />
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