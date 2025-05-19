import "./ServicesPages.css"
import { useState, useEffect, useRef } from 'react';
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L6 from "../../img/assets/final media/services IMAGE/L  6.png";
import s6 from "../../img/assets/final media/services IMAGE/s 6.png";
import svg1 from "../../img/assets/Servicepages/deptcollection/Group 65.svg";
import svg2 from "../../img/assets/Servicepages/deptcollection/Group 66.svg";
import svg3 from "../../img/assets/Servicepages/deptcollection/Group 68.svg";
import svg4 from "../../img/assets/Servicepages/deptcollection/Group 69.svg";
import svg5 from "../../img/assets/Servicepages/deptcollection/Exclude.svg";
import svg6 from "../../img/assets/Servicepages/deptcollection/Group 71.svg";
import svg7 from "../../img/assets/Servicepages/deptcollection/Group 72.svg";
import svg8 from "../../img/assets/Servicepages/deptcollection/Group 74.svg";
import svg9 from "../../img/assets/Servicepages/deptcollection/Group 77.svg";
import svg10 from "../../img/assets/Servicepages/deptcollection/Group 80.svg";
import svg11 from "../../img/assets/Servicepages/deptcollection/Group 79.svg";

const mainPoints = [
    {
      title: "Legal Representation for Debt Collection",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "We represent clients in court to recover outstanding debts, handling all aspects of the litigation process. Our experienced team prepares all necessary legal documents, files claims with the appropriate courts, and advocates on behalf of clients to ensure their financial claims are satisfied. Whether the debt involves individuals or corporations, we provide vigorous representation to secure the best possible outcome."
    },
    {
      title: "Debt Recovery Strategy Development",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "We design customized recovery strategies based on the nature of the debt and the debtor's circumstances. Our approach involves assessing the situation carefully, determining the most appropriate legal action, and then implementing a clear and systematic plan to pursue debt recovery, ensuring compliance with relevant legal regulations at every step."
    },
       {
      title: "Negotiation and Mediation",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "We offer negotiation services to reach amicable solutions, allowing clients to recover their debts without the need for formal litigation. Our team facilitates discussions between debtors and creditors to arrive at mutually agreeable terms, such as payment plans or settlements, minimizing legal costs and preserving business relationships."
        },
    {
      title: "Out-of-Court Debt Collection",
      icon: <img src={svg4} alt="svg2" className="point-icon" />,
      description: "Before initiating court proceedings, we attempt to resolve the issue through out-of-court negotiations. Our team engages in direct communication with debtors, sending formal demand letters and initiating settlement discussions. We seek to recover debts through negotiation, reducing the need for costly and time-consuming litigation."
    },
    {
      title: "Legal Notices and Formal Demand Letters",
      icon: <img src={svg5} alt="svg2" className="point-icon" />,
      description: "We prepare and send formal demand letters and legal notices to debtors, requesting immediate payment and outlining the potential legal consequences of non-payment. These official documents often serve as an effective first step in recovering outstanding debts, encouraging prompt payment and avoiding the need for court intervention."
    },
    {
      title: "Court Proceedings for Debt Recovery",
      icon: <img src={svg6} alt="svg2" className="point-icon" />,
      description: "When necessary, we initiate legal proceedings to recover unpaid debts. This includes filing claims in court, representing clients in hearings, and obtaining judgment in favor of our clients. Our team ensures that all steps are followed according to legal procedures, with the goal of securing a favorable ruling for our clients."
    },
     
    {
      title: "Enforcement of Court Orders and Judgments",
      icon: <img src={svg7} alt="svg2" className="point-icon" />,
      description: "Once a court order is obtained, we take the necessary steps to enforce it. This includes pursuing actions such as garnishing wages, seizing assets, and other legal enforcement measures to ensure that the debt is paid. Our team works closely with enforcement agencies to ensure the debtor complies with the court’s ruling."
    },
    {
      title: "Tracking and Follow-up Services",
      icon: <img src={svg8} alt="svg2" className="point-icon" />,
      description: "We offer ongoing follow-up services to monitor the debtor's payment progress. Our team ensures that all agreed-upon payment plans or settlements are adhered to, and we take further legal action if necessary to guarantee recovery. We track payments, communicate with debtors, and provide clients with regular updates on the status of their claims."
    },
    {
      title: "Debt Collection for Commercial and Consumer Claims",
      icon: <img src={svg9} alt="svg2" className="point-icon" />,
      description: "Whether the debt involves commercial entities or individual consumers, we handle both types of claims with expertise. We understand the nuances of business-to-business and business-to-consumer debt recovery and apply the most effective legal methods accordingly."
    },
    {
      title: "Debt Settlement and Payment Plans",
      icon: <img src={svg10} alt="svg2" className="point-icon" />,
      description: "If a debtor is unable to pay the full amount at once, we help negotiate structured payment plans that ensure clients still receive the money owed. We ensure these arrangements are legally binding and enforceable, protecting our clients’ financial interests."
    },
    {
      title: "Cross-Border Debt Collection",
      icon: <img src={svg11} alt="svg2" className="point-icon" />,
      description: "For international clients or cases involving debtors located in different jurisdictions, we provide cross-border debt collection services. Our team is familiar with international debt recovery regulations and works with local legal teams to recover debts from foreign entities or individuals."
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
              src={L6}
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

function DebtCollection() {




   // ===============================================
const [activeFaq, setActiveFaq] = useState(null);

const toggleFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

const faqItems = [
  {
    question: "What’s your process for collecting debt?",
    answer: "We begin with formal demand letters, then proceed to negotiations, legal proceedings, or court action if necessary."
  },
  {
    question: "Do you help with commercial and personal debts?",
    answer: "Yes. We handle debt recovery for individuals, businesses, and service providers."
  },
  {
    question: "Is your approach compliant with legal regulations?",
    answer: "Yes. Our debt collection methods follow all applicable laws to protect your rights and avoid liability."
  },
  {
    question: "What happens if the debtor refuses to pay?",
    answer: "We explore legal actions such as filing a claim, obtaining a judgment, and enforcing it through garnishment or liens."
  },
  {
    question: "Can you locate missing or evasive debtors?",
    answer: "Yes. We utilize skip-tracing techniques and databases to locate hard-to-find debtors."
  },
  {
    question: "Do you charge upfront fees for debt recovery?",
    answer: "Our pricing models are flexible, including flat fees or contingency-based arrangements depending on the case."
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
                  <span>Recover What’s Yours – Efficiently and Legally</span>
                
                  
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
            <h2 className="service-description-title">Debt Collection</h2>

              <p>At Nubis Legal Consultancy, we provide comprehensive debt collection services designed to help our clients recover unpaid debts efficiently and effectively. Our experienced team leverages legal expertise, strategic negotiation, and thorough enforcement measures to ensure the timely recovery of outstanding financial claims. We handle all stages of the debt collection process—from initial assessment and demand letter preparation to pursuing legal action if necessary.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L6} alt="About Us 2" />
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
        <img src={s6} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Legal demand letters & negotiation.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Court representation for debt recovery</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Mediation & settlement options.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Assessment of the debt and documentation.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Tracing and locating debtors.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Enforcement of judgments and court orders.</p>
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

export default DebtCollection;