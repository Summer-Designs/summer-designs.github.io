import React, { useEffect, useRef, useState } from 'react';
// import Lenis from 'lenis';
import { images } from '../../data/workImages';
import './gallery.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const Gallery = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    // const lenis = new Lenis();
    const raf = (time) => {
      // lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const Column = ({ images, y }) => {
    return (
      <motion.div className={'column'} style={{ y }}>
        {images.map((src, i) => (
          <div key={i} className={'imageContainer'}>
            <img src={src.src} alt="" className={'image'} />
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <main className={'main'}>
      <div className={'gallery'}>
        <div className={'galleryWrapper'}>
          <Column y={y} images={[images[0], images[1], images[2]]} />
          <Column y={y2} images={[images[3], images[4], images[5]]} />
          <Column y={y3} images={[images[6], images[7], images[8]]} />
          <Column y={y4} images={[images[9], images[10], images[11]]} />
        </div>
      </div>
    </main>
  );
};

export default Gallery;
