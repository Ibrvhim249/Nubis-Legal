import "./ServicesPages.css"
import { useState, useEffect, useRef } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L4 from "../../img/assets/final media/services IMAGE/L  4.png"
import s4 from "../../img/assets/final media/services IMAGE/s 4.png"

import svg1 from "../../img/assets/Servicepages/tradmark/Mask group.svg";
import svg2 from "../../img/assets/Servicepages/tradmark/Group 31.svg";
import svg3 from "../../img/assets/Servicepages/tradmark/Group 33.svg";
import svg4 from "../../img/assets/Servicepages/tradmark/Subtract.svg";
import svg5 from "../../img/assets/Servicepages/tradmark/Group 34.svg";
import svg6 from "../../img/assets/Servicepages/tradmark/Vector.svg";
// import svg7 from "../../img/assets/Servicepages/tradmark/Subtract (1).svg";
import svg8 from "../../img/assets/Servicepages/tradmark/Group 37.svg";



const mainPoints = [
    {
      title: "Trademark Registration",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "We provide comprehensive support for registering trademarks locally and internationally. Our team handles all aspects of the registration process, from initial searches to filing applications, to ensure that the brand's distinctiveness is legally protected and that clients maintain exclusive rights to their trademarks."
    },
    {
      title: "Trademark Renewal Services",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "To protect and maintain our clients’ exclusive rights, we manage the trademark renewal process, ensuring that trademarks remain valid and enforceable. Our services include timely reminders, preparation of necessary documents, and submission to the relevant authorities, so our clients never miss important deadlines."
    },
       {
      title: "Trademark Licensing and Assignment",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "We assist clients with drafting and reviewing trademark licensing and assignment agreements to allow for authorized use of their trademarks or transfer of ownership while protecting their rights. This ensures clarity in terms and conditions for all parties involved and maximizes the brand's commercial value."
        },
    {
      title: "Copyright Registration",
      icon: <img src={svg4} alt="svg2" className="point-icon" />,
      description: "For creative works such as literary pieces, music, software, and other original content, we offer copyright registration services to secure protection for our clients’ intellectual assets. Our team guides clients through the filing process, verifying that all legal requirements are met to protect their work from unauthorized use and infringement."
    },
    {
      title: "Patent and Design Protection",
      icon: <img src={svg5} alt="svg2" className="point-icon" />,
      description: "We support clients in securing patents for inventions and protecting industrial designs. Our team assists with patent searches, application filings, and ongoing compliance, enabling clients to safeguard their innovations and unique designs against infringement."
    },
    {
      title: "Intellectual Property Portfolio Management",
      icon: <img src={svg6} alt="svg2" className="point-icon" />,
      description: "Our firm provides ongoing support to manage clients' intellectual property portfolios. This includes monitoring renewals, tracking infringements, and maintaining a comprehensive overview of all registered assets to maximize the value and enforceability of their intellectual property."
    },
    {
      title: "IP Dispute Resolution",
      icon: <img src={svg8} alt="svg2" className="point-icon" />,
      description: "WIn case of infringement or disputes, we offer legal representation and advice to protect our clients' intellectual property rights. We aim to resolve conflicts effectively, whether through negotiation, mediation, or litigation, ensuring the client's brand and intellectual assets are safeguarded."
    }
    
  ];

