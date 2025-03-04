import { useState, useEffect } from 'react';

const useAnimation = (ref, threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current; // Capture current value in closure
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node); // Use captured value in cleanup
    };
  }, [ref, threshold]); // Still include ref in dependencies

  return isVisible;
};

export default useAnimation;