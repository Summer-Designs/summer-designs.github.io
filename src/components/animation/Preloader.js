import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WorkImage from '../../assets/imgs/Work.png';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(100));

    const interval = setInterval(() => {
      setCount((prevCount) => Math.min(prevCount + 1, 100));
    }, 12);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const digitVariants = {
    from: { opacity: 0 },
    to: { opacity: 1 },
  };

  const tensDigit = Math.floor(count / 10);
  const onesDigit = count % 10;

  const barStyle = {
    width: `${progress}%`,
    height: '100%',
    backgroundImage: `url("${WorkImage}")`,
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: `width 2s ease-in-out`,
  };

  return (
    <>
      <div className="fixed w-screen h-screen bg-black">
        <div className="absolute w-screen h-screen" style={barStyle}></div>
        <div className="fixed z-50 h1 text-[40vw] leading-[40vw] counter flex items-center justify-center w-screen h-screen text-white mix-blend-difference">
          <motion.span animate={digitVariants} transition={{ duration: 0.2 }}>
            {tensDigit}
          </motion.span>
          <motion.span animate={digitVariants} transition={{ duration: 0.2 }}>
            {onesDigit}
          </motion.span>
        </div>
      </div>
    </>
  );
};

export default Preloader;
