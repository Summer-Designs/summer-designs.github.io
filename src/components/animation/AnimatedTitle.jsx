import { motion, useInView, useAnimation, Variant } from 'framer-motion';
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
    },
  },
};

type AnimatedTextProps = {
  text: string | string[],
  className?: string,
  once?: Boolean,
  display?: string,
  animation?: {
    hidden: Variant,
    visible: Variant,
  },
};

export const AnimatedText = ({ text, className, once, display, animation = defaultAnimations }: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <div className={className}>
      <span className="sr-only">{textArray.join(' ')}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
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
