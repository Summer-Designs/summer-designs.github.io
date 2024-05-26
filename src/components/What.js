import React from 'react';
import '../index.css';
import { workListData } from '../data/WorkListData';
import Navbar from './Navbar';
import PageTransition from './animation/PageTransition';
import AnimatedTitle from './animation/AnimatedTitle';
import TextTypingAnimation from './animation/TextTypingAnimation';
import Footer from './Footer';
import SCircle from '../assets/imgs/SCircle.svg';

const What = () => {
  return (
    <>
      <Navbar fastload />

      <div className="p-12 md:p-24 text-center min-w-screen h-screen flex flex-col justify-center items-center bg-black overflow-x-hidden">
        <AnimatedTitle once delay={0} display="grid" text="WHAT." className="h1" />
        <TextTypingAnimation
          text="The Summer Design is a creative agency worked by two individual Tirth Jivani & Krishna Kumar, who help brands connect with people."
          className="body-text w-4/5 text-white py-2"
        />
      </div>

      <div className="grid h-screen grid-cols-2 gap-8 my-16 mx-8 md:mx-16 lg:mx-24">
        {workListData.map(([tag, title, url, applyClass, showHomescreen]) => (
          <div className={'flex flex-col'}>
            <div className="relative h-48 lg:h-96 overflow-hidden bg-no-repeat rounded-3xl">
              <img
                src={url}
                className=" h-max transition duration-300 ease-in-out hover:scale-110 hover:opacity-70"
                alt="Work"
              />
            </div>
            <div className="p-4">
              <div className="flex flex-row justify-between items-center text-white">
                <div className="uppercase body-text">{tag}</div>
                <h5>{title}</h5>
              </div>
            </div>
          </div>
        ))}
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
    </>
  );
};

export default PageTransition(What);
