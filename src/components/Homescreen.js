import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import TextTypingAnimation from './animation/TextTypingAnimation';
import AnimatedTitle from './animation/AnimatedTitle';
import WorkList from './WorkList';
import Footer from './Footer';

import { motion } from 'framer-motion';

import SCircle from '../assets/imgs/SCircle.svg';
import HorizontalScrollCarousel from './animation/HorizontalScrollCarousel';

// import OurPic from '../assets/imgs/Us.JPG';
// import UIUX from '../assets/imgs/expertise/UIUX.webp';
// import Illustration from '../assets/imgs/expertise/Illustration.webp';
// import Branding from '../assets/imgs/expertise/Branding.webp';
// import Framer from '../assets/imgs/expertise/Framer.webp';

export default function Homescreen() {
  return (
    <>
      <Navbar />
      <Banner />

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center">
        <TextTypingAnimation
          text="SummerDesigns is a creative studio that helps brands connect with people, through iconic design, animation and visual storytelling."
          applyClass="h2 w-3/4 text-white"
        />
      </div>

      <WorkList />

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center gap-14">
        <AnimatedTitle once display="block" text="Our Creative Partners" className="h3" />
        <TextTypingAnimation
          text="We work as a strategic, creative partner to our clients, helping to shape their brands, tell their stories and move their audiences. From global brands to ambitious startups, our clients all have one thing in common…

          Great taste in creative agencies!"
          applyClass="h5 w-3/4 text-white"
        />
        <button className="primary-button">Book FREE 1 on 1</button>
      </div>

      <HorizontalScrollCarousel />

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center">
        <TextTypingAnimation
          text="We believe in the power of creativity to change the world. Guided by empathy and insight we help forward-thinking brands forge emotional connections and create positive, meaningful change."
          applyClass="h2 w-3/4 text-white"
        />
      </div>

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center gap-8 bg-[#09200D]">
        <TextTypingAnimation
          text='"We believe in the power of creativity to change the world. Guided by empathy and insight we help forward-thinking brands forge emotional connections and create positive, meaningful change."'
          applyClass="h4 w-3/4 text-white"
        />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 1 }}
          className="body-text"
        >
          Tirth Jivani, Founder of SummerDesigns
        </motion.div>
      </div>

      <div className="w-fit mx-auto h-fit flex flex-col justify-center items-center gap-2 mt-48">
        <AnimatedTitle once display="block" text="Your next design partner" className="h3" />
        <TextTypingAnimation
          text="Let's collaborate and craft something extraordinary together."
          applyClass="h5 w-3/4 text-white"
        />
        <button className="primary-button">Book FREE 1 on 1</button>
        <img alt="The SummerDesign Element" src={SCircle} className="-mt-12 -z-10" />
      </div>

      <Footer />
    </>
  );
}
