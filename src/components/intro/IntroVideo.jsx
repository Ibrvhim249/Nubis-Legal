import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./IntroVideo.css";

const IntroVideo = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleFinish = useCallback(() => {
    setIsVisible(false);
    if (onFinish) onFinish();
  }, [onFinish]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleFinish(); // Fallback video dismissal after 10 seconds
    }, 10000);

    return () => clearTimeout(timer);
  }, [handleFinish]);

  return (
    isVisible && (
      <div className="intro-overlay">
        <video
          className="intro-video"
          autoPlay
          muted
          playsInline
          onEnded={handleFinish}
        >
          <source src="/introVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  );
};

IntroVideo.propTypes = {
  onFinish: PropTypes.func
};

export default IntroVideo;