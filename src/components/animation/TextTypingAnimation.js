import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const TextTypingAnimation = ({ text, className, initialY = -400, duration = 2, delayMultiplier = 0.1 }) => {
  const textList = text.toString().split(' ');

  const ref = useRef(null);
  const isInView = useInView(ref);

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className={className}>
      {textList.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: initialY }}
          animate={controls}
          transition={{
            duration,
            delay: i * delayMultiplier,
          }}
        >
          {el}{' '}
        </motion.span>
      ))}
    </div>
  );
};

export default TextTypingAnimation;
