import { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ImageComponent.css';

/**
 * ImageComponent - A high-performance parallax scrolling component that displays
 * a background image with text headings that change based on scroll position.
 * 
 * @param {string[]} headings - Array of text headings to display
 * @param {string} imageUrl - URL of the background image
 */
const ImageComponent = ({ headings, imageUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const parallaxRef = useRef(null);
  const stickyContainerRef = useRef(null);
  const currentIndexRef = useRef(currentIndex);

  // Sync ref with current index to avoid stale closures
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Track component visibility using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    const currentRef = parallaxRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Optimized scroll handler with requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!isVisible || !parallaxRef.current) return;

    requestAnimationFrame(() => {
      const { top, height } = parallaxRef.current.getBoundingClientRect();
      const scrollRange = height - window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, -top / scrollRange));

      // Update index using ref to avoid stale state
      const newIndex = Math.min(
        Math.floor(scrollProgress * headings.length),
        headings.length - 1
      );
      
      if (newIndex !== currentIndexRef.current) {
        setCurrentIndex(newIndex);
      }

      // Update scale for parallax effect
      setScale(1 + scrollProgress * 0.1);
    });
  }, [isVisible, headings.length]);

  // Scroll listener with passive handling for better performance
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initialize on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section className="parallax-section" ref={parallaxRef} aria-live="polite">
      {/* Scroll progress indicator */}
      {isVisible && (
        <nav className="scroll-indicator" aria-label="Content navigation">
          <ul>
            {headings.map((heading, i) => (
              <li key={i}>
                <div
                  className="dot"
                  aria-current={i === currentIndex ? 'step' : undefined}
                  title={heading}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="sticky-container" ref={stickyContainerRef}>
        {/* Parallax background with scaling effect */}
      <div className="background-container" aria-hidden="true">
  {imageUrl.endsWith('.mp4') ? (
    <video
      autoPlay
      loop
      muted
      className="background-image"
      style={{ transform: `scale(${scale})` }}
    >
      <source src={imageUrl} type="video/mp4" />
    </video>
  ) : (
    <img
      src={imageUrl}
      alt="Decorative background"
      className="background-image"
      style={{ transform: `scale(${scale})` }}
    />
  )}
  <div className="overlay" />
</div>
        
        {/* Content area with animated heading */}
        <div className="content">
          <h2 key={currentIndex} className="heading">
            {headings[currentIndex]}
          </h2>
        </div>
      </div>
    </section>
  );
};

ImageComponent.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default ImageComponent;