function MainPointsSection() {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const calculateMaxScroll = () => {
      setMaxScroll(scrollContainer.scrollHeight - scrollContainer.clientHeight);
    };

    const handleScroll = () => {
      setScrollPosition(scrollContainer.scrollTop);
    };

    calculateMaxScroll();
    scrollContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateMaxScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateMaxScroll);
    };
  }, []);

  const thumbPosition = maxScroll > 0 
    ? (scrollPosition / maxScroll) * (100 - (16 * 100) / 300)
    : 0;

  return (
  <section className="main-points-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="m-image-container">
            <img
              src={L4}
              alt="Corporate services"
              className="building-image"
            />
          </div>

          <div className="text-content">
            <h2>Main Points</h2>
            
            <div className="scroll-wrapper">
              <div ref={scrollContainerRef} className="scroll-container">
                {mainPoints.map((point, index) => (
                  <div key={index} className="point-item">
                    <div className="point-header">
                      {point.icon}
                      <h3 className="point-title">{point.title}</h3>
                    </div>
                    <p className="point-description">{point.description}</p>
                  </div>
                ))}
              </div>
              <div className="fade-effect" />
            </div>


            <div className="custom-scrollbar">
              <div className="scroll-track">
                <div 
                  className="scroll-thumb"
                  style={{ top: `${thumbPosition}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function TrademarkandIntellectualPropertyRegistration() {


  // ===============================================
const [activeFaq, setActiveFaq] = useState(null);

const toggleFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

const faqItems = [
  {
    question: "What IP can you register?",
    answer: "What IP can you register."
  },
  {
    question: "How long does trademark registration take?",
    answer: "6–12 months (we expedite where possible)."
  },
  {
    question: "What’s the cost?",
    answer: "Fees vary by type/country—we provide transparent pricing upfront."
  },
  {
    question: "Can you handle international IP registration?",
    answer: "Yes, via the Madrid Protocol or country-specific filings."
  },
  {
    question: "What if my trademark is challenged?",
    answer: "We defend your rights through oppositions or litigation."
  },
  {
    question: "Do you offer IP infringement monitoring?",
    answer: "Yes, we track unauthorized use and send cease-and-desist letters."
  },
  // Add more FAQ items as needed
];

  return (
    <>
      {/* -- Hero Section -- */}
            <section className="hero">
              <div className="hero-image-container">
                <img 
                  src={servicepagesHero} 
                  alt="Decorative background" 
                  className="hero-bg"
                  role="presentation" // For screen readers (since it's decorative)
                />
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content">
                <h1 className="hero-title">
                  <span>Protect Your Brand and Innovations</span>
                
                  
                </h1>
                <p className="hero-subtitle">
                Leveraging Modern Legal Expertise and Innovative Approaches to Simplify Complex Challenges and Achieve Your Goals
                </p>
                {/* <div className="hero-cta">
                  <button className="cta-button">Get Started</button>
                </div> */}
              </div>
            </section>

{/* -- service-description Section -- */}
      <section className="service-description">
        <div className="service-description-container">
          
            <div className="service-description-text">
            <h2 className="service-description-title">Trademark Registration and Intellectual Property</h2>

              <p>We offer a full range of intellectual property services designed to help clients secure, protect, and leverage their trademarks, copyrights, patents, and other valuable intellectual assets. Our goal is to safeguard your creative and commercial innovations, ensuring they provide lasting competitive advantages.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L4} alt="About Us 2" />
          </div>
          </div>
        
      </section>

      {/* -- Main Point Section -- */}
      <MainPointsSection />
      

{/* -- service-data Section -- */}
          

      <section className="service-data" id="service-data">
  <div className="service-data-container">
    <div className="service-data-content">
      {/* Left Image Block */}
      <div className="service-data-blocks">
        <img src={s4} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Exclusive rights to your brand and creations.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Protection against unauthorized use.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Expert guidance on IP strategy.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Trademark searches & application filing.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Copyright and patent registration.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Defending against infringement claims</p>
        </div>
      </div>
    </div>
  </div>
</section>



{/* -- FAQ Section -- */}
<section className="faqs">
  <div className="faq-container">
    <h1 className="faq-header">Your Question Answered</h1>
    <h2 className="faq-subheader">Explore Our FAQ’s For Our Services<br />To learn more</h2>

    {faqItems.map((item, index) => (
      <div 
        className={`faq-item ${activeFaq === index ? 'active' : ''}`} 
        key={index}
        onClick={() => toggleFaq(index)}
      >
        <div className="faq-question">
          <span>
            <span className="faq-number">{String(index + 1).padStart(2, 'Q')}</span>
            {item.question}
          </span>
          <svg className="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="faq-content">
          {item.answer}
        </div>
      </div>
    ))}
  </div>
</section>

    </>
  );
}

export default TrademarkandIntellectualPropertyRegistration;