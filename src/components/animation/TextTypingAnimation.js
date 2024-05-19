import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const TextTypingAnimation = (e) => {
  const textList = e.text.toString().split(' ');

  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({
        opacity: 1,
        y: 0,
      });
    }
  });

  return (
    <div ref={ref} className={e.applyClass + ' py-8'}>
      {textList.map((el, i) => (
        <motion.span
          initial={{ opacity: 0, y: -400 }}
          animate={mainControls}
          transition={{
            duration: 1.5,
            delay: i / 9,
          }}
          key={i}
        >
          {el}{' '}
        </motion.span>
      ))}
    </div>
  );
};

export default TextTypingAnimation;
