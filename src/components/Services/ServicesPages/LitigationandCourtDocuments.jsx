import "./ServicesPages.css"
import { useState, useEffect, useRef } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L7 from "../../img/assets/final media/services IMAGE/L  7.png";
import s7 from "../../img/assets/final media/services IMAGE/s 7.png";
import svg1 from "../../img/assets/Servicepages/litigation/Group 38.svg";
import svg2 from "../../img/assets/Servicepages/litigation/Group 40.svg";
import svg3 from "../../img/assets/Servicepages/litigation/Group 43.svg";
import svg4 from "../../img/assets/Servicepages/litigation/Exclude.svg";
import svg5 from "../../img/assets/Servicepages/litigation/Group 91.svg";
import svg6 from "../../img/assets/Servicepages/litigation/Exclude (1).svg";


const mainPoints = [
    {
      title: "Strategic Litigation Planning and Guidance",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "We offer tailored advice and develop strategic plans for each phase of the litigation process. From case initiation to execution, we guide clients on necessary procedures, helping them take well-informed legal steps and effectively manage their cases. This includes devising clear strategies to achieve optimal results and monitoring each stage of the litigation to ensure compliance and responsiveness."
    },
    {
      title: "Preparation of Legal Memos",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "Our team prepares comprehensive and compelling legal memos for various types of cases, including criminal, civil, commercial, real estate, and leasing matters. These memos are meticulously crafted to strengthen our clients' positions and articulate their rights and interests effectively before the court."
    },
       {
      title: "Drafting and Filing Pleadings",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "We draft all necessary pleadings, petitions, motions, and responses required at each stage of the litigation process. Our attention to detail in documentation ensures that every aspect of the case is accurately presented, enhancing the strength of our clients' positions."
        },
    {
      title: "Court Representation",
      icon: <img src={svg4} alt="svg2" className="point-icon" />,
      description: "We provide skilled representation in court, advocating on behalf of our clients in all proceedings. Our legal team presents arguments and responds effectively to opposing parties to protect our clients' interests."
    },
    {
      title: "Enforcement of Judgments",
      icon: <img src={svg5} alt="svg2" className="point-icon" />,
      description: "Following favorable outcomes, we assist clients in enforcing court judgments. We handle the necessary procedural steps to ensure our clients’ rights are fully realized, whether through asset recovery, garnishments, or other enforcement mechanisms."
    },
    {
      title: "Litigation Management and Tracking",
      icon: <img src={svg6} alt="svg2" className="point-icon" />,
      description: "We provide ongoing support by tracking the progress of litigation cases, ensuring all deadlines are met and procedural requirements are fulfilled. We keep our clients informed at each stage and adapt strategies as needed to respond to changes and developments in the case."
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
              src={L7}
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


function LitigationandCourtDocuments() {



  // ===============================================
  const [activeFaq, setActiveFaq] = useState(null);

const toggleFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

const faqItems = [
  {
    question: "What types of court documents do you handle?",
    answer: "We draft and file complaints, petitions, motions, responses, affidavits, and more for civil and commercial cases."
  },
  {
    question: "Do you provide legal representation in court?",
    answer: "Yes. We represent clients through all litigation phases, including hearings, trials, and appeals."
  },
  {
    question: "How do you prepare for a litigation case?",
    answer: "We gather facts, research legal precedents, draft arguments, and develop strategies tailored to your goals."
  },
  {
    question: "Can you help with settlement negotiations?",
    answer: "Absolutely. We often pursue settlement options before or during litigation to save time and costs."
  },
  {
    question: "Do you assist with appeals?",
    answer: "Yes. We help with filing appeals, writing appellate briefs, and appearing in appellate court."
  },
  {
    question: "What’s your process for filing motions or legal briefs?",
    answer: "We review your case details, determine the right motion or argument, and file it with the appropriate court within required deadlines."
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
                  <span>Powerful Legal Representation When Needed</span>
                
                  
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
            <h2 className="service-description-title">Litigation and Court Documents</h2>

              <p>We provide a wide range of litigation services designed to guide and support our clients through every stage of the legal process. Whether you are initiating a claim or defending against one, our experienced legal team is committed to protecting your rights and achieving the best possible outcome.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L7} alt="About Us 2" />
          </div>
          </div>
        
      </section>

      {/* -- Main Point Section -- */}
      <MainPointsSection />


      {/* -- Service Data Section -- */}
      <section className="service-data" id="service-data">
  <div className="service-data-container">
    <div className="service-data-content">
      {/* Left Image Block */}
      <div className="service-data-blocks">
        <img src={s7} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Expert Legal Consultation: Our team provides comprehensive legal advice tailored to your specific business needs.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Contract Management: We draft, review, and negotiate contracts to protect your organization&apos;s interests.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Dispute Resolution: Professional mediation and litigation services to resolve commercial conflicts efficiently.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Regulatory Compliance: Ensure your operations meet all legal requirements with our compliance audits.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Corporate Governance: Strategic guidance for board management and shareholder relations.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>International Law: Cross-border legal support for global business operations and expansions.</p>
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

export default LitigationandCourtDocuments;