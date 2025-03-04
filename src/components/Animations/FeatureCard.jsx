import { useRef } from 'react';
import PropTypes from 'prop-types';
import useAnimation from './Animation';

const FeatureCard = ({ icon, title, text }) => {
  const ref = useRef(null);
  const isVisible = useAnimation(ref, 0.1);

  return (
    <div 
      ref={ref} 
      className={`feature-card ${isVisible ? 'visible' : ''}`}
    >
      <div className="feature-icon">
        <img src={icon} alt={title} className="w-full h-full p-2 object-contain" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeatureCard;