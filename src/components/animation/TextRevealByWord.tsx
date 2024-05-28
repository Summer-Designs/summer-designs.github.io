import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Call useScroll at the top level of the component
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = text.split(' ');

  return (
    <div ref={targetRef} className={`relative mx-auto z-0 h-[200vh] ${className || ''}`}>
      <div className={'sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]'}>
        <p
          className={
            'flex justify-center flex-wrap p-5 text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl'
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="lg:mx-2.5 relative mx-1 h5">
      <span className={'absolute opacity-30'}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={'text-black dark:text-white'}>
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
