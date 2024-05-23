import React from 'react';
import Navbar from './Navbar';
import AnimatedTitle from './animation/AnimatedTitle';
import TextTypingAnimation from './animation/TextTypingAnimation';
import PageTransition from './animation/PageTransition';
import UsPic from '../assets/imgs/Us.JPG';

const Info = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar fastload />

      <div
        className="p-12 md:p-24 w-screen h-screen flex justify-center items-center md:justify-start bg-black overflow-x-hidden bg-cover bg-[40rem_bottom] sm:bg-[40rem_bottom] md:bg-right-bottom"
        style={{ backgroundImage: `url(${UsPic})` }}
      >
        <AnimatedTitle once delay={0} display="grid" text="WHO." className="h1 mb-40" />
      </div>

      <div className="w-fit mx-auto h-screen flex flex-col justify-center items-center py-24">
        <TextTypingAnimation
          text="The Summer Design is a creative agency worked by two indivisuals Tirth Jivani & Krishna Kumar, who helps brands connect with people."
          applyClass="h2 w-3/4 text-white"
        />
      </div>
    </div>
  );
};

export default PageTransition(Info);
