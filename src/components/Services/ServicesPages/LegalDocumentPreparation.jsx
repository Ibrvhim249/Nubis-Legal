import "./ServicesPages.css"
import { useState, useEffect, useRef } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L5 from "../../img/assets/final media/services IMAGE/L  5.png";
import s5 from "../../img/assets/final media/services IMAGE/s 5.png";
import svg1 from "../../img/assets/Servicepages/legal decomentation/Group 25.svg";
import svg2 from "../../img/assets/Servicepages/legal decomentation/Group 26.svg";
import svg3 from "../../img/assets/Servicepages/legal decomentation/Group 27.svg";



const mainPoints = [
    {
      title: "Legal Memos",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "Drafting detailed legal memorandums across various cases to enhance our clients’ legal standing and clarify essential case points."
    },
    {
      title: "Declarations and Legal Certificates",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "Preparing necessary declarations and certificates for judicial purposes, ensuring that they meet required legal standards and facilitate a smoother legal process."
    },
       {
      title: "Representation and Negotiation Services",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "Representing clients in negotiations and meetings, advocating on their behalf to safeguard their interests and preserve their rights. We aim to achieve outcomes that align with our clients’ strategic goals."
        },
    {
      title: "Company Meetings and General Assemblies",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
    },
    {
      title: "Minutes Preparation",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "Drafting and documenting minutes of General Assembly meetings, Board of Directors meetings, and other essential corporate sessions, including resolutions, strategic decisions, and official records."
    },
    {
      title: "Representation in Meetings",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "Attending meetings on behalf of shareholders, partners, or corporate clients, ensuring their interests are fully represented and all necessary documentation is accurate and legally compliant."
    },
     
    {
      title: "Resolution Recording",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: ": Preparing detailed records of resolutions and key corporate decisions to ensure transparent corporate governance."
    },
    {
      title: "Agency Agreements",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "Drafting general and special power of attorney agreements that comply with legal standards, providing clients with legally binding authority in specific transactions, actions, or legal proceedings."
    },
    {
      title: "Comprehensive Legal Document Preparation",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "Assisting clients in the preparation of all essential legal documents to ensure full compliance with applicable laws and regulations, covering everything from initial drafts to finalized, executed versions."
    },
    {
      title: "Notarization and Authentication",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
    },
    {
      title: "Company Meetings and Resolutions",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "Certifying minutes of meetings, board resolutions, and corporate decisions at the notary public to guarantee their legal standing and credibility."
    },
    {
      title: "Agreements and Declarations Between Individuals",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "Ensuring that all agreements, declarations, and contracts between natural persons are notarized at the notary public, providing them with full legal validity and enforceability."
    },
    {
      title: "Representation at Meetings and Record Keeping",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "Representing companies and individuals in official meetings to ensure that their legal rights and positions are safeguarded and that all proceedings comply with legal requirements.Documenting and maintaining accurate records of meeting minutes, including investigation records, resolutions, and other formal decisions. This includes handling both formal and informal records to provide a complete, legally sound documentation process"

    },
    
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
              src={L5}
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

function LegalDocumentPreparation() {


    // ===============================================
const [activeFaq, setActiveFaq] = useState(null);

const toggleFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

const faqItems = [
  {
    question: "What documents do you prepare?",
    answer: "Wills, trusts, employment contracts, leases, and more."
  },
  {
    question: "How do you customize documents?",
    answer: "We tailor clauses to your assets, family needs, or business goals."
  },
  {
    question: "Can you notarize or witness signatures?",
    answer: "Yes, we arrange notarization and ensure legal validity."
  },
  {
    question: "What’s the cost for a will?",
    answer: "Flat fees from $[X] (simple to complex estates)."
  },
  {
    question: "Do you store copies of my documents?",
    answer: "Yes, secure digital/paper backups are available."
  },
  {
    question: "Can you update existing documents?",
    answer: "Absolutely—we revise for life changes (marriage, business expansion, etc.)."
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
                  <span>Precision-Crafted Legal Documents</span>
                
                  
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
            <h2 className="service-description-title">Legal Document Preparation</h2>

              <p>Our legal document preparation services are designed to ensure full compliance with all applicable legal requirements, delivered with precision and professionalism. We recognize that properly prepared documents are critical to protecting your rights, facilitating transactions, and meeting regulatory standards.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L5} alt="About Us 2" />
          </div>
          </div>
        
      </section>

      {/* -- Main Point Section -- */}
      <MainPointsSection />

      <section className="service-data" id="service-data">
  <div className="service-data-container">
    <div className="service-data-content">
      {/* Left Image Block */}
      <div className="service-data-blocks">
        <img src={s5} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Documents that reflect your specific requirements.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Reduced risk of disputes or legal challenges.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Peace of mind knowing your documents are legally enforceable.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Drafting and reviewing contracts, agreements, and legal notices.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Customization to fit personal, business, and industry-specific needs.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Ensuring compliance with local, national, and international laws..</p>
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

export default LegalDocumentPreparation;