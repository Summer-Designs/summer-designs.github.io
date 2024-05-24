import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { LazyMotion } from 'framer-motion'; // For lazy loading Framer Motion features

const LazyLoadSection = ({ sectionId, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once
  const controls = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsLoaded(true); // Load section content when in view
    }
  }, [isInView]);

  useEffect(() => {
    if (isLoaded) {
      controls.start({ opacity: 1, y: 0 }); // Animate section on load
    }
  }, [isLoaded, controls]);

  return (
    <LazyMotion>
      {isLoaded && (
        <motion.section ref={ref} id={sectionId} className="lazy-section">
          {children}
        </motion.section>
      )}
    </LazyMotion>
  );
};

export default LazyLoadSection;
