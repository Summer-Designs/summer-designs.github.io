import React from 'react';
import Navbar from './Navbar';
import PageTransition from './animation/PageTransition';
import AnimatedTitle from './animation/AnimatedTitle';
import TextTypingAnimation from './animation/TextTypingAnimation';
import Footer from './Footer';
import SCircle from '../assets/imgs/SCircle.svg';
import Work from '../assets/imgs/Work.webp';

const Why = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar fastload />

      <div className="p-12 md:p-24 text-center min-w-screen h-screen flex flex-col justify-center items-center bg-black overflow-x-hidden">
        <AnimatedTitle once delay={0} display="grid" text="WHY." className="h1" />
        <TextTypingAnimation
          text="We believe Design is an Art Form and Branding is the Pen. "
          className="body-text w-4/5 text-white py-2"
        />
      </div>

      <div className="w-screen pb-48 pt-12 mx-auto flex flex-col justify-center items-center gap-2 mt-48 px-4 lg:px-24">
        <AnimatedTitle once delay={0} text="Art of Branding" className="h2" />
        <TextTypingAnimation
          text="Branding isn't just about slapping a logo on everything and calling it a day. It's about telling your story, expressing your values, and connecting with your audience on a deeper level. Whether you're a budding startup or an established enterprise, our goal is to help you stand out from the crowd and make your mark in the world."
          className="body-text text-center w-3/4 text-white py-4"
        />
        <img alt="The SummerDesign Element" src={Work} className="my-8 rounded-3xl mx-8" />
      </div>

      <div className="w-fit mx-auto h-fit flex flex-col justify-center items-center gap-2 mt-48 px-4 lg:px-24">
        <AnimatedTitle
          once
          display="block"
          text="Ready to Transform Your Ideas into Reality?"
          delay={0}
          className="h3 px-8"
        />
        <TextTypingAnimation
          text="Let's work together to create something extraordinary. Contact us today to discuss your project and discover how The Summer Design can help you achieve your goals."
          className="body-text text-center w-3/4 text-white py-4"
        />
        <a href="https://calendly.com/thesummerdesign/1on1" target="_blank" rel="noreferrer" className="primary-button">
          Book FREE 1 on 1
        </a>
        <img alt="The SummerDesign Element" src={SCircle} className="my-12 -z-10" />
      </div>

      <Footer />
    </div>
  );
};

export default PageTransition(Why);
