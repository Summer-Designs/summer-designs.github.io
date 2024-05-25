import React from 'react';
import Navbar from './Navbar';
import PageTransition from './animation/PageTransition';
import AnimatedTitle from './animation/AnimatedTitle';
import TextTypingAnimation from './animation/TextTypingAnimation';
import Footer from './Footer';
import SCircle from '../assets/imgs/SCircle.svg';

const Why = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar fastload />

      <div className="p-12 md:p-24 text-center min-w-screen h-screen flex flex-col justify-center items-center bg-black overflow-x-hidden">
        <AnimatedTitle once delay={0} display="grid" text="WHY." className="h1" />
        <TextTypingAnimation
          text="The Summer Design is a creative agency worked by two individual Tirth Jivani & Krishna Kumar, who help brands connect with people."
          className="body-text w-4/5 text-white py-2"
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
        <a href="https://calendly.com/thesummerdesign/1on1" className="primary-button">
          Book FREE 1 on 1
        </a>
        <img alt="The SummerDesign Element" src={SCircle} className="my-12 -z-10" />
      </div>

      <Footer />
    </div>
  );
};

export default PageTransition(Why);
