import React from 'react';
import BackgroundVideo from '../assets/videos/background.mp4';
import AnimatedTitle from './animation/AnimatedTitle';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="z-10 w-fit mx-auto h-screen flex flex-col justify-center items-center">
        <motion.h3
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1, delay: 1 }}
          className="font-summerWind font-[400] z-10 mb-4"
        >
          The
        </motion.h3>
        <AnimatedTitle once delay={1} display="grid" text="SUMMER DESIGNS." className="h1" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 0.5, delay: 1 }}
        className="bg-black/70 absolute top-0 left-0 w-screen h-screen"
      ></motion.div>
      <video
        src={BackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute -z-10 w-auto min-w-full min-h-full max-w-none"
      ></video>
    </div>
  );
};

export default Banner;
