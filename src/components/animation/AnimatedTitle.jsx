import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
};

// eslint-disable-next-line
type AnimatedTextProps = {
  text: string | string[],
  className?: string,
  once?: boolean,
  delay?: number,
  display?: string,
  animation?: {
    hidden: Variant,
    visible: Variant,
  },
};

export const AnimatedText = ({ text, className, once, display, animation = defaultAnimations, delay = 2 }) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    if (isInView) {
      // Apply the delay before starting animation
      const timeoutId = setTimeout(() => controls.start('visible'), delay * 1000);

      // Cleanup function to clear timeout on unmount
      return () => clearTimeout(timeoutId);
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls, delay]); // Include delay in dependency array

  return (
    <div className={className}>
      <motion.span ref={ref} initial="hidden" animate={controls} variants={animation} aria-hidden>
        {textArray.map((line, lineIndex) => (
          <span className={display} key={`${line}-${lineIndex}`}>
            {line.split(' ').map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split('').map((char, charIndex) => (
                  <motion.span key={`${char}-${charIndex}`} className="inline-block" variants={animation}>
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </div>
  );
};

export default AnimatedText;
