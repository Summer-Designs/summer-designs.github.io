import React from 'react';
import Navbar from './Navbar';
import AnimatedTitle from './animation/AnimatedTitle';
import TextTypingAnimation from './animation/TextTypingAnimation';
import PageTransition from './animation/PageTransition';
import Footer from './Footer';
import SCircle from '../assets/imgs/SCircle.svg';

const Where = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar fastload />

      <div className="p-12 md:p-24 text-center w-screen h-screen flex flex-col justify-center items-center bg-black overflow-x-hidden">
        <AnimatedTitle once delay={0} display="grid" text="WHERE." className="h1" />
        <TextTypingAnimation
          text="Think of us as your digital design ninjas, stealthily responding from the virtual shadows!"
          className="body-text w-4/5 text-white py-2"
        />
      </div>

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center py-24">
        <TextTypingAnimation
          text="We believe, If you're not prepared to be wrong,
		  you'll never come up with anything original."
          className="h2 w-3/4 text-white"
        />
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

export default PageTransition(Where);
