import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { LazyMotion } from 'framer-motion';

const LazyLoadSection = ({ sectionId, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsLoaded(true);
    }
  }, [isInView]);

  useEffect(() => {
    if (isLoaded) {
      controls.start({ opacity: 1, y: 0 });
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
